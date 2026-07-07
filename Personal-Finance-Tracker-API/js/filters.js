// Search and Filters
const input_transaction_search =  document.getElementById("input-transaction-search");
const Filter_Categories = document.getElementById("Filter-Categories"); 

function searchTransaction() {
  console.log("typing...");
  const input_transaction_search_val = input_transaction_search.value.trim().toLowerCase();

  const searching = transactions.filter(transaction => {
    return transaction.name.toLowerCase().includes(input_transaction_search_val);
  });
  console.log("Results:", searching);
  renderingTransaction(searching);
}

input_transaction_search.addEventListener("input", searchTransaction);

function filterBy() {
  const Filter_Categories_val = Filter_Categories.value;

  if (Filter_Categories_val === "") {
    renderingTransaction();
    return;
  }

  const filter_by = transactions.filter(transaction => {
    return transaction.type === Filter_Categories_val;
  });

  renderingTransaction(filter_by);
}

Filter_Categories.addEventListener("change", filterBy);