const applicationForm = document.getElementById("application-form");
const inputCompany = document.getElementById("input-company");
const inputPosition = document.getElementById("input-position");
const inputLocation = document.getElementById("input-location");
const inputSalary = document.getElementById("input-salary");
const inputDate = document.getElementById("input-date");
const inputStatus = document.getElementById("input-status");
const inputNotes = document.getElementById("input-notes");
const inputFavorite = document.getElementById("input-favorite");

// temporary store a edit products
let editProductID = null;

loadData();
applicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputCompany_val = inputCompany.value.trim();
  const inputPosition_val = inputPosition.value.trim();
  const inputLocation_val = inputLocation.value.trim();
  const inputSalary_val = Number(inputSalary.value);
  const inputDate_val = inputDate.value;
  const inputStatus_val = inputStatus.value;
  const inputNotes_val = inputNotes.value.trim();
  const inputFavorite_val  = inputFavorite.checked;

  const requiredFields = [
    inputCompany_val, 
    inputPosition_val, 
    inputLocation_val, 
    inputSalary_val, 
    inputDate_val, 
    inputStatus_val
  ];

  if (requiredFields.some(field => !field)) {
    alert("Please Fill in all fields!!!");
    return;
  }

  const jobApplicationData = {
    id: Date.now(),
    company: inputCompany_val,
    position: inputPosition_val,
    location: inputLocation_val,
    salary: inputSalary_val,
    appliedDate: inputDate_val,
    status: inputStatus_val,
    notes: inputNotes_val,
    isFavorite: inputFavorite_val
  };

  // update edit
  if (editProductID === null) {
    applications.push(jobApplicationData);
  } else {
    const productTo_edit = applications.find(application => application.id === editProductID);

    if (productTo_edit) {
      productTo_edit.company = inputCompany_val;
      productTo_edit.position = inputPosition_val;
      productTo_edit.location = inputLocation_val;
      productTo_edit.salary = inputSalary_val;
      productTo_edit.appliedDate = inputDate_val;
      productTo_edit.status = inputStatus_val;
      productTo_edit.notes = inputNotes_val;
      productTo_edit.isFavorite = inputFavorite_val;
    }

    editProductID = null;
  }
  saveApplications();
  loadData();
  applicationForm.reset();
});

function editApplication(id) {
  const findApplication_area = applications.find(application => application.id === id);

  if (!findApplication_area) return;

    inputCompany.value = findApplication_area.company;
    inputPosition.value = findApplication_area.position;
    inputLocation.value = findApplication_area.location;
    inputSalary.value = findApplication_area.salary;
    inputDate.value = findApplication_area.appliedDate;
    inputStatus.value = findApplication_area.status;
    inputNotes.value = findApplication_area.notes;
    inputFavorite.checked = findApplication_area.isFavorite;

  editProductID = id;
}

function deleteApplication(id) {
  const index = applications.find(application => application.id === id);

  if (index === -1) return; 
  
  applications.splice(index, 1);
  saveApplications();
  loadData();
}