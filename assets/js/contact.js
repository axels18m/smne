
function submitContactForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (firstName != '' && lastName != '' && email != '' && phone != '') {

        fetch('http://localhost:3000/send-email?' + new URLSearchParams({
            name: firstName + ' ' + lastName,
            email: email,
            phone: phone,
            message: message
        }), {
            method: 'POST',
            mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        })
            .then(function (response) {
                if (response.ok) {
                    console.log('Email sent successfully');
                } else {
                    console.error('Failed to send email');
                }
            })
            .catch(function (error) {
                console.error('Error sending email:', error);
            });

    }
    return false;
}