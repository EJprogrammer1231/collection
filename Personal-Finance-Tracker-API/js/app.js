// dashboard cards
const totalBalance = document.getElementById("total-balance");
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const monthExpenses = document.getElementById("month-expenses");

// Add Transaction Form fields
const add_transaction_form_fields = document.getElementById("add-transaction-form-fields");

const input_transaction_name = document.getElementById("input-transaction-name");
const input_transaction_amount = document.getElementById("input-transaction-amount");
const transaction_type = document.getElementById("transaction-type");
const input_transaction_date = document.getElementById("input-transaction-date");
const input_transaction_notes = document.getElementById("input-transaction-notes");

// Transaction List table
const transaction_list_table = document.getElementById("transaction-list-table");

loadTransactions();

add_transaction_form_fields.addEventListener("submit", (e) => {
  e.preventDefault();

  const input_transaction_name_val = input_transaction_name.value.trim();
  const input_transaction_amount_val = input_transaction_amount.value;
  const transaction_type_val = transaction_type.value;
  const input_transaction_date_val = input_transaction_date.value;
  const input_transaction_notes_val = input_transaction_notes.value.trim();

  if (input_transaction_name_val === "" || 
    input_transaction_amount_val === "" || 
    transaction_type_val === "" || 
    !input_transaction_date_val || 
    input_transaction_notes_val === "") {
    alert("Please fill in all fields");
    return;
  }

  const newTransactions = {
    name: input_transaction_name_val,
    amount: Number(input_transaction_amount_val),
    type: transaction_type_val,
    date: input_transaction_date_val,
    notes: input_transaction_notes_val
  };

  transactions.push(newTransactions);
  saveTransactions();
  loadTransactions();

  add_transaction_form_fields.reset();
});