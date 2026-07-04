// dashboard elements
const balance_element = document.getElementById("balance");
const income_element = document.getElementById("income");
const expense_element = document.getElementById("expense");

// add transaction form
const transactionForm_element = document.getElementById("transaction-form");

const titleInput_element = document.getElementById("title-input");
const amountInput_element = document.getElementById("amount-input");
const typeInput_element = document.getElementById("type-input");

// empty-state
const emptyState_element = document.getElementById("empty-state");

// transaction list table
const transactionList_element = document.getElementById("transaction-list");

// storing using local storage
let expense = JSON.parse(localStorage.getItem("expense")) || [];

renderAll();

transactionForm_element.addEventListener("submit", (e) => {
  e.preventDefault();

  const get_titleInput_element_val = titleInput_element.value.trim();
  const get_amountInput_element_val = amountInput_element.value;
  const get_typeInput_element_val = typeInput_element.value;

  if (get_titleInput_element_val === "" || 
    get_amountInput_element_val === "" || 
    !get_typeInput_element_val) {
    alert("Please fill in all fields!!");
    return;
  }

  const newExpense = {
    title: get_titleInput_element_val,
    amount: Number(get_amountInput_element_val),
    type: get_typeInput_element_val
  };

  expense.push(newExpense);

  // save in local storage
  localStorage.setItem(
    "expense",
    JSON.stringify(expense)
  );

  renderAll();

  transactionForm_element.reset();
});

function renderingExpense() {
  transactionList_element.innerHTML = "";

  if (expense.length === 0) {
    emptyState_element.style.display = "block";
  } else {
    emptyState_element.style.display = "none";
  }

  expense.forEach((item,index) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = `${item.title} - $${item.amount} - ${item.type}`;
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      expense.splice(expense, 1);

      localStorage.setItem(
        "expense",
        JSON.stringify(expense)
      )

      renderAll();
    })

    li.appendChild(deleteBtn);
    transactionList_element.appendChild(li);
  });
};

// all render funtion
function renderAll() {
  renderingExpense(); 
  updateBalance();
  updateIncome();
  updateExpense();
};

// Balance 
function updateBalance() {
  const totalBalance = expense.reduce((total,expense) => {
    if (expense.type === "income") {
      return total + expense.amount;
    } 
    else if (expense.type === "expense") {
      return total - expense.amount;
    } else {
      return total;
    }
  }, 0);

  balance_element.textContent = totalBalance;
};

function updateIncome() {
  const totalIncome = expense.reduce((total,expense) => {
    if (expense.type === "income") {
      return total + expense.amount;
    } else {
      return total;
    }
  }, 0);

  income_element.textContent = totalIncome;
};

function updateExpense() {
  const totalExpense = expense.reduce((total,expense) => {
    if (expense.type === "expense") {
      return total + expense.amount;
    } else {
      return total;
    }
  }, 0);

  expense_element.textContent = totalExpense;
};