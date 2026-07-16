// =========================
// CART ELEMENTS
// =========================

const cartItems_element = document.getElementById("cart-items");

// cart summary
const subtotal_element = document.getElementById("subtotal");
const discount_element = document.getElementById("discount");
const tax_element = document.getElementById("tax");
const grandTotal_element = document.getElementById("grand-total");

// =========================
// RENDER CART
// =========================

function renderCart(cartRender = cart) {

  cartItems_element.innerHTML = "";

  if (cartRender.length === 0) {
    cartItems_element.innerHTML = `
      <p>Your shopping cart is empty.</p>
    `;

    return;
  }

  cartRender.forEach(item => {

    const div = document.createElement("div");

    const subtotal = item.price * item.quantity;

    div.classList.add("cart-item");

    div.innerHTML = `
      <h3>${item.name}</h3>

      <p>Category : ${item.category}</p>

      <p>Price : ₱${item.price.toFixed(2)}</p>

      <p>Quantity : ${item.quantity}</p>

      <p>Subtotal : ₱${subtotal.toFixed(2)}</p>
    `;

    cartItems_element.appendChild(div);

  });

}

// =========================
// UPDATE SUMMARY
// =========================

function updateSummary() {

  const subtotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const discountRate = 0.20;
  const taxRate = 0.12;

  const discount = subtotal * discountRate;

  const taxableAmount = subtotal - discount;

  const tax = taxableAmount * taxRate;

  const grandTotal = taxableAmount + tax;

  subtotal_element.textContent = `₱${subtotal.toFixed(2)}`;

  discount_element.textContent = `₱${discount.toFixed(2)}`;

  tax_element.textContent = `₱${tax.toFixed(2)}`;

  grandTotal_element.textContent = `₱${grandTotal.toFixed(2)}`;

}