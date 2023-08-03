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
const FACTURAMA_ZIPCODE = "catalogs/PostalCodes?keyword={{zipcode}}"
const FACTURAMA_RFC_STATUS = "/Client/status?rfc={{rfc}}";
const FACTURAMA_ADD_CLIENT = "/Client";

const FACTURAMA_INVOICE = "";
const FACTURAMA_USER_AGENT = "pruebas";
const FACTURAMA_TOKEN = "cHJ1ZWJhczpwcnVlYmFzMjAxMQ==";

const baseOption = '<option value="-" selected="selected" disabled class="option">Select an option</option>';

var EVENTIA_AUTH_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFzcyI6IlVzZXIiLCJhdXRoZW50aWNhdGlvbl9rZXkiOiJjZXNhci5yaXZhc0B0aHVuZGVycC5jb20ubXgiLCJ3aGl0ZV9sYWJlbCI6ZmFsc2UsImV4cCI6MTY5NzQ5NDgzMn0.2_UclWb2GEZI9rQoRg9yVlQFqNrxcqNUZ1BObxKpzVo";

/*
    @ToDO
    - On generate-invoice form:
        - Create user within Facturama on submit form
        - Generate invoice with user data form
        - Send invoice via email
        - Show option to download invoice

    - Download acuse sat (check this step)

    - On search-invoice form, validate:
        - User exits
        - Has invoice, if not -> create one
        - download and send via email

    - Move code to nodejs to hide credentials and path

    - Validate invalid data on submit/response 
*/

window.onload = function () {
    getEventiaApiKey();
};

// Event listener for the generate invoice form submission
$('#generate-invoice-form').submit(async function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#generate-invoice-form #uuid').val();
    var email = $('#generate-invoice-form #email').val();
    var rfc = $('#generate-invoice-form #rfc-generate').val();

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
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#search-invoice-form #rfc').val();
    var email = $('#search-invoice-form #email-search').val();

    validateEmail(email);

    // Hide the submit button and show the loading button
    $('#search-submit-button').hide();
    $('#search-loading-button').show();

    // Call the generateInvoice() function after a small delay (for demonstration purposes)
    setTimeout(async function () {
        await searchInvoice(uuid, email);

        // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
        $('#search-submit-button').show();
        $('#search-loading-button').hide();
    }, 2000);
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

function validateZipcode(zipcode) {
    return callFacturamaApi(FACTURAMA_ZIPCODE.replace("{{zipcode}}", zipcode), 'GET')
    .done(function(data) {
        return data.length > 0;
    })
    .fail(function(xhr, status, error) {
        console.error('Error fetching zipcode data:', error);
        showWarningMessage("Error fetching zipcode data");
    });
}

// Function to search for an invoice
function searchInvoice(uuid, email) {
    // Make an AJAX request to retrieve data
    $.ajax({
        url: 'https://api.facturama.mx/invoices',
        method: 'GET',
        data: {
            uuid: uuid,
            email: email
        },
        success: function (response) {
            // Check if invoice exists
            if (response.invoiceExists) {
                // Show option to download the invoice
                showDownloadOption();
            } else {
                // Show message to generate an invoice
                showWarningMessage('Invoice does not exist. Generate one.');
            }
        },
        error: function () {
            // Show error message if the API request fails
            showWarningMessage('Error occurred while retrieving data.');
        }
    });
}

// Helper function to show input form fields for generating an invoice
async function showInvoiceForm() {
    $('#invoice-section-option').hide();
    $('#modal-invoice-form').show();
    await loadStatesData();
    await loadUsoCfdi();
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
    return await callFacturamaApi(FACTURA_CFDI_TYPES, 'GET')
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

// Helper function to show the option to download the invoice
function showDownloadOption() {
}

function showAlert(alertContainer, alertElement) {
    // Append the alert element to a container in your HTML
    alertContainer.empty().append(alertElement);

    // Remove the alert after the specified duration
    setTimeout(function () { alertContainer.empty(); }, 2000);
}

function validateInvoice() {}

function generateInvoiceForm() {
    // success on submitting invoice to facturama
    $('#invoice-section-option').show();
    // show option to download
}

function updateEventiaAuthToken() {}

async function validateUserData(uuid, email, rfc) {
    // Validate uuid and status in Eventia
    const eventiaValidation = await validateUUIDEventia(uuid);
    // Validate valid RFC
    const rfcValidation = await validateClientRFC(rfc);

    if (eventiaValidation && rfcValidation) {
        showInvoiceForm();

        // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
        $('#generate-submit-button').show();
        $('#generate-loading-button').hide();
    }
}

async function validateUUIDEventia(uuid) {
    var eventia = false;
    // Make an AJAX request to retrieve data
    await $.ajax({
        // replace -> uuid
        url: EVENTIA_API + EVENTIA_EVENT + EVENTIA_SEARCH_BY_ID.replace("{{attendee_id}}", '30eb4c'),
        method: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + EVENTIA_AUTH_KEY);
        },
        success: function (response) {
            // Check if uuid and email exist
            if (response?.data && response.data?.attributes) {
                // Validate payment status
                if (response.data.attributes.paid) {
                    eventia = true;
                } else {
                    // Show warning message if payment status is not completed
                    showWarningMessage('Payment status is not completed.');
                }
            } else {
                // Show warning message if uuid or email do not exist
                showWarningMessage('UUID or email does not exist.');
            }
        },
        error: function (response) {
            // Show error message if the API request fails
            showWarningMessage('Error occurred while retrieving data.');
        }
    });
    return eventia;
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

// 30eb4c -> pago, 9241bc -> no pago
// Function to generate an invoice
async function generateInvoice() {
    const razonSocial = $('#generate-invoice-form #razon-social').val();
    const rfc = $('#generate-invoice-form #rfc-generate').val();
    const email = $('#generate-invoice-form #email').val();
    const zipCode = $('#generate-invoice-form #zipcode').val();
    const usoCfdi = $('#uso-cfdi option:selected').val();
    const regimenFiscal = $('#regimen-fiscal option:selected').val();
    const montoFacturacion = $('#generate-invoice-form #ticket-amount').val();
    const stateSelection = $("#state option:selected").val();
    const townSelection = $("#town option:selected").val();
    const neighborhoodSelection = $("#neighborhood option:selected").val();
    const houseNumber = $('#generate-invoice-form #house-number').val();

}

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

function generateFacturamaUser() {
}

function callFacturamaApi(apiPath, method, data = null) {
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
function callEventiaApi() {
    // Make an AJAX request to retrieve data
    $.ajax({
        url: EVENTIA_API + EVENTIA_AUTH + '?email=cesar.rivas@thunderp.com.mx&password=Experience2023!!!',
        method: 'POST',
        dataType: "json",
        crossDomain: true
    });
}