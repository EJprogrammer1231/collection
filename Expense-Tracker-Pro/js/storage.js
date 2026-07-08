let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveTransactions() {
  localStorage.setItem(
  "transactions",
  JSON.stringify(transactions)
  )
};

function loadTransactions() {
  renderingExpense();
  expenseCounting();
  updatetotalExpenses();
  updatetotal_currentMonth();
  searching();
}