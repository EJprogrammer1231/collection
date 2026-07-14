let customers = JSON.parse(localStorage.getItem("customers")) || [];

function saveCustomers() {
  localStorage.setItem(
    "customers",
    JSON.stringify(customers)
  );
}

function loadCustomers() {
  renderingCustomers();
  contactCounts();
}