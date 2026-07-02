// Dashboards
const totalProducts_element = document.getElementById("total-products"); 
const totalStock_element = document.getElementById("total-stock"); 
const lowstock_element = document.getElementById("low-stock"); 
const inventoryValue_element = document.getElementById("inventory-value"); 

// Add Product Form
const productForm_element = document.getElementById("product-form");

const productName_element = document.getElementById("product-name");
const productCategory_element = document.getElementById("product-category");
const productPrice_element = document.getElementById("product-price");
const productStock_element = document.getElementById("product-stock");
const productImage_element = document.getElementById("product-image");

// Search Filter
const searchProduct_element = document.getElementById("search-product");
const filterCategory_element = document.getElementById("filter-category");

// Product Table
const productTableBody_element = document.getElementById("product-table-body");

// Storing all Products in this array
const products = [];

// event for getting value of form field and rendering all function in here!
productForm_element.addEventListener("submit", (event) => {
  event.preventDefault();

  // get all values from Add Product Form 
  const get_productName_element_val = productName_element.value.trim();
  const get_productCategory_element_val = productCategory_element.value.trim();
  const get_productPrice_element_val = productPrice_element.value.trim();
  const get_productStock_element_val = productStock_element.value.trim();
  const get_productImage_element_val = productImage_element.files[0];

  // validation for form field
  if (get_productName_element_val === "" || 
    get_productCategory_element_val === "" || 
    get_productPrice_element_val === "" ||
    get_productStock_element_val === "" || 
    !get_productImage_element_val) {
    alert("Please fill in all fields!!");
    return;
  }

  // create object for form field and as a New Product
  const newProducts = {
    name: get_productName_element_val,
    category: get_productCategory_element_val,
    price: Number(get_productPrice_element_val),
    stock: Number(get_productStock_element_val),
    image: URL.createObjectURL(get_productImage_element_val)
  };

  // push to array
  products.push(newProducts);
  renderingProducts();
  updatetotalProducts();
  updatetotalStock();
  updatelowStock();
  updatetotalinventoryValue();
  searchingProducts();

  // reset every time form submitted
  productForm_element.reset();
});

// rendering function for product-Table-Body
function renderingProducts(productsRendering = products) {
  productTableBody_element.innerHTML = "";

  productsRendering.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${product.image}" width="50" height="50">
      </td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    `;
    productTableBody_element.appendChild(row);
  });
};

// updating total products
function updatetotalProducts() {
  totalProducts_element.textContent = products.length;
};

// updating total Stock
function updatetotalStock() {
  const totalStock = products.reduce((total,product) => {
    return total + product.stock;
  }, 0);

  totalStock_element.textContent = totalStock;
};

// updating low stock
function updatelowStock() {
  const lowStock = products
  .filter(product => product.stock <= 5)
  .reduce((total) => total + 1, 0);

  lowstock_element.textContent = lowStock;
};

// updating total inventory value
function updatetotalinventoryValue() {
  const totalInventoryValue = products.reduce((total,product) => {
    return total += product.price * product.stock;
  }, 0);

  inventoryValue_element.textContent = totalInventoryValue;
}

// searching product
function searchingProducts() {
  const get_searchProduct_element_val = searchProduct_element.value.trim().toLowerCase();

  const search = products.filter(product => {
    return product.name.toLowerCase().includes(get_searchProduct_element_val);
  });

  renderingProducts(search);
}

searchProduct_element.addEventListener("input", searchingProducts);

// filter all categories
filterCategory_element.addEventListener("change", () => {
  const get_filterCategory_element_val = filterCategory_element.value;

  if (get_filterCategory_element_val === "all") {
    renderingProducts();
    return;
  }

  const productMatching = products.filter(product => {
    return product.category === get_filterCategory_element_val;
  });

  renderingProducts(productMatching);
});