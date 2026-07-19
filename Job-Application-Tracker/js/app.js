const applicationForm = document.getElementById("application-form");
const inputCompany = document.getElementById("input-company");
const inputPosition = document.getElementById("input-position");
const inputLocation = document.getElementById("input-location");
const inputSalary = document.getElementById("input-salary");
const inputDate = document.getElementById("input-date");
const inputStatus = document.getElementById("input-status");
const inputNotes = document.getElementById("input-notes");
const inputFavorite = document.getElementById("input-favorite");

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
    company: inputCompany_val,
    position: inputPosition_val,
    location: inputLocation_val,
    salary: inputSalary_val,
    appliedDate: inputDate_val,
    status: inputStatus_val,
    notes: inputNotes_val,
    isFavorite: inputFavorite_val
  };
  applications.push(jobApplicationData);
  saveApplications();
  loadData();
  applicationForm.reset();
});