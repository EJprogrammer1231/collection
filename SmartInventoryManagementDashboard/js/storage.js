// global storage value 
let products = JSON.parse(localStorage.getItem("products"))|| [];

function saveProducts() {
  localStorage.setItem(
  "products",
  JSON.stringify(products)
  )
};

function loadProducts() {
  renderingProducts();
  updatetotalProducts();
  updatetotalStock();
  updatetotalInventoryValue();
  updatetotalProductSold();
  updatetotalLowStockProducts();
  updatetotalOutOfStock();
  updatemostExpensiveProducts();
}