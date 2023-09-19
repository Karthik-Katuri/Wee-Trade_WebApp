document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin-form");
    const registerForm = document.getElementById("register-form");
    const sellerButton = document.getElementById("seller-button");
    const signinOptionButton = document.getElementById("signin-option");
    const registerOptionButton = document.getElementById("register-option");
    const panelContainer = document.querySelector(".panel-container");

    if (signinForm) {
        signinForm.addEventListener("submit", function (e) {
            e.preventDefault();
            // Handle sign-in logic here
            // You can send a request to your backend to authenticate the user
            // Redirect to the user dashboard on successful sign-in
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            // Handle registration logic here
            // You can send a request to your backend to create a new user account
            // Redirect to the sign-in page on successful registration
        });
    }

    if (sellerButton) {
        sellerButton.addEventListener("click", function () {
            // Toggle the visibility of the sliding panel
            panelContainer.classList.toggle("show-panel");
        });
    }

    if (signinOptionButton) {
        signinOptionButton.addEventListener("click", function () {
            // Redirect to the sign-in page
            window.location.href = "sindex.html";
        });
    }

    if (registerOptionButton) {
        registerOptionButton.addEventListener("click", function () {
            // Redirect to the registration page
            window.location.href = "sregister.html";
        });
    }
});
// sscript.js

document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'reset_password.html'; // Redirect to the reset password page
    });
    
    // Add other JavaScript code for form submission and other functionality as needed
});

