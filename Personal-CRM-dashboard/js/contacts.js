const contactContainer = document.getElementById("contact-container");
const contactCount = document.getElementById("contact-count");

function renderingCustomers(customersRendering = customers) {
  contactContainer.innerHTML = "";

  if (customersRendering.length === 0) {
    contactContainer.innerHTML = `
      <div id="empty-state">
        <h3>No Contacts Found</h3>
        <p>Add your first contact to get started.</p>
      </div>
    `;
    return;
  }

  customersRendering.forEach(customer => {
    const card = document.createElement("div");
    card.className = "contact-card";

    card.innerHTML = `
      <h4>${customer.name}</h4>
      <p>${customer.company}</p>
      <p>${customer.phone}</p>
      <p>${customer.email}</p>
      <span class="badge">${customer.category}</span>
      <span class="badge">${customer.status}</span>
      <p>${customer.notes}</p>
    `;

    contactContainer.appendChild(card);
  });
};

function contactCounts() {
  contactCount.textContent = customers.length;
}