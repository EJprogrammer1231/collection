const productForm_element = document.getElementById("product-form");
const inputName_element = document.getElementById("input-name");
const inputPrice_element = document.getElementById("input-price");
const inputStock_element = document.getElementById("input-stock");
const inputCategory_element = document.getElementById("input-category");
const productList_element = document.getElementById("product-list");

// temporary store a edit products
let editProductID = null;

// get the value of each input
productForm_element.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName_element_val = inputName_element.value.trim();
  const inputPrice_element_val = inputPrice_element.value;
  const inputStock_element_val = inputStock_element.value;
  const inputCategory_element_val = inputCategory_element.value;

  if (inputName_element_val === "" ||
    inputPrice_element_val === "" ||
    inputStock_element_val === "" ||
    inputCategory_element_val === "") {
    alert("Please fill in all fields !!!");
    return;
  }

  // create a array of object or object pairs key
  const newproducts = {
    id: Date.now(),
    name: inputName_element_val,
    price: Number(inputPrice_element_val),
    stock: Number(inputStock_element_val),
    category: inputCategory_element_val
  };

  // update
  if (editProductID === null) {
    products.push(newproducts);
  } else {
    const productToEdit = products.find(product => product.id === editProductID);

    if (productToEdit) {
      productToEdit.name = inputName_element_val;
      productToEdit.price = Number(inputPrice_element_val);
      productToEdit.stock = Number(inputStock_element_val);
      productToEdit.category = inputCategory_element_val;
    }

    editProductID = null;
  }

  saveProducts();
  loadApp();

  productForm_element.reset();
});

function updateEdit(id) {
  const product = products.find(prod => prod.id === id);

  if (!product) return;

  inputName_element.value = product.name;
  inputPrice_element.value = product.price;
  inputStock_element.value = product.stock;
  inputCategory_element.value = product.category;

  editProductID = id;
}

function updateDelete(id) {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return;
  products.splice(index, 1);

  saveProducts();
  loadApp();
}

function renderProducts() {
  productList_element.innerHTML = "";

  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>₱${product.price.toFixed(2)}</td>
      <td>${product.stock}</td>
      <td></td>
    `;

    const actionsCell = row.querySelector("td:last-child");

    const addToCartBtn = document.createElement("button");
    addToCartBtn.type = "button";
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.classList.add("add-to-cart");
    addToCartBtn.addEventListener("click", () => addToCart(product));

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => updateEdit(product.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => updateDelete(product.id));

    actionsCell.appendChild(addToCartBtn);
    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);

    productList_element.appendChild(row);
  });
}