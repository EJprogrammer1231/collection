const expenseContainer = document.getElementById("expense-container");
const emptyState = document.getElementById("empty-state");
const expenseCount = document.getElementById("expense-count");

function renderingExpense(expenseRendering = transactions) {
  expenseContainer.innerHTML = "";

  if (expenseRendering.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  expenseRendering.forEach(transaction => {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="expense-info">
          <strong>${transaction.name}</strong><br>
          <span>₱${transaction.amount}</span><br>
          <span>${transaction.category}</span><br>
          <small>${transaction.date}</small>
        </div>

        <div class="expense-actions">
          <button class="edit-btn" data-id="${transaction.id}">
            Edit
          </button>

          <button class="delete-btn" data-id="${transaction.id}">
              Delete
          </button>
        </div>
      `;
    expenseContainer.appendChild(li);
  });
}

function expenseCounting() {
  expenseCount.textContent = transactions.length;
}