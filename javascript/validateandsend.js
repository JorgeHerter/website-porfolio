// Initialize EmailJS with your user ID
/*(function() {
    const publicKey = "zFRNSO2E3PYCOZaGq"; // Replace with your actual public key
    console.log("Initializing EmailJS with public key:", publicKey);
    emailjs.init(publicKey);
})();

function showStatusModal(message, type) {
    const modal = $('#statusModal');
    const modalBody = $('#modalStatusMessage');
    
    modalBody.text(message);
    modal.removeClass('success error sending').addClass(type);
    
    modal.modal('show');
}

function validateAndSend() {
    console.log("validateAndSend function called");

    const fullName = document.getElementById("fullName").value;
    const emailInput = document.getElementById("emailInput").value;
    const message = document.getElementById("message").value;
    const submitButton = document.querySelector('button[onclick="validateAndSend()"]');

    console.log("Form values:", { fullName, emailInput, message });

    // Validation
    if (!fullName || !emailInput || !message) {
        console.log("Validation failed: Empty fields");
        showStatusModal("Please fill in all fields.", "error");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        console.log("Validation failed: Invalid email");
        showStatusModal("Please enter a valid email address.", "error");
        return;
    }

    const templateParams = {
        from_name: fullName,
        from_email: emailInput,
        message: message
    };

    console.log("Preparing to send email with params:", templateParams);

    // Disable the submit button to prevent multiple submissions
    if (submitButton) {
        submitButton.disabled = true;
        console.log("Submit button disabled");
    }

    // Show a "Sending..." message
    showStatusModal("Sending...", "sending");

    console.log("Calling emailjs.send");
    emailjs.send("service_odmivkn", "template_1mz4ckg", templateParams)
        .then((response) => {
            console.log("Email sent successfully!", response);
            showStatusModal("Email sent successfully!", "success");
            // Clear form fields after successful send
            document.getElementById("fullName").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            showStatusModal("Failed to send email: " + error.text, "error");
        })
        .finally(() => {
            // Re-enable the submit button
            if (submitButton) {
                submitButton.disabled = false;
                console.log("Submit button re-enabled");
            }
        });
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    const form = document.querySelector('.contact-form');
    if (form) {
        console.log("Form found, adding event listener");
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log("Form submitted, calling validateAndSend");
            validateAndSend();
        });
    } else {
        console.log("Form not found");
    }
});*/
(function() {
    const publicKey = "zFRNSO2E3PYCOZaGq"; // Replace with your actual public key
    console.log("Initializing EmailJS with public key:", publicKey);
    emailjs.init(publicKey);
})();

function showStatusModal(message, type) {
    const modal = $('#contactModal');
    const modalBody = $('.modal-body', modal);
    const statusMessage = $('<div class="status-message"></div>').addClass(type).text(message);

    modalBody.append(statusMessage);

    setTimeout(() => {
        statusMessage.remove();
        if (type === 'success') {
            modal.modal('hide');
            clearFormFields();
        }
    }, 3000); // Hide the status message after 3 seconds
}

function validateAndSend() {
    console.log("validateAndSend function called");

    const fullName = document.getElementById("fullName").value;
    const emailInput = document.getElementById("emailInput").value;
    const message = document.getElementById("message").value;
    const submitButton = document.querySelector('button[onclick="validateAndSend()"]');

    console.log("Form values:", { fullName, emailInput, message });

    // Validation
    if (!fullName || !emailInput || !message) {
        console.log("Validation failed: Empty fields");
        showStatusModal("Please fill in all fields.", "error");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        console.log("Validation failed: Invalid email");
        showStatusModal("Please enter a valid email address.", "error");
        return;
    }

    const templateParams = {
        from_name: fullName,
        from_email: emailInput,
        message: message
    };

    console.log("Preparing to send email with params:", templateParams);

    // Disable the submit button to prevent multiple submissions
    if (submitButton) {
        submitButton.disabled = true;
        console.log("Submit button disabled");
    }

    // Show a "Sending..." message
    showStatusModal("Sending...", "sending");

    console.log("Calling emailjs.send");
    emailjs.send("service_odmivkn", "template_1mz4ckg", templateParams)
        .then((response) => {
            console.log("Email sent successfully!", response);
            showStatusModal("Email sent successfully!", "success");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            showStatusModal("Failed to send email: " + error.text, "error");
        })
        .finally(() => {
            // Re-enable the submit button
            if (submitButton) {
                submitButton.disabled = false;
                console.log("Submit button re-enabled");
            }
        });
}

function clearFormFields() {
    document.getElementById("fullName").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("message").value = "";
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    const form = document.querySelector('.contact-form');
    if (form) {
        console.log("Form found, adding event listener");
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log("Form submitted, calling validateAndSend");
            validateAndSend();
        });
    } else {
        console.log("Form not found");
    }
});

