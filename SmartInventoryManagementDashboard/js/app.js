// get forms element of each
const productForm = document.getElementById("product-form");
const productName = document.getElementById("product-name");
const productCategory = document.getElementById("product-category");
const productPrice = document.getElementById("product-price");
const productStock = document.getElementById("product-stock");
const productSold = document.getElementById("product-sold");
const productSupplier = document.getElementById("product-supplier");

// edit temporary storage
let editProductId = null;

loadProducts();

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get each value
  const productName_val = productName.value.trim();
  const productCategory_val = productCategory.value.trim();
  const productPrice_val = productPrice.value;
  const productStock_val = productStock.value;
  const productSold_val = productSold.value;
  const productSupplier_val = productSupplier.value.trim();

  const newProducts = {
    id: Date.now(),
    name: productName_val,
    category: productCategory_val,
    price: Number(productPrice_val),
    stock: Number(productStock_val),
    sold: Number(productSold_val),
    supplier: productSupplier_val
  };

  if (productName_val === ""  || 
    productCategory_val === "" || 
    productPrice_val === "" || 
    productStock_val === "" || 
    productSold_val === "" || 
    productSupplier_val === "") {
    alert("Please fill in all fields");
    return;
  };

  // create or update
  if (editProductId === null) {
    products.push(newProducts);
  } else {
    const productToEdit = products.find(product => product.id === editProductId);

    if (productToEdit) {
      productToEdit.name = productName_val;
      productToEdit.category = productCategory_val;
      productToEdit.price = Number(productPrice_val);
      productToEdit.stock = Number(productStock_val);
      productToEdit.sold = Number(productSold_val);
      productToEdit.supplier = productSupplier_val;
    }

    editProductId = null;
  }



  saveProducts();
  loadProducts();

  productForm.reset();
});

function editProduct(id) {
  const product = products.find(prct => prct.id === id);

  if (!product) return;

  productName.value = product.name;
  productCategory.value = product.category;
  productPrice.value = product.price;
  productStock.value = product.stock;
  productSold.value = product.sold;
  productSupplier.value = product.supplier;

  editProductId = id;
}


function deleteProduct(id) {
  const index = products.findIndex(product => product.id === id);

  if(index === -1) return;
  products.splice(index,1);

  saveProducts();
  loadProducts();
}