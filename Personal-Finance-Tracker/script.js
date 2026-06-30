// Dashboard Cards Elements
const totalIncome_element = document.getElementById("totalIncome");
const totalExpense_element = document.getElementById("totalExpense");
const balance_element = document.getElementById("balance");

// Add Transsaction Form
const transactionForm_element = document.getElementById("transactionForm");

const titleField_element = document.getElementById("titleField");
const amountField_element = document.getElementById("amountField");
const typeField_element = document.getElementById("typeField");
const categoryField_element = document.getElementById("categoryField");

// Controls
const searchField_element = document.getElementById("searchField");
const filterCategory_element = document.getElementById("filterCategory");
const filterType_element = document.getElementById("filterType");

// Tables
const transactionTableBody_element = document.getElementById("transactionTableBody");

// storing the value from Transaction Form
const transactions = [];

transactionForm_element.addEventListener("submit", (event) => {
  event.preventDefault();

  // get the value of Transaction Form
  const get_titleField_element_val = titleField_element.value.trim();
  const get_amountField_element_val = amountField_element.value.trim();
  const get_typeField_element_val = typeField_element.value;
  const get_categoryField_element_val = categoryField_element.value;

  // form validation checking
  if (get_titleField_element_val === "" || 
    get_amountField_element_val === "" || 
    get_typeField_element_val === "" || 
    get_categoryField_element_val === "") {
    alert("Please fill in all fields");
    return;
  }

  // creating a object for a transaction value and pushing into a array.
  const newTransaction = {
    title: get_titleField_element_val,
    amount: Number(get_amountField_element_val),
    type: get_typeField_element_val,
    category: get_categoryField_element_val
  };

  transactions.push(newTransaction);
  renderingTransaction();
  update_totalIncome();
  update_totalExpense();
  update_balance();
  searchingTransaction();
  allCategories();

  // reset the transaction form every user submit or add transaction.
  transactionForm_element.reset();
});

// creating a function for rendering from the table
function renderingTransaction(transactionRender = transactions) {
  transactionTableBody_element.innerHTML = "";

  transactionRender.forEach((currentTransaction) => {
    const rowTransaction = document.createElement("tr");

    rowTransaction.innerHTML = `
      <td>${currentTransaction.title}</td>
      <td>${currentTransaction.amount.toLocaleString("en-PH")}</td>
      <td>${currentTransaction.type}</td>
      <td>${currentTransaction.category}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
      `;

      transactionTableBody_element.appendChild(rowTransaction);
  });
}

// Total Income Dashboard card
function update_totalIncome() {
  const totalincome_ = transactions.reduce((total,transaction) => {
    if (transaction.type === "Income") {
      return total + transaction.amount;
    }

    return total;
  }, 0);

  totalIncome_element.textContent = `₱${totalincome_.toLocaleString("en-PH")}`;
}

// Total Expense Dashboard card
function update_totalExpense() {
  const totalExpense_ = transactions
  .filter(transaction_Expense => transaction_Expense.type === "Expense")
  .reduce((total,transactionExpense) => total + transactionExpense.amount, 0);

  totalExpense_element.textContent = `₱${totalExpense_.toLocaleString("en-PH")}`;
}

// Balance Dashbpoard card
function update_balance() {
  const totalIncome = transactions.reduce((total, transaction) => {
    if (transaction.type === "Income") {
      return total + transaction.amount;
    }

    return total;
  }, 0);

  const totalExpense = transactions.reduce((total, transaction) => {
    if (transaction.type === "Expense") {
      return total + transaction.amount;
    }

    return total;
  }, 0);

  const balance = totalIncome - totalExpense;

  balance_element.textContent =
    `₱${balance.toLocaleString("en-PH")}`;
}

// search transaction 
function searchingTransaction() {
  const get_searchField_element_val = searchField_element.value.trim().toLowerCase();

  const searching = transactions.filter(transaction => {
    return transaction.title.toLowerCase().includes(get_searchField_element_val);
  });

  renderingTransaction(searching);
}

searchField_element.addEventListener("input", searchingTransaction);

// All Categories
function allCategories() {
  filterCategory_element.innerHTML = `
    <option value="all">All Categories</option>
  `;

  const allCategories_filter = [...new Set(transactions.map(transaction => transaction.category))];

  allCategories_filter.forEach((transac) => {
    const option = document.createElement("option");

    option.value = transac;
    option.textContent = transac;

    filterCategory_element.appendChild(option);
  });
}

// All Categories filter
filterCategory_element.addEventListener("change", () => {
  const get_filterCategory_element_val = filterCategory_element.value;

  if (get_filterCategory_element_val === "all") {
    renderingTransaction();
    return;
  }

  const filterTransaction = transactions.filter(transaction => {
    return transaction.category === get_filterCategory_element_val;
  });

  renderingTransaction(filterTransaction);
});

// filter type element
filterType_element.addEventListener("change", () => {
  const get_filterCategory_element_val = filterType_element.value;

  if (get_filterCategory_element_val === "all") {
    renderingTransaction();
    return;
  }

  const filterType = transactions.filter(transaction => {
    return transaction.type === get_filterCategory_element_val;
  });

  renderingTransaction(filterType);
});