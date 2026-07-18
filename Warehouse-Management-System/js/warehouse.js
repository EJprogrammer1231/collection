// inventory table
const inventoryList = document.getElementById("inventory-list");

function renderingWarehouse(warehouseRendering = warehouses) {
  inventoryList.innerHTML = "";

  warehouseRendering.forEach(warehouse => {
    const warehouseRow = document.createElement("tr");

    warehouseRow.innerHTML = `
      <td>${warehouse.warehouseName}</td>
    `;

    inventoryList.appendChild(warehouseRow);
  });
}