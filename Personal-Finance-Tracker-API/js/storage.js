let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveTransactions() {
  localStorage.setItem(
  "transactions",
  JSON.stringify(transactions)
  )
};

function loadTransactions() {
  renderingTransaction();
  updatetotalBalance();
  updatetotalIcome();
  updatetotalExpense();
  updatetotal_currentMonth();
  filterBy();
}