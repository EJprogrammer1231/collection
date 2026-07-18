// inventory table
const inventoryList = document.getElementById("inventory-list");

function renderingProduct(productRendering = products) {
  inventoryList.innerHTML = "";

  productRendering.forEach(product => {
    const productRow = document.createElement("tr");

    productRow.innerHTML = `
      <td>${product.name}</td>
      <td>${product.sku}</td>
      <td>${product.category}</td>
      <td>${product.supplier}</td>
      <td>${product.cost}</td>
      <td>${product.price}</td>
    `;

    inventoryList.appendChild(productRow);
  });
}