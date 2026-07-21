let applications = JSON.parse(localStorage.getItem("applications")) || [];

function saveApplications() {
  localStorage.setItem("applications" , JSON.stringify(applications));
}

function loadData() {
  renderingApplications();
  updateTotalApplications();
  updateTotalInterview();
  updateTotalOffers();
  updateTotalRejected();
  updateTotalWishlist();
  updateAverageSalary();
  updateHighestSalary();
  updateLowestSalary();
  updateMostAppliedCity();
  updateMostCommonStatus();
}