const inputCash_element = document.getElementById("input-cash");
const change_element = document.getElementById("change");
const btnCheckout = document.getElementById("btn-checkout");

// ---------- live preview: updates as the cashier types ----------
inputCash_element.addEventListener("input", () => {
  const cash = Number(inputCash_element.value);

  // nothing typed yet, or not a usable number — just clear the display
  if (!inputCash_element.value || isNaN(cash) || cash < 0) {
    change_element.textContent = "₱0.00";
    return;
  }

  const grandTotal = updateSummary();
  const change = cash - grandTotal;

  // show ₱0.00 instead of a negative number while cash is still short
  change_element.textContent = `₱${(change > 0 ? change : 0).toFixed(2)}`;

  // If cash is enough, immediately add to sales history (no checkout click)
  if (cash >= grandTotal && cart.length > 0) {
    const receipt = {
      receiptNumber: Date.now(),
      date: new Date().toLocaleString(),
      items: cart.map(item => `${item.name} x${item.quantity}`).join(", "),
      total: grandTotal
    };

    salesHistory.push(receipt);
    saveSalesHistory();
    renderHistory();

    // Reduce product stock, clear cart, and reset cash once we record the sale
    cart.forEach(cartItem => {
      const inventoryItem = products.find(p => p.id === cartItem.id);
      if (inventoryItem) {
        inventoryItem.stock -= cartItem.quantity;
      }
    });
    saveProducts();
    renderProducts();

    cart = [];
    saveCart();
    renderCart();
    updateSummary();

    inputCash_element.value = "";
    change_element.textContent = "₱0.00";
  }
});

btnCheckout.addEventListener("click", () => {

  // 1. Guard: nothing to check out
  if (cart.length === 0) {
    alert("Cart is empty. Add a product first.");
    return;
  }

  // 2. Convert cash input to a number (inputs are always strings)
  const cash = Number(inputCash_element.value);

  if (!inputCash_element.value || isNaN(cash) || cash <= 0) {
    alert("Enter a valid cash amount.");
    return;
  }

  // 3. Reuse the grand total already computed in cart.js —
  //    no need to re-derive discount/tax logic here.
  const grandTotal = updateSummary();

  // 4. Make sure cash covers the total
  if (cash < grandTotal) {
    alert("Insufficient cash.");
    return;
  }

  // 5. Compute and display change
  const change = cash - grandTotal;
  change_element.textContent = `₱${change.toFixed(2)}`;

  // 6. Record this transaction in sales history
  const receipt = {
    receiptNumber: Date.now(),          // simple unique id
    date: new Date().toLocaleString(),
    items: cart.map(item => `${item.name} x${item.quantity}`).join(", "),
    total: grandTotal
  };

  salesHistory.push(receipt);
  saveSalesHistory();
  renderHistory();

  // 7. Reduce product stock based on what was sold
  cart.forEach(cartItem => {
    const inventoryItem = products.find(p => p.id === cartItem.id);
    if (inventoryItem) {
      inventoryItem.stock -= cartItem.quantity;
    }
  });
  saveProducts();
  renderProducts();

  // 8. Clear the cart for the next transaction
  cart = [];
  saveCart();
  renderCart();
  updateSummary();

  // 9. Reset the cash input
  inputCash_element.value = "";
});