document.addEventListener("DOMContentLoaded", function () {
    const sellerButton = document.getElementById("seller-button");
    const panelContainer = document.querySelector(".panel-container");
    const signinOptionButton = document.getElementById("signin-option");
    const registerOptionButton = document.getElementById("register-option");
    const nextStepButton = document.getElementById("next-step-2");
    const prevStepButton = document.getElementById("prev-step-1");
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");

    if (sellerButton) {
        sellerButton.addEventListener("click", function () {
            // Toggle the visibility of the sliding panel
            panelContainer.classList.toggle("show-panel");
        });
    }

    if (signinOptionButton) {
        signinOptionButton.addEventListener("click", function () {
            // Redirect to the sign-in page
            window.location.href = "index.html";
        });
    }

    if (registerOptionButton) {
        registerOptionButton.addEventListener("click", function () {
            // Redirect to the registration page
            window.location.href = "register.html";
        });
    }

    if (nextStepButton) {
        nextStepButton.addEventListener("click", function () {
            // Hide Step 1 and show Step 2 when the "Next" button is clicked
            step1.style.display = "none";
            step2.style.display = "block";
        });
    }

    if (prevStepButton) {
        prevStepButton.addEventListener("click", function () {
            // Hide Step 2 and show Step 1 when the "Previous" button is clicked
            step2.style.display = "none";
            step1.style.display = "block";
        });
    }
});
