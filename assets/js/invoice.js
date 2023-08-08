// EVENTIA
const EVENTIA_API = "https://connect.eventtia.com/api/v3";
const EVENTIA_AUTH = "/auth";
const EVENTIA_EVENT = "/events/congresoendocrinologia2023";
const EVENTIA_SEARCH_BY_ID = "/attendees/{{attendee_id}}";
// FACTURAMA
const FACTURAMA_API = "https://apisandbox.facturama.mx"; //https://api.facturama.mx/
const FACTURAMA_STATES = "/catalogs/States?countryCode=MEX";
const FACTURAMA_TOWNS = "/catalogs/Municipalities?stateCode={{stateCode}}";
const FACTURAMA_LOCALITIES = "/catalogs/localities?stateCode={{stateCode}}";
const FACTURA_REGIMEN_FISCAL = "/Catalogs/FiscalRegimens?rfc={{rfc}}";
const FACTURA_CFDI_TYPES = "/Catalogs/CfdiTypes";
const FACTURA_CFDI_USES =  "/catalogs/CfdiUses";
const FACTURAMA_ZIPCODE = "catalogs/PostalCodes?keyword={{zipcode}}"
const FACTURAMA_RFC_STATUS = "/Client/status?rfc={{rfc}}";
const FACTURAMA_PAYMENT_FORMS = "/catalogs/PaymentForms";
const FACTURAMA_CLIENT = "/Client";
const FACTURAMA_INVOICE = "/3/cfdis";
const FACTURAMA_SEARCH_INVOICE = "/cfdi?type=Issued&status=Active&rfc={{rfc}}";
const FACTURAMA_SEND_INVOICE = "/Cfdi?cfdiType=issued&cfdiId={{invoiceIssued}}&email={{email}}"
const FACTURAMA_FIND_ISSUED_ID = "/cfdi?type=Issued&status=Active&rfc={{rfc}}"
const FACTURAMA_GET_INVOICE_BY_ISSUED_ID = "/Cfdi/pdf/issued/{{issuedId}}"
const FACTURAMA_USER_AGENT = "pruebas";
const FACTURAMA_TOKEN = "cHJ1ZWJhczpwcnVlYmFzMjAxMQ==";

const baseOption = '<option value="-" selected="selected" disabled class="option">Select an option</option>';
var EVENTIA_AUTH_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFzcyI6IlVzZXIiLCJhdXRoZW50aWNhdGlvbl9rZXkiOiJjZXNhci5yaXZhc0B0aHVuZGVycC5jb20ubXgiLCJ3aGl0ZV9sYWJlbCI6ZmFsc2UsImV4cCI6MTY5NzQ5NDgzMn0.2_UclWb2GEZI9rQoRg9yVlQFqNrxcqNUZ1BObxKpzVo";
var issuedId = "";
var isSearch = false;

window.onload = function () {
    getEventiaApiKey();
};

// Event listener for the generate invoice form submission
$('#generate-invoice-form').submit(async function (event) {
    isSearch = false;
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#generate-invoice-form #uuid').val();
    var email = $('#generate-invoice-form #email').val();
    var rfc = $('#generate-invoice-form #rfc').val();

    await validateEmail(email);

    // Hide the submit button and show the loading button
    $('#generate-submit-button').hide();
    $('#generate-loading-button').show();

    // Call the generateInvoice() function after a small delay (for demonstration purposes)
    setTimeout(async function () {
        await validateUserData(uuid, email, rfc);
    }, 1000);
});

// Event listener for the search invoice form submission
$('#search-invoice-form').submit(function (event) {
    isSearch = true;
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var rfc = $('#search-invoice-form #rfc').val();
    var email = $('#search-invoice-form #email-search').val();

    validateEmail(email);

    // Hide the submit button and show the loading button
    $('#search-submit-button').hide();
    $('#search-loading-button').show();

    // Call the generateInvoice() function after a small delay (for demonstration purposes)
    setTimeout(async function () {
        await searchInvoice(rfc, email);
    }, 1000);
});

function validateEmail(email) {
    // Validate UUID and email using regex
    var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
}

// Update Address states type
$('#state').on('change', function () {
    var stateSelection = $("#state option:selected").val();

    $("#state-preview").val(stateSelection);
    $("#state-preview").prop('disabled', true);

    $("#town").empty();
    var townOptions = [];
    townOptions.push(baseOption);

    return callFacturamaApi(FACTURAMA_TOWNS.replace("{{stateCode}}", stateSelection), 'GET')
    .done(function(data) {
        data.forEach(state => {
            townOptions.push(`<option value="${state.Value}" class="option">${state.Name}</option>`);
        });
        // Append the option element to the select element
        $("#town").append(townOptions);
    })
    .fail(function(xhr, status, error) {
        console.error('Error fetching state town:', error);
        showWarningMessage("Error fetching state data");
    });
});

// Function to search for an invoice
async function searchInvoice(rfc, email) {
    // Validate valid RFC
    const isRegistered = await isFacturamaUserAlreadyCreated(email);

    if(isRegistered) {
        await findIssuedIdByRfc(rfc);
        // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
        $('#search-loading-button').hide();
        $('#download-invoice-search-btn').show();
    } else {
        showWarningMessage("Email could not been found on facturama.")
    }
}

// Helper function to show input form fields for generating an invoice
async function showInvoiceForm() {
    $('#invoice-section-option').hide();
    $('#modal-invoice-form').show();
    await loadStatesData();
    await loadUsoCfdi();
    await loadPaymentForms();
}

async function loadPaymentForms() {
    // Clear any existing options
    $("#payment-form").empty();
    var paymentOptions = [];
    paymentOptions.push(baseOption);

    // Make the Ajax request to the API endpoint
    return await callFacturamaApi(FACTURAMA_PAYMENT_FORMS, 'GET')
    .done(function(data) {
        data.forEach(payment => {
            paymentOptions.push(`<option value="${payment.Value}" class="option">${payment.Name}</option>`);
        });
        $("#payment-form").append(paymentOptions);
    })
    .fail(function(xhr, status, error) {
        console.error('Error fetching payment data:', error);
        showWarningMessage("Error fetching payment data");
    });
}

async function loadStatesData() {
    // Clear any existing options
    $("#state").empty();
    var stateOptions = [];
    stateOptions.push(baseOption);

    // Make the Ajax request to the API endpoint
    return await callFacturamaApi(FACTURAMA_STATES, 'GET')
    .done(function(data) {
        data.forEach(state => {
            stateOptions.push(`<option value="${state.Value}" class="option">${state.Name}</option>`);
        });
        $("#state").append(stateOptions);
    })
    .fail(function(xhr, status, error) {
        console.error('Error fetching state data:', error);
        showWarningMessage("Error fetching state data");
    });
}

async function loadUsoCfdi() {
    $("#uso-cfdi").empty();
    var cfdiOptions = [];
    cfdiOptions.push(baseOption);

    // Make the Ajax request to the API endpoint
    return await callFacturamaApi(FACTURA_CFDI_USES, 'GET')
    .done(function(data) {
        data.forEach(state => {
            cfdiOptions.push(`<option value="${state.Value}" class="option">${state.Name}</option>`);
        });
        $("#uso-cfdi").append(cfdiOptions);
    })
    .fail(function(xhr, status, error) {
        console.error('Error fetching state data:', error);
        showWarningMessage("Error fetching state data");
    });
}

// Helper function to show a warning message
function showWarningMessage(message) {
    // Create the alert element
    var alertElement = $('<div>').addClass('alert alert-danger').attr('role', 'alert').html(message);

    // Append the alert element to a container in your HTML
    var alertContainer = $('#alert-container');
    showAlert(alertContainer, alertElement);
}

function showAlert(alertContainer, alertElement) {
    // Append the alert element to a container in your HTML
    alertContainer.empty().append(alertElement);

    // Remove the alert after the specified duration
    setTimeout(function () { alertContainer.empty(); }, 3000);
}

async function validateUserData(uuid, email, rfc) {
    // Validate uuid and status in Eventia
    const eventiaValidation = await validateUUIDEventia(uuid);
    // Validate valid RFC
    const rfcValidation = await validateClientRFC(rfc);

    const isRegistered = await isFacturamaUserAlreadyCreated(email);

    // If client is not register inside facturama yet
    if(!isRegistered) {
        if (eventiaValidation && rfcValidation) {

            $("#rfc-preview").val(rfc);
            $("#rfc-preview").prop('disabled', true);
            $("#email-preview").val(email);
            $("#email-preview").prop('disabled', true);
            
            await showInvoiceForm();
            // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
            $('#generate-submit-button').show();
            $('#generate-loading-button').hide();
        }
    } else {
        $('#generate-loading-button').hide();
        $('#download-invoice-btn').show();
    }
}

// 30eb4c -> pago, 9241bc -> no pago
async function validateUUIDEventia(uuid) {
    var validate = false;
    // Make an AJAX request to retrieve data
    await callEventiaApi('GET', EVENTIA_EVENT + EVENTIA_SEARCH_BY_ID.replace("{{attendee_id}}", uuid))
        .done(function(response) {
            if (!response.data.attributes.paid) {
                showWarningMessage('Payment status is not completed.');
            }
            validate = response.data.attributes.paid;
        })
        .fail(function(xhr, status, error) {
            console.error('Can not get eventia API data:', error);
            showWarningMessage("Can not get eventia API data.");
        });
    return validate;
}

async function validateClientRFC(rfc) {
    // Make the Ajax request to the API endpoint
    const validRFC = await callFacturamaApi(FACTURAMA_RFC_STATUS.replace("{{rfc}}", rfc), 'GET')
    .done(function(response) {
        return response.RfcLocalizado;
    })
    .fail(function(xhr, status, error) {
        console.error('RFC is not valid: ', error);
        showWarningMessage("RFC is not valid.");
    });

    if(validRFC) {
        getRegimenFiscal(rfc);
    }
    return validRFC;
}

async function getRegimenFiscal(rfc) {
    $("#regimen-fiscal").empty();
    var regimenFiscalOptions = [];
    regimenFiscalOptions.push(baseOption);

    await callFacturamaApi(FACTURA_REGIMEN_FISCAL.replace("{{rfc}}", rfc), 'GET')
    .done(function(data) {
        data.forEach(state => {
            regimenFiscalOptions.push(`<option value="${state.Value}" class="option">${state.Name}</option>`);
        });
        // Append the option element to the select element
        $("#regimen-fiscal").append(regimenFiscalOptions);
    })
    .fail(function(xhr, status, error) {
        console.error('Can not get regimen fiscal data: ', error);
        showWarningMessage("Can not get regimen fiscal data");
    });
}

// Function to generate an invoice
async function getEventiaApiKey(){
    if (EVENTIA_AUTH_KEY === "") {
        await callEventiaApi()
        .done(function(response) {
            if (response?.auth_token && response?.username) {
                EVENTIA_AUTH_KEY = response?.auth_token;
            }
        })
        .fail(function(xhr, status, error) {
            console.error('Can not get eventia API data:', error);
            showWarningMessage("Can not get eventia API data.");
        });
    }
}

async function generateInvoice() {
    const name = $('#fullName').val();
    const razonSocial = $('#razon-social').text();
    const rfc = $('#rfc').val();
    const email = $('#email').val();
    const usoCfdi = $('#uso-cfdi option:selected').val();
    const regimenFiscal = $('#regimen-fiscal option:selected').val();
    const amount = $('#ticket-amount').val();
    const stateSelection = $("#state option:selected").text();
    const townSelection =  $("#town option:selected").text();
    const houseNumber = $('#house-number').val();
    const zipCode = $('#zipcode').val();
    const paymentForm = $('#payment-form').val();

    const facturamaUserId = await generateFacturamaUser(name, rfc, regimenFiscal, email, usoCfdi, stateSelection, townSelection, houseNumber, zipCode);
    const invoiceGenerated = await generateFacturamaInvoice(name, email, rfc, usoCfdi, zipCode, regimenFiscal, paymentForm, amount, facturamaUserId);

    if(invoiceGenerated) {
        // Hide invoice form and show option menu
        $('#invoice-section-option').show();
        $('#modal-invoice-form').hide();

        // Hide option submit btn and show download option btn
        $('#generate-submit-button').hide();
        $('#download-invoice-btn').show();
    }
}

// Move project to AWS, LB -> EC2 -> nodejs
// Unidad -> E48 Unidad de servicio
// Clave de producto -> 80141902
// Objeto de impuesto -> Si objeto de impuesto
// iva 16%
// checar pago por id de eventia -> https://docs.eventtia.com/#list-of-attendee-payments
async function generateFacturamaInvoice(name, email, rfc, cfdi, zipcode, regimenFiscal, paymentForm, amount, facturamaUserId){
    var completed = false;
    const invoice = {
        "Currency": "MXN",
        "CfdiType": "I",
        "PaymentForm": paymentForm,
        "PaymentMethod": "PUE",
        "OrderNumber": "SMNE-" + facturamaUserId,
        "ExpeditionPlace": "64060",
        "Date": new Date().toISOString(),
        "Exportation": "01",
        "Receiver": {
            "Rfc": rfc,
            "Name": name,
            "CfdiUse": cfdi,
            "TaxZipCode": zipcode,
            "FiscalRegime": regimenFiscal
        },
        "Items": [
            {
              "ProductCode": "80141902",
              "Description": "Boletio Eventia SMNE",
              "Unit": "NO APLICA",
              "UnitCode": "E48",
              "UnitPrice": amount,
              "Quantity": 1.0,
              "TaxObject":"02",
              "Taxes": [
                {
                  "Total": 16,
                  "Name": "IVA",
                  "Base": amount,
                  "Rate": 0.16,
                  "IsRetention": false
                }
              ],
              "Total": amount + (amount * 0.16)
            },
        ]
    }

    await callFacturamaApi(FACTURAMA_INVOICE, 'POST', invoice)
        .done(function(response) {
            issuedId = response.Id;
            completed = true;
        })
        .fail(function(xhr, status, error) {
            console.error('Can not generate invoice: ', error);
            showWarningMessage("Can not generate invoice");
        })
    return completed;
}

async function generateFacturamaUser(name, rfc, regimen, email, cfdiUseType, state, town, houseNumber, zipCode) {
    var id = "";
    const user = {
        "Rfc": rfc,
        "Name": name,
        "FiscalRegime": regimen,
        "Email": email,
        "CfdiUse": cfdiUseType,
        "Address": {
            "ExteriorNumber": houseNumber,
            "InteriorNumber": houseNumber,
            "ZipCode": zipcode,
            "Locality": state,
            "ZipCode": zipCode,
            "Municipality": town,
            "State": state,
            "Country": "Mex"
        }
    };

    await callFacturamaApi(FACTURAMA_CLIENT, 'POST', user)
        .done(function(response) {
            id = response.Id;
        })
        .fail(function(xhr, status, error) {
            console.error('Client has not been register in facturama: ', error);
            showWarningMessage("Client has not been register in facturama");
        });

    return id;
}

async function isFacturamaUserAlreadyCreated(email) {
    var data = [];
    await callFacturamaApi(FACTURAMA_CLIENT, 'GET')
        .done(function(response) {
            data = response.filter(obj => obj.Email === email);
        })
        .fail(function(xhr, status, error) {
            console.error('Client has not been register in facturama: ', error);
            showWarningMessage("Client has not been register in facturama");
        });
    return data.length > 0;
}

async function downloadInvoice() {
    if(isSearch) {
        $('#download-invoice-search-spinner').show();
    } else {
        $('#download-invoice-spinner').show();
    }

    const rfc = $('#rfc').val();
    const email = $('#email').val();
    var content = "";

    // Send invoice via email
    if(issuedId == "") { await findIssuedIdByRfc(rfc); }
    callFacturamaApi(FACTURAMA_SEND_INVOICE.replace("{{invoiceIssued}}", issuedId).replace("{{email}}", email), 'POST')
    .done(function(response) {
    })
    .fail(function(xhr, status, error) {
        console.error('Can not send invoice via email: ', error);
        showWarningMessage("Can not send invoice via email");
    })

    // Download invoice
    await callFacturamaApi(FACTURAMA_GET_INVOICE_BY_ISSUED_ID.replace("{{issuedId}}", issuedId), 'GET')
    .done(function(response) {
        content = response.Content;
        downloadPDF(content);
    })
    .fail(function(xhr, status, error) {
        console.error('Could not download invoice: ', error);
        showWarningMessage("Could not download invoice.");
    });

    if(isSearch) {
        $('#download-invoice-search-btn').hide();
        $('#search-submit-button').show();
    } else {
        $('#download-invoice-btn').hide();
        $('#generate-submit-button').show();
    }
}

async function downloadPDF(content) {
    const linkSource = `data:application/pdf;base64,${content}`;
    const downloadLink = document.createElement("a");
    const fileName = "invoice.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

async function findIssuedIdByRfc(rfc){
    await callFacturamaApi(FACTURAMA_FIND_ISSUED_ID.replace("{{rfc}}", rfc), 'GET')
    .done(function(response) {
        var data = response;
        issuedId = data.filter(invoice => invoice.IsActive)[0].Id;
    })
    .fail(function(xhr, status, error) {
        console.error('Could get any invoice data: ', error);
        showWarningMessage("Could get any invoice data.");
    });
}

// On change states ------------------------------------------------------------
// Full name
$('#fullName').on('input', function () {
    $("#fullNamePreview").val($("#fullName").val());
    $("#fullNamePreview").prop('disabled', true);
});

// Razon social
$('#razon-social').on('input', function () {
    $("#razon-social-preview").val($("#razon-social").val());
    $("#razon-social-preview").prop('disabled', true);
});

// Monto a facturar
$('#ticket-amount').on('input', function () {
    $("#ticket-amount-preview").val($("#ticket-amount").val());
    $("#ticket-amount-preview").prop('disabled', true);
});

// Regimen fiscal
$('#regimen-fiscal').on('change', function () {
    $("#regimen-fiscal-preview").val($("#regimen-fiscal option:selected").text());
    $("#regimen-fiscal-preview").prop('disabled', true);
});

// Uso CFDI
$('#uso-cfdi').on('change', function () {
    $("#uso-cfdi-preview").val($("#uso-cfdi option:selected").text());
    $("#uso-cfdi-preview").prop('disabled', true);
});

//Payment form
$('#payment-form').on('change', function () {
    $("#payment-form-preview").val($("#payment-form option:selected").text());
    $("#payment-form-preview").prop('disabled', true);
});

// Payment type
$('#payment-type').on('change', function () {
    $("#payment-type-preview").val($("#payment-type option:selected").text());
    $("#payment-type-preview").prop('disabled', true);
});

// State
$('#state').on('change', function () {
    $("#state-preview").val($("#state option:selected").text());
    $("#state-preview").prop('disabled', true);
});

// Town
$('#town').on('change', function () {
    $("#town-preview").val($("#town option:selected").val());
    $("#town-preview").prop('disabled', true);
});

// Zipcode
$('#zipcode').on('input', function () {
    $("#zipcode-preview").val($("#zipcode").val());
    $("#zipcode-preview").prop('disabled', true);
});

// House number
$('#house-number').on('input', function () {
    $("#house-number-preview").val($("#house-number").val());
    $("#house-number-preview").prop('disabled', true);
});

function callFacturamaApi(apiPath, method = 'GET', data = null) {
    return $.ajax({
        url: FACTURAMA_API + apiPath,
        method: method,
        data: data ? JSON.stringify(data) : null,
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', `Basic ${FACTURAMA_TOKEN}`);
            xhr.setRequestHeader('Content-Type', 'application/json');
        },
    });
}

// Get api key before generate/download an invoice
function callEventiaApi(httpType = 'POST', path = null) {

    if(path != null) {
        return $.ajax({
            url: EVENTIA_API + path,
            method: httpType,
            dataType: "json",
            crossDomain: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${EVENTIA_AUTH_KEY}`);
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
        });
    }
    // Make an AJAX request to retrieve data
    return $.ajax({
        url: EVENTIA_API + EVENTIA_AUTH + '?email=cesar.rivas@thunderp.com.mx&password=Experience2023!!!',
        method: httpType,
        dataType: "json",
        crossDomain: true
    });
}