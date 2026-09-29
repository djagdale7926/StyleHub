
/* ===================================
   STYLEHUB AUTHENTICATION
=================================== */

// Get registered users
function getUsers() {
    return JSON.parse(
        localStorage.getItem("stylehubUsers")
    ) || [];
}

// Get current logged-in user
function getCurrentUser() {
    return JSON.parse(
        localStorage.getItem("stylehubCurrentUser")
    );
}

// Register new customer
function registerUser(name, email, password) {

    let users = getUsers();

    email = email.trim().toLowerCase();

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        return {
            success: false,
            message: "Email already registered!"
        };
    }

    const newUser = {
        id: Date.now(),
        name: name.trim(),
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem(
        "stylehubUsers",
        JSON.stringify(users)
    );

    return {
        success: true,
        message: "Registration successful!"
    };
}

// Login customer
function loginUser(email, password) {

    let users = getUsers();

    email = email.trim().toLowerCase();

    const user = users.find(user =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
        return {
            success: false,
            message: "Invalid email or password!"
        };
    }

    // Do not store password in current session
    const currentUser = {
        id: user.id,
        name: user.name,
        email: user.email
    };

    localStorage.setItem(
        "stylehubCurrentUser",
        JSON.stringify(currentUser)
    );

    return {
        success: true,
        message: "Login successful!"
    };
}

// Logout
function logoutUser() {

    localStorage.removeItem(
        "stylehubCurrentUser"
    );

    window.location.href = "account.html?view=login";
}

// Update cart count in navbar
function updateCartCount() {

    const cart = JSON.parse(
        localStorage.getItem("stylehubCart")
    ) || [];

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.querySelectorAll(".cart-count")
        .forEach(element => {
            element.textContent = count;
        });
}

// Update cart count whenever page loads
document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);