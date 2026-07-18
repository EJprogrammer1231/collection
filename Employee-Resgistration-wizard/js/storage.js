let information = JSON.parse(localStorage.getItem("information")) || [];

function saveInformation() {
  localStorage.getItem("information", JSON.stringify(information));
}

function loadData() {
  renderingInformation();
}