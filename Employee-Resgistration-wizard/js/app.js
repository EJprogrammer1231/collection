const formOne = document.getElementById("form-one");
const inputFullName = document.getElementById("inputFullName");
const inputAge = document.getElementById("inputAge");
const inputEmail = document.getElementById("inputEmail");

const formTwo = document.getElementById("form-two");
const inputEmployeeId = document.getElementById("inputEmployeeId");
const inputDepartment = document.getElementById("inputDepartment");
const inputPosition = document.getElementById("inputPosition");
const inputSalary = document.getElementById("inputSalary");

// temporary object
let tempEmployee = {};

loadData();
formOne.addEventListener("submit" , (e) => {
  e.preventDefault();

  tempEmployee.fullname = inputFullName.value.trim();
  tempEmployee.age = Number(inputAge.value);
  tempEmployee.email = inputEmail.value.trim();

  formOne.reset();
});

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();

  tempEmployee.employeeId = inputEmployeeId.value.trim();
  tempEmployee.department = inputDepartment.value.trim();
  tempEmployee.position = inputPosition.value.trim();
  tempEmployee.salary = Number(inputSalary.value);

  information.push(tempEmployee);
  saveInformation();
  loadData();
  tempEmployee = {};

  formTwo.reset();
});