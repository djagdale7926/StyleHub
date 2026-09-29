
function getCart() {
    return JSON.parse(localStorage.getItem("stylehubCart")) || [];
}

// Display cart products
function displayCart() {
    let cart = getCart();

    const cartContainer = document.getElementById("cartContainer");
    const totalItems = document.getElementById("totalItems");
    const totalPrice = document.getElementById("totalPrice");

    cartContainer.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <h3>Your cart is empty!</h3>
            <a href="products.html">Continue Shopping</a>
        `;

        totalItems.textContent = 0;
        totalPrice.textContent = 0;
        return;
    }

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        cartContainer.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-details">

                    <h3>${item.name}</h3>

                    <p>Price: ₹${item.price}</p>

                    <div class="quantity-control">

                        <button onclick="changeQuantity(${index}, -1)">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${index}, 1)">
                            +
                        </button>

                    </div>

                    <p>
                        Subtotal: ₹${item.price * item.quantity}
                    </p>

                    <button class="remove-btn"
                            onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    totalItems.textContent = count;
    totalPrice.textContent = total;
}

// Increase or decrease quantity
function changeQuantity(index, change) {

    let cart = getCart();

    cart[index].quantity += change;

    // Remove product if quantity becomes zero
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("stylehubCart", JSON.stringify(cart));

    displayCart();

    if (typeof updateCartCount === "function") {
        updateCartCount();
    }
}

// Remove product completely
function removeItem(index) {

    let cart = getCart();

    cart.splice(index, 1);

    localStorage.setItem("stylehubCart", JSON.stringify(cart));

    displayCart();

    if (typeof updateCartCount === "function") {
        updateCartCount();
    }
}

// Checkout
function checkout() {
    let cart = getCart();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location.href = "checkout.html";
}

displayCart();