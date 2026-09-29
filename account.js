
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const authSection = document.getElementById("authSection");
const profileSection = document.getElementById("profileSection");

const authMessage = document.getElementById("authMessage");

const profileTab = document.getElementById("profileTab");
const loginTab = document.getElementById("loginTab");

const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");


// Switch to Login form
showLogin.addEventListener("click", () => {

    loginForm.hidden = false;
    registerForm.hidden = true;

    authMessage.textContent = "";
});


// Switch to Register form
showRegister.addEventListener("click", () => {

    loginForm.hidden = true;
    registerForm.hidden = false;

    authMessage.textContent = "";
});


// Display login section
loginTab.addEventListener("click", () => {

    authSection.hidden = false;
    profileSection.hidden = true;

    loginForm.hidden = false;
    registerForm.hidden = true;

    authMessage.textContent = "";
});


// Display profile section
profileTab.addEventListener("click", showProfile);


// Registration
registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;

    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        authMessage.textContent = "Passwords do not match!";
        authMessage.style.color = "red";

        return;
    }

    const result = registerUser(name, email, password);

    authMessage.textContent = result.message;

    authMessage.style.color =
        result.success ? "green" : "red";

    if (result.success) {

        registerForm.reset();

        loginForm.hidden = false;
        registerForm.hidden = true;
    }

});


// Login
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const result = loginUser(email, password);

    authMessage.textContent = result.message;

    authMessage.style.color =
        result.success ? "green" : "red";

    if (result.success) {
        showProfile();
    }

});


// Display customer profile
function showProfile() {

    const user = getCurrentUser();

    authSection.hidden = true;
    profileSection.hidden = false;

    if (!user) {

        profileSection.innerHTML = `
            <h2>Please Login First</h2>
            <p>You need to login to view your profile.</p>
            <button id="goToLogin" class="main-btn">
                Go to Login
            </button>
        `;

        document.getElementById("goToLogin")
            .addEventListener("click", () => {

                authSection.hidden = false;
                profileSection.hidden = true;

            });

        return;
    }

    document.getElementById("profileName").textContent = user.name;
    document.getElementById("profileEmail").textContent = user.email;
}


// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {

    logoutUser();

});


// Open correct section using URL
const params = new URLSearchParams(window.location.search);

if (params.get("view") === "profile") {

    showProfile();

} else if (params.get("view") === "login") {

    authSection.hidden = false;
    profileSection.hidden = true;

} else if (getCurrentUser()) {

    showProfile();

}