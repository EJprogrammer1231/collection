const displayTable = document.getElementById("display-table");

function renderingInformation() {
  displayTable.innerHTML = "";

  information.forEach(info => {
    const row = document.createElement("td");

    row.innerHTML = `
    <td>${info.fullname}</td>
    <td>${info.age}</td>
    <td>${info.email}</td>
    <td>${info.employeeId}</td>
    <td>${info.department}</td>
    <td>${info.position}</td>
    <td>${info.salary}</td>
    `;

    displayTable.appendChild(row);
  });
}
