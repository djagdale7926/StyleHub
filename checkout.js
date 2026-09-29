
/* ==============================
   STYLEHUB CHECKOUT JAVASCRIPT
============================== */

// Get cart from localStorage
function getCheckoutCart() {
    return JSON.parse(localStorage.getItem("stylehubCart")) || [];
}

// Display order summary
function displayCheckout() {

    const cart = getCheckoutCart();

    const checkoutItems = document.getElementById("checkoutItems");
    const totalItems = document.getElementById("checkoutTotalItems");
    const subtotalElement = document.getElementById("checkoutSubtotal");
    const totalElement = document.getElementById("checkoutTotal");
    const placeOrderBtn = document.getElementById("placeOrderBtn");

    checkoutItems.innerHTML = "";

    let subtotal = 0;
    let count = 0;

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="empty-checkout">
                <h4>Your cart is empty!</h4>
                <p>Add products before proceeding to checkout.</p>

                <a href="products.html">
                    Continue Shopping
                </a>
            </div>
        `;

        totalItems.textContent = 0;
        subtotalElement.textContent = 0;
        totalElement.textContent = 0;

        placeOrderBtn.disabled = true;

        return;
    }

    placeOrderBtn.disabled = false;

    cart.forEach(item => {

        const quantity = Number(item.quantity) || 0;
        const price = Number(item.price) || 0;

        const itemTotal = price * quantity;

        subtotal += itemTotal;
        count += quantity;

        checkoutItems.innerHTML += `
            <div class="checkout-product">

                <img src="${item.image}" alt="${item.name}">

                <div class="checkout-product-details">

                    <h4>${item.name}</h4>

                    <p>Quantity: ${quantity}</p>

                    <p>Price: ₹${price.toLocaleString("en-IN")}</p>

                </div>

                <div class="checkout-product-price">
                    ₹${itemTotal.toLocaleString("en-IN")}
                </div>

            </div>
        `;
    });

    // Free delivery
    const delivery = 0;

    const total = subtotal + delivery;

    totalItems.textContent = count;

    subtotalElement.textContent =
        subtotal.toLocaleString("en-IN");

    totalElement.textContent =
        total.toLocaleString("en-IN");
}

// Handle order submission
document.getElementById("checkoutForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const cart = getCheckoutCart();

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Validate form
        if (!this.checkValidity()) {
            this.reportValidity();
            return;
        }

        // Get customer information
        const customerName =
            document.getElementById("fullName").value.trim();

        const customerEmail =
            document.getElementById("email").value.trim();

        const customerPhone =
            document.getElementById("phone").value.trim();

        const customerAddress =
            document.getElementById("address").value.trim();

        const customerCity =
            document.getElementById("city").value.trim();

        const customerPincode =
            document.getElementById("pincode").value.trim();

        const paymentMethod =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;

        // Calculate order total
        const total = cart.reduce((sum, item) => {
            return sum +
                (Number(item.price) || 0) *
                (Number(item.quantity) || 0);
        }, 0);

        // Generate demo order ID
        const orderId =
            "SH" + Date.now().toString().slice(-8);

        // Save demo order in localStorage
        const order = {
            orderId: orderId,
            customer: {
                name: customerName,
                email: customerEmail,
                phone: customerPhone,
                address: customerAddress,
                city: customerCity,
                pincode: customerPincode
            },
            products: cart,
            paymentMethod: paymentMethod,
            totalAmount: total,
            orderDate: new Date().toLocaleString()
        };

        let orders =
            JSON.parse(localStorage.getItem("stylehubOrders")) || [];

        orders.push(order);

        localStorage.setItem(
            "stylehubOrders",
            JSON.stringify(orders)
        );

        // Clear cart after placing demo order
        localStorage.removeItem("stylehubCart");

        // Update navbar cart count if available
        if (typeof updateCartCount === "function") {
            updateCartCount();
        }

        // Display success message
        document.getElementById("orderId").textContent = orderId;

        document.getElementById("orderSuccess").hidden = false;

        // Disable further submission
        document.getElementById("placeOrderBtn").disabled = true;
    }
);

// Continue shopping
function continueShopping() {
    window.location.href = "products.html";
}

// Load checkout page
displayCheckout();