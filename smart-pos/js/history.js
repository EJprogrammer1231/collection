// history list container (from your HTML: #history-list)
const historyList_element = document.getElementById("history-list");

function renderHistory() {
  historyList_element.innerHTML = "";

  salesHistory.forEach(receipt => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${receipt.receiptNumber}</td>
      <td>${receipt.date}</td>
      <td>${receipt.items}</td>
      <td>₱${receipt.total.toFixed(2)}</td>
    `;

    historyList_element.appendChild(row);
  });
}