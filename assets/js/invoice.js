const EVENTIA_API           = "https://connect.eventtia.com/api/v3";
const EVENTIA_AUTH          = "/auth";
const EVENTIA_EVENT         = "/events/congresoendocrinologia2023";
const EVENTIA_SEARCH_BY_ID  = "/attendees/{{attendee_id}}";
var EVENTIA_AUTH_KEY        = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFzcyI6IlVzZXIiLCJhdXRoZW50aWNhdGlvbl9rZXkiOiJjZXNhci5yaXZhc0B0aHVuZGVycC5jb20ubXgiLCJ3aGl0ZV9sYWJlbCI6ZmFsc2UsImV4cCI6MTY5NzQ5NDgzMn0.2_UclWb2GEZI9rQoRg9yVlQFqNrxcqNUZ1BObxKpzVo";
var mexicoJson              = {};
var stateFilter             = [];

const invoiceRegisterOptions = { "0": { "605": { "desc": "Sueldos y Salarios e Ingresos Asimilados a Salarios", "options": ["S01 - Sin Efectos fiscales"] }, "606": { "desc": "Arrendamiento", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "607": { "desc": "Régimen de Enajenación o Adquisición de Bienes", "options": ["S01 - Sin Efectos fiscales",] }, "608": { "desc": "Demás ingresos", "options": ["S01 - Sin Efectos fiscales", 6] }, "610": { "desc": "Residentes en el Extranjero sin Establecimiento Permanente en Méxic", "options": ["S01 - Sin Efectos fiscales",] }, "611": { "desc": "Ingresos por Dividendos (socios y accionistas)", "options": ["S01 - Sin Efectos fiscales",] }, "612": { "desc": "Personas Físicas con Actividades Empresariales y Profesionales", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "614": { "desc": "Ingresos por intereses", "options": ["S01 - Sin Efectos fiscales",] }, "615": { "desc": "Régimen de los ingresos por obtención de premios", "options": ["S01 - Sin Efectos fiscales",] }, "621": { "desc": "Incorporación Fiscal", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "626": { "desc": "Régimen Simplificado de Confianz", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] } }, "1": { "601": { "desc": "General de Ley Personas Morales", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "603": { "desc": "Personas Morales con Fines no Lucrativos ", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "610": { "desc": "Residentes en el Extranjero sin Establecimiento Permanente en México", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "622": { "desc": "Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "623": { "desc": "Opcional para Grupos de Sociedades", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "624": { "desc": "Coordinados", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] }, "626": { "desc": "Régimen Simplificado de Confianza", "options": ["S01 - Sin Efectos fiscales", "G01 - Adquisición de mercancías", "G03 - Gastos en general"] } } };

window.onload = function () {
    getEventiaAuthKey();
    loadMexicoData();
};


function loadMexicoData() {
    // all data mexico.js
    fetch('assets/js/mexico.json')
        .then(response => response.json())
        .then(data => {
            mexicoJson = data;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Event listener for the generate invoice form submission
$('#generate-invoice-form').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#generate-invoice-form #uuid').val();
    var email = $('#generate-invoice-form #email').val();

    validateEmail(email);

    // Hide the submit button and show the loading button
    $('#generate-submit-button').hide();
    $('#generate-loading-button').show();

    // Call the generateInvoice() function after a small delay (for demonstration purposes)
    setTimeout(async function () {
        await showInvoiceForm();//await generateInvoice(uuid, email);

        // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
        $('#generate-submit-button').show();
        $('#generate-loading-button').hide();
    }, 1000);
});

// Event listener for the search invoice form submission
$('#search-invoice-form').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#search-invoice-form #uuid-search').val();
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

// Get api key before generate/download an invoice
function getEventiaAuthKey() {
    // Make an AJAX request to retrieve data
    if (EVENTIA_AUTH_KEY === "") {
        $.ajax({
            url: EVENTIA_API + EVENTIA_AUTH + '?email=cesar.rivas@thunderp.com.mx&password=Experience2023!!!',
            method: 'POST',
            dataType: "json",
            crossDomain: true,
            success: function (response) {
                // Check if uuid and email exist
                if (response?.auth_token && response?.username) {
                    EVENTIA_AUTH_KEY = response?.auth_token;

                }
            },
            error: function (response) {
                // Show error message if the API request fails
                showWarningMessage("Can not get eventia API data.");
            }
        });
    }

}

function validateEmail(email) {
    // Validate UUID and email using regex
    var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
}

// 30eb4c -> pago, 9241bc -> no pago
// Function to generate an invoice
function generateInvoice(uuid, email) {
    // Make an AJAX request to retrieve data
    $.ajax({
        url: EVENTIA_API + EVENTIA_EVENT + EVENTIA_SEARCH_BY_ID.replace("{{attendee_id}}", '30eb4c'),
        method: 'GET',
        dataType: "json",
        crossDomain: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + EVENTIA_AUTH_KEY);
        },
        success: function (response) {
            // Check if uuid and email exist
            if (response?.data && response.data?.attributes) {
                // Validate payment status
                if (response.data.attributes.status === "confirmed" && response.data.attributes.paid) {
                    // Show input form fields to generate the invoice
                    showInvoiceForm();
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
}

// Update contribuyente type on select options
$('#tipo-contribuyente').on('change', function () {
    var selectVal = $("#tipo-contribuyente option:selected").val();

    // Clear previous options
    $("#uso-cfdi").empty();
    $("#regimen-fiscal").empty();
    var usoCFDIOptions = [];
    var regimenOptions = [];

    const baseOption = '<option value="-" selected="selected" disabled class="option">Select an option</option>';
    regimenOptions.push(baseOption);
    usoCFDIOptions.push(baseOption);

    for (const [key, value] of Object.entries(invoiceRegisterOptions[selectVal])) {
        regimenOptions.push(`<option value="${key}" class="option">${value.desc}</option>`);
    };
    if (selectVal === "1") {
        usoCFDIOptions.push(`<option value="S01" class="option">Sin Efectos fiscales</option>`)
        usoCFDIOptions.push(`<option value="G01" class="option">Adquisición de mercancías</option>`)
        usoCFDIOptions.push(`<option value="G03" class="option">Gastos generales</option>`)
    }

    // Append the option element to the select element
    $("#regimen-fiscal").append(regimenOptions);
    $("#uso-cfdi").append(usoCFDIOptions);
});

// Update CFDI type
$('#regimen-fiscal').on('change', function () {
    var selectVal = $("#tipo-contribuyente option:selected").val();
    var regimen = $("#regimen-fiscal option:selected").val();

    if (selectVal === "0" && regimen != "-") {
        // Clear previous options
        $("#uso-cfdi").empty();
        var cfdiOptions = [];

        const baseOption = '<option value="-" selected="selected" disabled class="option">Select an option</option>';
        cfdiOptions.push(baseOption);

        invoiceRegisterOptions[selectVal][regimen]["options"].forEach(value => {
            var [code, desc] = value.split(" - ")
            console.log(code + ", " + desc)
            cfdiOptions.push(`<option value="${code}" class="option">${desc}</option>`);
        });

        // Append the option element to the select element
        $("#uso-cfdi").append(cfdiOptions);
    }
});

// Update Address states type
$('#state').on('change', function () {
    var stateSelection = $("#state option:selected").val();

    $("#town").empty();
    var townOptions = [];

    const baseOption = '<option value="-" selected="selected" disabled class="option">Select an option</option>';
    townOptions.push(baseOption);

    // Filter 1: data["clave"] equals desiredClave
    stateFilter = mexicoJson.filter(function(item) {
        return item.clave === stateSelection;
    });

    stateFilter[0]["municipios"].forEach(item => {
        townOptions.push(`<option value="${item.clave}" class="option">${item.nombre}</option>`);
    });

    // Append the option element to the select element
    $("#town").append(townOptions);
});

// Update Address neighborhoods type
$('#town').on('change', function () {
    var stateSelection = $("#state option:selected").val();
    var townSelection = $("#town option:selected").val();

    $("#neighborhood").empty();
    var neighborhoodsOptions = [];

    const baseOption = '<option value="-" selected="selected" disabled class="option">Select an option</option>';
    neighborhoodsOptions.push(baseOption);
    // Filter 1: data["clave"] equals desiredClave
    // Filter 2: data["clave"]["localidades"] equals desiredLocalidadesClave
    var filter = mexicoJson.filter(function(item) {
        return item.clave === stateSelection;
      }).map(function(item) {
        var matchingMunicipio = item.municipios.find(function(municipio) {
          return municipio.clave === townSelection;
        });
        return {
          clave: item.clave,
          localidades: matchingMunicipio.localidades
        };
      });

    //Update missing colonias
    filter[0]["localidades"].forEach(item => {
        neighborhoodsOptions.push(`<option value="${item.clave}" class="option">${item.nombre}</option>`);
    });

    // Append the option element to the select element
    $("#neighborhood").append(neighborhoodsOptions);
});

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
                showMessage('Invoice does not exist. Generate one.');
            }
        },
        error: function () {
            // Show error message if the API request fails
            showMessage('Error occurred while retrieving data.');
        }
    });
}

// Helper function to show input form fields for generating an invoice
function showInvoiceForm() {
    $('#invoice-section-option').hide();
    $('#modal-invoice-form').show();
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

// Helper function to show a message
function showMessage(message) {
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
    setTimeout(function () {
        alertContainer.empty();
    }, 2000);
}

function validateInvoice() {

}

function generateInvoiceForm() {
    // success on submitting invoice to facturama
    $('#invoice-section-option').show();
    // show option to download

}

function updateEventiaAuthToken() {

}