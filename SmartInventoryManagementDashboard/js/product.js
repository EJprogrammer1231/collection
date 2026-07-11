// product table
const productList = document.getElementById("product-list");

function renderingProducts(productsRendering = products) {

  productList.innerHTML = "";

  // Empty state
  if (productsRendering.length === 0) {
    productList.innerHTML = `
      <tr>
        <td colspan="7">No products found.</td>
      </tr>
    `;
    return;
  }

  productsRendering.forEach(product => {

    const row = document.createElement("tr");
    const actionTd = document.createElement("td");
    const edit = document.createElement("button");
    const deleteBtn = document.createElement("button");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.supplier}</td>
      <td>₱${product.price.toLocaleString()}</td>
      <td>${product.stock}</td>
      <td>${product.sold}</td>
    `;

    edit.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    edit.classList.add("edit-btn");
    deleteBtn.classList.add("delete-btn");

    edit.addEventListener("click", () => {
      editProduct(product.id);
    });

    deleteBtn.addEventListener("click", () => {
      deleteProduct(product.id);
    });

    actionTd.append(edit, deleteBtn);
    row.appendChild(actionTd);
    productList.appendChild(row);

  });

}