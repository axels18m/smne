// Event listener for the generate invoice form submission
$('#generate-invoice-form').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#generate-invoice-form #uuid').val();
    var email = $('#generate-invoice-form #email').val();

    validateUUIDAndEmailForm(uuid, email);

    // Hide the submit button and show the loading button
      $('#generate-submit-button').hide();
      $('#generate-loading-button').show();

      // Call the generateInvoice() function after a small delay (for demonstration purposes)
      setTimeout(function() {
        generateInvoice(uuid, email);

        // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
        $('#generate-submit-button').show();
        $('#generate-loading-button').hide();
      }, 2000);
});

// Event listener for the search invoice form submission
$('#search-invoice-form').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#search-invoice-form #uuid-search').val();
    var email = $('#search-invoice-form #email-search').val();

    validateUUIDAndEmailForm(uuid, email);

    // Hide the submit button and show the loading button
    $('#search-submit-button').hide();
    $('#search-loading-button').show();

    // Call the generateInvoice() function after a small delay (for demonstration purposes)
    setTimeout(function() {
        searchInvoice(uuid, email);

        // Show the submit button and hide the loading button after the function execution (for demonstration purposes)
        $('#search-submit-button').show();
        $('#search-loading-button').hide();
    }, 2000);
});

function validateUUIDAndEmailForm(uuid, email) {
    // Validate UUID and email using regex
    var uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i;
    var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (!uuidRegex.test(uuid)) {
      alert('Please enter a valid UUID.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
}

// Function to generate an invoice
function generateInvoice(uuid, email) {
    // Make an AJAX request to retrieve data
    $.ajax({
        url: 'https://api.facturama.mx/invoices',
        method: 'GET',
        data: {
            uuid: uuid,
            email: email
        },
        success: function (response) {
            // Check if uuid and email exist
            if (response.uuid && response.email) {
                // Validate payment status
                if (response.paymentStatus === 'completed') {
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
        error: function () {
            // Show error message if the API request fails
            showWarningMessage('Error occurred while retrieving data.');
        }
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
    setTimeout(function() {
        alertContainer.empty();
    }, 2000);
}
