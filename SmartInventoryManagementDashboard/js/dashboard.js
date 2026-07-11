const totalProducts = document.getElementById("total-products");
const totalStock = document.getElementById("total-stock");
const totalInventoryValue = document.getElementById("total-inventory-value");
const productsSold = document.getElementById("products-sold");
const lowStockProducts = document.getElementById("low-stock-products");
const outOfStockProducts = document.getElementById("out-of-stock-products");
const mostExpensiveProduct = document.getElementById("most-expensive-product");
const cheapestProduct = document.getElementById("cheapest-product");
const averagePrice = document.getElementById("average-price");
const averageStock = document.getElementById("average-stock");
const uniqueCategories = document.getElementById("unique-categories");
const bestSellingProduct = document.getElementById("best-selling-product");
const worstSellingProduct = document.getElementById("worst-selling-product");
const neverSoldProducts = document.getElementById("never-sold-products");
const productsThisMonth = document.getElementById("products-this-month");
const lowStockPercentage = document.getElementById("low-stock-percentage");

function updatetotalProducts() {
  totalProducts.textContent = products.length;
}

function updatetotalStock() {
  const total_stock = products.reduce((total, product) => {
    return total + product.stock;
  }, 0);

  totalStock.textContent = total_stock;
}

function updatetotalInventoryValue() {
  const total_inventory = products.reduce((total, product) => {
    return total + product.price * product.stock;
  }, 0);

  totalInventoryValue.textContent = total_inventory;
}

function updatetotalProductSold() {
  const total_sold = products.reduce((total, product) => {
    if (product.sold > 0) {
      return total + product.sold;
    }

    return total;
  }, 0);

  productsSold.textContent = total_sold;
}

function updatetotalLowStockProducts() {
  const total_lowStock_products = products.reduce((total, product) => {
    if (product.stock <= 10) {
      return total + 1;
    }

    return total;
  }, 0);

  lowStockProducts.textContent = total_lowStock_products;
}

function updatetotalOutOfStock() {
  const total_outOf_stock = products.reduce((total, product) => {
    if (product.stock <= 0) {
      return total + 1;
    }

    return total;
  }, 0);

  outOfStockProducts.textContent = total_outOf_stock;
};

function updatemostExpensiveProducts() {
  if (!products || products.length === 0) {
    mostExpensiveProduct.textContent = "-";
    return;
  }

  const mostExpensive = products.reduce((highest, product) => {
    return product.price > highest.price ? product : highest;
  }, products[0]);
}
