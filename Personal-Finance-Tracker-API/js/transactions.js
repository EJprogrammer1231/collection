function renderingTransaction(transac = transactions) {
  transaction_list_table.innerHTML = "";

  transac.forEach(transaction => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${transaction.name}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.type}</td>
      <td>${transaction.date}</td>
      <td>${transaction.notes}</td>
    `;

    transaction_list_table.appendChild(row);
  });
}