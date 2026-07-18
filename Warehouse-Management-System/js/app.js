// Add Warehouse
const warehouseForm = document.getElementById("warehouse-form");
const warehouseName = document.getElementById("warehouse-name");

// Add Product
const productForm = document.getElementById("product-form");
const productName = document.getElementById("product-name");
const productSku = document.getElementById("product-sku");
const productCategory = document.getElementById("product-category");
const productSupplier = document.getElementById("product-supplier");
const productCost = document.getElementById("product-cost");
const productPrice = document.getElementById("product-price");

loadData();
warehouseForm.addEventListener("submit", (e) => {
  e.preventDefault();

// get the value from add warehouse of each inputs
const warehouseName_val = warehouseName.value.trim();

  // create object key fairs
  const newWarehouse = {
    warehouseName: warehouseName_val,
  };

  warehouses.push(newWarehouse);
  saveWarehouses();

  warehouseForm.reset();
});


productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get the value from add product of each inputs
  const productName_val = productName.value.trim();
  const productSku_val = productSku.value.trim();
  const productCategory_val = productCategory.value.trim();
  const productSupplier_val = productSupplier.value.trim();
  const productCost_val = productCost.value;
  const productPrice_val = productPrice.value;

  // create object key fairs
  const newProduct = {
    name: productName_val,
    sku: productSku_val,
    category: productCategory_val,
    supplier: productSupplier_val,
    cost: Number(productCost_val),
    price: Number(productPrice_val)
  };

  products.push(newProduct);
  saveProducts();
  loadData();
  productForm.reset();
});