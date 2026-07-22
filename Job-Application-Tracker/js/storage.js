let applications = JSON.parse(localStorage.getItem("applications")) || [];
let profile = JSON.parse(localStorage.getItem("profile")) || [];

function saveApplications() {
  localStorage.setItem("applications" , JSON.stringify(applications));
}

function saveProfile() {
  localStorage.setItem("profile", JSON.stringify(profile));
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

  if (profile) {
    renderGithubProfile();
  }
}

loadData();