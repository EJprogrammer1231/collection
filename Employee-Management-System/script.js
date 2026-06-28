  // form get element
  const formSubmitField = document.getElementById("form-submit-field");

  // form fields element
  const fullNameField = document.getElementById("fullName-field");
  const emailField = document.getElementById("email-field");
  const ageField = document.getElementById("age-field");
  const positionField = document.getElementById("position-field");
  const departmentField = document.getElementById("department-field");
  const salaryField = document.getElementById("salary-field");
  const statusField = document.getElementById("status-field");

  // Dashboard Cards field
  const totalEmployees_element = document.getElementById("totalEmployees");
  const totalDepartments_element = document.getElementById("totalDepartments");
  const totalActiveEmployees_element = document.getElementById("totalActiveEmployees");
  const totalInactiveEmployees_element = document.getElementById("totalInactiveEmployees");

  // department Filter / All status
  const departmentFilter_element = document.getElementById("departmentFilter");
  const statusCategory_element = document.getElementById("statusCategory");

  // Search field element
  const searchField = document.getElementById("search-field");  

  // render table body of all employees info in this area
  const employeesInformationTable = document.getElementById("renderTableEmployees");


  // storing all employee info in this array
  const employees = [];

  formSubmitField.addEventListener("submit", (event) => {
    event.preventDefault();

    // get the value of each element of form field
    const get_fullname_val = fullNameField.value.trim();
    const get_emailfield_val = emailField.value.trim();
    const get_agefield_val = ageField.value.trim();
    const get_positionfield_val = positionField.value.trim()
    const get_departmentfield_val = departmentField.value.trim()
    const get_salaryfield_val = salaryField.value.trim();
    const get_statusfield_val = statusField.value;

    if (
      get_fullname_val === "" ||
      get_emailfield_val === "" ||
      get_agefield_val === "" ||
      get_positionfield_val === "" ||
      get_departmentfield_val === "" ||
      get_salaryfield_val === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      fullname: get_fullname_val,
      email: get_emailfield_val,
      age: Number(get_agefield_val),
      position: get_positionfield_val,
      department: get_departmentfield_val,
      salary: Number(get_salaryfield_val),
      status: get_statusfield_val
    };

    employees.push(newEmployee);
    console.log(employees);

    // rendering 
    renderEmployees();
    updateTotalEmployees();
    updateDepartmentCount();
    updateActiveEmployees();
    updateInactiveEmployees();
    searching();
    employeesDepartment_Filter();
    employeesStatus_Filter();
  
    // reset form
    formSubmitField.reset();
  });

  // render employees
  function renderEmployees(employeesToRender = employees) {
    employeesInformationTable.innerHTML = "";

    employeesToRender.forEach((curr_employee) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${curr_employee.fullname}</td>
        <td>${curr_employee.email}</td>
        <td>${curr_employee.age}</td>
        <td>${curr_employee.position}</td>
        <td>${curr_employee.department}</td>
        <td>₱${curr_employee.salary.toLocaleString("en-PH")}</td>
        <td>${curr_employee.status}</td>
        `;

        const actionCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
          deleteAction(curr_employee.id);
        });

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);

        employeesInformationTable.appendChild(row);
    });
  }

  // Dashboard Total Employees
  function updateTotalEmployees() {
    totalEmployees_element.textContent = employees.length
  }

  // Dashboard Departments
  function updateDepartmentCount() {
    const departments = [
      ...new Set(employees.map(employee => employee.department))
    ];

    totalDepartments.textContent = departments.length;
  }

  // Dashboard Active Employees
  function updateActiveEmployees() {
    let countingActive = 0;

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].status === "Active") {
        countingActive++;
      }
    }

    totalActiveEmployees_element.textContent = countingActive;
  }

  // Dashboard InactiveEmployees
  function updateInactiveEmployees() {
    const inactiveemployee = employees.filter(inactiveEM => {
      return inactiveEM.status === "Inactive";
    });

    totalInactiveEmployees_element.textContent = inactiveemployee.length
  }

  // Search field 
  function searching() {
    const get_searchField_val = searchField.value.trim().toLowerCase();

    const searchEmployees = employees.filter(search => {
    return search.fullname.toLowerCase().includes(get_searchField_val);
  });
    renderEmployees(searchEmployees);
  }
  
  searchField.addEventListener("input", searching);

  // Department filter
  function employeesDepartment_Filter() {
    departmentFilter_element.innerHTML = `
      <option value="all">All Departments</option>
    `;

    const departmentCategories = [ ...new Set(employees.map(depart_employees => depart_employees.department))];

    departmentCategories.forEach(departs => {
      const optionDepartments = document.createElement("option");

      optionDepartments.value = departs;
      optionDepartments.textContent = departs;

      departmentFilter_element.appendChild(optionDepartments);
    });
  }

  // status filter
  function employeesStatus_Filter() {
    statusCategory_element.innerHTML =  `
      <option value="all">All Departments</option>
    `;

    const allstatusCategories = [...new Set(employees.map(allStatus_employees => allStatus_employees.status))];

    allstatusCategories.forEach(status => {
      const optionStatus = document.createElement("option");

      optionStatus.value = status;
      optionStatus.textContent = status;
      
      statusCategory_element.appendChild(optionStatus);
    });
  }

  // delete button
  function deleteAction(id) {
  const employeeIndex = employees.findIndex((employee) => {
    return employee.id === id;
  });

  if (employeeIndex === -1) {
    return;
  }

  employees.splice(employeeIndex, 1);

  renderEmployees();
  updateTotalEmployees();
  updateDepartmentCount();
  updateActiveEmployees();
  updateInactiveEmployees();
}

  // Edit button
  function editAction() {

  }