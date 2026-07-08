const searchInput = document.getElementById("search-input");

function searching() {
  const searchInput_val = searchInput.value.trim().toLowerCase();

  const find = transactions.filter(transaction => {
    return (
      transaction.name.toLowerCase().includes(searchInput_val) || 
      transaction.category.toLowerCase().includes(searchInput_val)
    );
  });

  renderingExpense(find);
}

searchInput.addEventListener("input", searching);