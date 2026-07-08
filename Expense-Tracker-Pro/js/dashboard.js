const totalExpenses = document.getElementById("total-expenses");
const monthlyTotal = document.getElementById("monthly-total");

function updatetotalExpenses() {
  const total_Expenses = transactions.reduce((total,transaction) => {
    return total + transaction.amount;
  }, 0);

  totalExpenses.textContent = total_Expenses;
}

function updatetotal_currentMonth() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const total_current_month = transactions.reduce((total,transaction) => {
    const txnDate = new Date(transaction.date);

    if (txnDate.getMonth() === currentMonth && txnDate.getFullYear() === currentYear) {
      return total + transaction.amount;
    } else {
      return total;
    }

    return total;
  }, 0);

  monthlyTotal.textContent = total_current_month;
}