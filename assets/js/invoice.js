// Event listener for the generate invoice form submission
$('#generate-invoice-form').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#generate-invoice-form #uuid').val();
    var email = $('#generate-invoice-form #email').val();

    // Call the generateInvoice() function
    generateInvoice(uuid, email);
});

// Event listener for the search invoice form submission
$('#search-invoice-form').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the UUID and email from the form
    var uuid = $('#search-invoice-form #uuid').val();
    var email = $('#search-invoice-form #email').val();

    // Call the searchInvoice() function
    searchInvoice(uuid, email);
});

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
    // Your code to show the input form fields goes here
}

// Helper function to show a warning message
function showWarningMessage(message) {
    // Your code to display the warning message goes here
}

// Helper function to show the option to download the invoice
function showDownloadOption() {
    // Your code to show the download option goes here
}

// Helper function to show a message
function showMessage(message) {
    // Your code to display the message goes here
}

// Example usage
var uuid = 'example-uuid';
var email = 'example@example.com';

// Generate invoice
//generateInvoice(uuid, email);

// Search invoice
//searchInvoice(uuid, email);
