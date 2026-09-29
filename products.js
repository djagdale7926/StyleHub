/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [
    {
        id: 101,
        name: "Floral Maxi Dress",
        category: "Women",
        color: "Pink",
        size: "M",
        price: 2499,
        image: "dresses/w1.jpeg"
    },
    {
        id: 201,
        name: "Formal Suit",
        category: "Men",
        color: "Black",
        size: "L",
        price: 4999,
        image: "dresses/m1.jpg"
    },
    {
        id: 301,
        name: "Girls Party Frock",
        category: "Kids",
        color: "Purple",
        size: "S",
        price: 1299,
        image: "dresses/k1.jpge"
    },
    {
        id: 401,
        name: "Gold Pendant Necklace",
        category: "Women Jewellery",
        color: "Gold",
        size: "One Size",
        price: 2999,
        image: "dresses/wj1.jpg"
    },
    {
        id: 601,
        name: "High Heels",
        category: "Women Footwear",
        color: "Red",
        size: "38",
        price: 2499,
        image: "dresses/wf1.jpg"
    },
    {
        id: 102,
        name: "Designer Saree",
        category: "Women",
        color: "Red",
        size: "L",
        price: 2999,
        image: "dresses/w2.jpg"
    },
    {
        id: 202,
        name: "Casual Jeans & T-Shirt",
        category: "Men",
        color: "Blue",
        size: "M",
        price: 1499,
        image: "dresses/m2.jpg"
    },
    {
        id: 302,
        name: "Boys Casual T-Shirt",
        category: "Kids",
        color: "Yellow",
        size: "M",
        price: 799,
        image: "dresses/k2.jpg"
    },
    {
        id: 501,
        name: "Leather Bracelet",
        category: "Men Jewellery",
        color: "Brown",
        size: "One Size",
        price: 999,
        image: "dresses/mj1.jpg"
    },
    {
        id: 701,
        name: "Sports Running Shoes",
        category: "Men Footwear",
        color: "Blue",
        size: "44",
        price: 2499,
        image: "dresses/mf1.jpg"
    },
    {
        id: 103,
        name: "Cocktail Dress",
        category: "Women",
        color: "Black",
        size: "S",
        price: 3499,
        image: "dresses/w3.jpg"
    },
    {
        id: 203,
        name: "Traditional Sherwani",
        category: "Men",
        color: "Cream",
        size: "L",
        price: 5999,
        image: "dresses/m3.jpg"
    },
    {
        id: 303,
        name: "Kids Ethnic Kurta",
        category: "Kids",
        color: "Green",
        size: "S",
        price: 999,
        image: "dresses/k3.jpg"
    },
    {
        id: 402,
        name: "Diamond Earrings",
        category: "Women Jewellery",
        color: "Silver",
        size: "One Size",
        price: 4999,
        image: "dresses/wj2.jpg"
    },
    {
        id: 801,
        name: "Rain Boots",
        category: "Kids Footwear",
        color: "Yellow",
        size: "29",
        price: 999,
        image: "dresses/kf1.jpg"
    },
    {
        id: 104,
        name: "Blazer Dress",
        category: "Women",
        color: "Grey",
        size: "M",
        price: 3999,
        image: "dresses/w4.jpg"
    },
    {
        id: 204,
        name: "Leather Jacket",
        category: "Men",
        color: "Brown",
        size: "M",
        price: 3999,
        image: "dresses/m4.jpg"
    },
    {
        id: 304,
        name: "Girls Lehenga Choli",
        category: "Kids",
        color: "Pink",
        size: "M",
        price: 1499,
        image: "dresses/k4.jpg"
    },
    {
        id: 502,
        name: "Signet Ring",
        category: "Men Jewellery",
        color: "Silver",
        size: "Adjustable",
        price: 1999,
        image: "dresses/mj2.jpg"
    },
    {
        id: 602,
        name: "Leather Boots",
        category: "Women Footwear",
        color: "Black",
        size: "40",
        price: 3499,
        image: "dresses/wf2.jpg"
    },
    {
        id: 105,
        name: "Velvet Evening Gown",
        category: "Women",
        color: "Maroon",
        size: "M",
        price: 4599,
        image: "dresses/w5.jpg"
    },
    {
        id: 205,
        name: "Slim Fit Blazer",
        category: "Men",
        color: "Navy Blue",
        size: "L",
        price: 3799,
        image: "dresses/m5.jpg"
    },
    {
        id: 305,
        name: "Kids Denim Dungaree",
        category: "Kids",
        color: "Light Blue",
        size: "S",
        price: 1299,
        image: "dresses/k5.jpg"
    },
    {
        id: 403,
        name: "Pearl Drop Earrings",
        category: "Women Jewellery",
        color: "White",
        size: "One Size",
        price: 2299,
        image: "dresses/wj2.jpg"
    },
    {
        id: 603,
        name: "Chunky Sneakers",
        category: "Women Footwear",
        color: "White",
        size: "39",
        price: 2499,
        image: "dresses/wf3.jpg"
    },
    {
        id: 106,
        name: "Anarkali Kurti",
        category: "Women",
        color: "Green",
        size: "L",
        price: 1899,
        image: "dresses/w6.jpg"
    },
    {
        id: 206,
        name: "Casual Polo Shirt",
        category: "Men",
        color: "Sky Blue",
        size: "M",
        price: 999,
        image: "dresses/m6.jpg"
    },
    {
        id: 306,
        name: "Girls Party Gown",
        category: "Kids",
        color: "Pink",
        size: "M",
        price: 1599,
        image: "dresses/k6.jpg"
    },
    {
        id: 503,
        name: "Silver Kada Bracelet",
        category: "Men Jewellery",
        color: "Silver",
        size: "One Size",
        price: 1499,
        image: "dresses/mj3.jpg"
    },
    {
        id: 702,
        name: "Leather Sandals",
        category: "Men Footwear",
        color: "Brown",
        size: "42",
        price: 1999,
        image: "dresses/mf2.jpg"
    },
    {
        id: 107,
        name: "Boho Maxi Dress",
        category: "Women",
        color: "Multicolor",
        size: "S",
        price: 2399,
        image: "dresses/w7.jpg"
    },
    {
        id: 207,
        name: "Ethnic Kurta Set",
        category: "Men",
        color: "Cream",
        size: "L",
        price: 2499,
        image: "dresses/m7.jpg"
    },
    {
        id: 307,
        name: "Boys Sherwani",
        category: "Kids",
        color: "Golden",
        size: "M",
        price: 1999,
        image: "dresses/k7.jpg"
    },
    {
        id: 404,
        name: "Diamond Pendant",
        category: "Women Jewellery",
        color: "Silver",
        size: "One Size",
        price: 4999,
        image: "dresses/wj4.jpg"
    },
    {
        id: 802,
        name: "LED Light Shoes",
        category: "Kids Footwear",
        color: "Multicolor",
        size: "30",
        price: 1399,
        image: "dresses/kf2.jpg"
    },
    {
        id: 108,
        name: "Western Jumpsuit",
        category: "Women",
        color: "Black",
        size: "M",
        price: 2899,
        image: "dresses/w9.jpg"
    },
    {
        id: 208,
        name: "Casual Hoodie",
        category: "Men",
        color: "Grey",
        size: "L",
        price: 1299,
        image: "dresses/m11.jpg"
    },
    {
        id: 308,
        name: "Kids Lehenga Choli",
        category: "Kids",
        color: "Yellow",
        size: "S",
        price: 1499,
        image: "dresses/k8.jpg"
    },
    {
        id: 504,
        name: "Gold Chain",
        category: "Men Jewellery",
        color: "Gold",
        size: "One Size",
        price: 3999,
        image: "dresses/mj4.jpg"
    },
    {
        id: 604,
        name: "Block Heel Sandals",
        category: "Women Footwear",
        color: "Beige",
        size: "38",
        price: 1999,
        image: "dresses/wf4.jpg"
    },
    {
        id: 1,
        name: "Classic White Shirt",
        category: "Men",
        color: "White",
        size: "M",
        price: 1299,
        image: "dresses/m9.jpg"
    },
    {
        id: 2,
        name: "Black Casual Shirt",
        category: "Men",
        color: "Black",
        size: "L",
        price: 1499,
        image: "dresses/m8.jpg"
    },
    {
        id: 3,
        name: "Blue Denim Jeans",
        category: "Men",
        color: "Blue",
        size: "M",
        price: 1999,
        image: "dresses/m10.jpg"
    },
    {
        id: 4,
        name: "Traditional Kurta",
        category: "Men",
        color: "White",
        size: "L",
        price: 1799,
        image: "dresses/download (1).webp"
    },
    {
        id: 5,
        name: "Elegant Pink Dress",
        category: "Women",
        color: "Pink",
        size: "M",
        price: 2499,
        image: "dresses/w10.jpg"
    },
    {
        id: 7,
        name: "Blue Casual Top",
        category: "Women",
        color: "Blue",
        size: "S",
        price: 899,
        image: "dresses/w11.jpg"
    },
    {
        id: 9,
        name: "Boys Casual T-Shirt",
        category: "Kids",
        color: "Blue",
        size: "S",
        price: 599,
        image: "dresses/k9.jpg"
    },
    {
        id: 11,
        name: "Kids Traditional Wear",
        category: "Kids",
        color: "Red",
        size: "M",
        price: 1199,
        image: "dresses/k10.jpg"
    },
];


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const productContainer =
    document.getElementById("productContainer");

const categoryFilter =
    document.getElementById("categoryFilter");

const sizeFilter =
    document.getElementById("sizeFilter");

const colorFilter =
    document.getElementById("colorFilter");

const priceFilter =
    document.getElementById("priceFilter");

const searchInput =
    document.getElementById("searchInput");

const resetBtn =
    document.getElementById("resetBtn");

const categoryTitle =
    document.getElementById("categoryTitle");

const productCount =
    document.getElementById("productCount");


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(productList) {

    productContainer.innerHTML = "";

    productCount.innerText =
        productList.length + " products found";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <p class="no-products">
                No products found.
                Try changing your filters.
            </p>
        `;

        return;
    }

    productList.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="product-color">
                    Color: ${product.color}
                </p>

                <p class="product-size">
                    Size: ${product.size}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        productContainer.appendChild(card);

    });

}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts() {

    const selectedCategory =
        categoryFilter.value;

    const selectedSize =
        sizeFilter.value;

    const selectedColor =
        colorFilter.value;

    const selectedPrice =
        priceFilter.value;

    const searchText =
        searchInput.value.toLowerCase().trim();


    const filteredProducts = products.filter(
        function(product) {

            const category =
                product.category.toLowerCase();

            const categoryMatch =
                selectedCategory === "All" ||

                (
                    selectedCategory === "Men" &&
                    product.category === "Men"
                ) ||

                (
                    selectedCategory === "Women" &&
                    product.category === "Women"
                ) ||

                (
                    selectedCategory === "Kids" &&
                    product.category === "Kids"
                ) ||

                (
                    selectedCategory === "Accessories" &&
                    (
                        category.includes("jewellery") ||
                        category.includes("accessories")
                    )
                ) ||

                (
                    selectedCategory === "Footwear" &&
                    category.includes("footwear")
                );


            const sizeMatch =
                selectedSize === "All" ||
                product.size === selectedSize;


            const colorMatch =
                selectedColor === "All" ||
                product.color === selectedColor;


            const priceMatch =
                selectedPrice === "All" ||
                product.price <= Number(selectedPrice);


            const searchMatch =
                product.name.toLowerCase()
                    .includes(searchText) ||

                product.category.toLowerCase()
                    .includes(searchText);


            return (
                categoryMatch &&
                sizeMatch &&
                colorMatch &&
                priceMatch &&
                searchMatch
            );

        }
    );


    displayProducts(filteredProducts);


    /* Update collection heading */

    if (selectedCategory === "All") {

        categoryTitle.innerText =
            "All Products";

    } else if (selectedCategory === "Accessories") {

        categoryTitle.innerText =
            "Accessories Collection";

    } else if (selectedCategory === "Footwear") {

        categoryTitle.innerText =
            "Footwear Collection";

    } else {

        categoryTitle.innerText =
            selectedCategory + "'s Collection";

    }

}


/* =====================================================
   FILTER EVENTS
===================================================== */

categoryFilter.addEventListener(
    "change",
    filterProducts
);

sizeFilter.addEventListener(
    "change",
    filterProducts
);

colorFilter.addEventListener(
    "change",
    filterProducts
);

priceFilter.addEventListener(
    "change",
    filterProducts
);

searchInput.addEventListener(
    "input",
    filterProducts
);


/* =====================================================
   RESET FILTERS
===================================================== */

resetBtn.addEventListener(
    "click",
    function() {

        categoryFilter.value = "All";
        sizeFilter.value = "All";
        colorFilter.value = "All";
        priceFilter.value = "All";
        searchInput.value = "";

        filterProducts();

    }
);


/* =====================================================
   GET CATEGORY FROM URL
===================================================== */

function getCategoryFromURL() {

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const category =
        urlParams.get("category");

    const validCategories = [
        "Men",
        "Women",
        "Kids",
        "Accessories",
        "Footwear"
    ];

    if (validCategories.includes(category)) {

        categoryFilter.value = category;

    }

}


/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("stylehubCart")
        ) || [];

    const totalItems =
        cart.reduce(function(total, item) {

            return total + (item.quantity || 1);

        }, 0);


    const cartCountElements =
        document.querySelectorAll(
            ".cart-count, #cartCount"
        );

    cartCountElements.forEach(function(element) {

        element.innerText = totalItems;

    });

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });

    if (!product) {
        return;
    }


    let cart =
        JSON.parse(
            localStorage.getItem("stylehubCart")
        ) || [];


    const existingItem =
        cart.find(function(item) {

            return item.id === productId;

        });


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    localStorage.setItem(
        "stylehubCart",
        JSON.stringify(cart)
    );


    updateCartCount();

    alert(
        product.name + " added to cart!"
    );

}


/* =====================================================
   PAGE LOAD
===================================================== */

getCategoryFromURL();

filterProducts();

updateCartCount();