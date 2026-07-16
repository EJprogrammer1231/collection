// =====================================================
// SHARED STATE — loaded once, used by products.js,
// cart.js, checkout.js, history.js, dashboard.js
// =====================================================

let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let salesHistory = JSON.parse(localStorage.getItem("salesHistory")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveSalesHistory() {
  localStorage.setItem("salesHistory", JSON.stringify(salesHistory));
}

function loadApp() {
  renderProducts();
  renderCart();
  updateSummary();
  renderHistory();
}

document.addEventListener("DOMContentLoaded", loadApp);