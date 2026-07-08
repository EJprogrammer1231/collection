const expenseForm_element = document.getElementById("expense-form");
const expenseName_element = document.getElementById("expense-name");
const expenseAmount_element = document.getElementById("expense-amount");
const expenseCategory_element = document.getElementById("expense-category");
const expenseDate_element = document.getElementById("expense-date");

loadTransactions();

expenseForm_element.addEventListener("submit", (e) => {
  e.preventDefault();

  const expenseName_element_val = expenseName_element.value.trim();
  const expenseAmount_element_val = expenseAmount_element.value;
  const expenseCategory_element_val = expenseCategory_element.value;
  const expenseDate_element_val = expenseDate_element.value;

  if (expenseName_element_val === "" || 
    expenseAmount_element_val === "" || 
    !expenseCategory_element_val || 
    !expenseDate_element_val) {
    alert("Please fill in all fields!!");
    return;
  }

  const newExpense = {
    name: expenseName_element_val,
    amount: Number(expenseAmount_element_val),
    category: expenseCategory_element_val,
    date: expenseDate_element_val
  };

  transactions.push(newExpense);
  saveTransactions();
  loadTransactions();

  expenseForm_element.reset();
});