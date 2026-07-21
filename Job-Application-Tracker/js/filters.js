const searchInput = document.getElementById("search-input");
const filterStatus = document.getElementById("filter-status");

const search_Company_or_Location = () => {

  const searchInput_val = searchInput.value.trim().toLowerCase();

  const searching = applications.filter(search => {
    return (
      search.company.toLowerCase().includes(searchInput_val) ||
      search.position.toLowerCase().includes(searchInput_val)
    );
  });
  renderingApplications(searching);
};

searchInput.addEventListener("input" , search_Company_or_Location);

const FilterAllStatus = () => {
  const filterStatus_val = filterStatus.value;

  if (filterStatus_val === "All") {
    renderingApplications(applications);
    return;
  }
  
  const filter_status = applications.filter(application => {
    return application.status === filterStatus_val;
  });

  renderingApplications(filter_status);
};

filterStatus.addEventListener("change", FilterAllStatus);