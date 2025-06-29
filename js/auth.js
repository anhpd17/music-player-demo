// Form switching animation
function switchForm(form) {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    if (form === "signup") {
        loginForm.classList.add("slide-out");
        setTimeout(() => {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            setTimeout(() => {
                signupForm.classList.add("slide-in");
            }, 50);
        }, 500);
    } else {
        signupForm.classList.remove("slide-in");
        setTimeout(() => {
            signupForm.style.display = "none";
            loginForm.style.display = "block";
            loginForm.classList.remove("slide-out");
        }, 500);
    }
}

// Password visibility toggle
document.querySelectorAll(".password-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function () {
        const input = this.previousElementSibling.previousElementSibling;
        const type = input.type === "password" ? "text" : "password";
        input.type = type;
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});

// Password strength meter
const passwordInput = document.getElementById("signup-password");
const strengthBar = document.querySelector(".password-strength-bar");

passwordInput.addEventListener("input", function () {
    const password = this.value;
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^A-Za-z0-9]/)) strength += 25;

    strengthBar.style.width = strength + "%";

    if (strength <= 25) {
        strengthBar.style.backgroundColor = "#dc3545";
    } else if (strength <= 50) {
        strengthBar.style.backgroundColor = "#ffc107";
    } else if (strength <= 75) {
        strengthBar.style.backgroundColor = "#17a2b8";
    } else {
        strengthBar.style.backgroundColor = "#28a745";
    }

    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
        password.length < 8 ? "block" : "none";
});
