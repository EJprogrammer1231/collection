let warehouses = JSON.parse(localStorage.getItem("warehouses")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

function saveWarehouses() {
  localStorage.setItem("warehouses", JSON.stringify(warehouses));
}

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function loadData() {
  renderingProduct();
}