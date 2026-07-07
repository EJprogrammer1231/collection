function updatetotalBalance() {
  const total_bal = transactions.reduce((total,transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    } 
    else if (transaction.type === "expense") {
      return total - transaction.amount;
    }

    return total;
  }, 0);

  totalBalance.textContent = total_bal;
}

function updatetotalIcome() {
  const total_income = transactions.reduce((total,transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    } else {
      return total;
    }

    return total;
  }, 0);

  totalIncome.textContent = total_income;
}

function updatetotalExpense() {
  const total_expense = transactions.reduce((total,transaction) => {
    if (transaction.type === "expense") {
      return total + transaction.amount;
    }else{
      return total;
    }

    return total;
  }, 0);

  totalExpense.textContent = total_expense;
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

  monthExpenses.textContent = total_current_month;
}