const studentList = document.getElementById("student-list");

function renderingStudents(render = students) {
  studentList.innerHTML = "";

  render.forEach(student => {
    const studentsRow = document.createElement("tr");

    studentsRow.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.gender}</td>
      <td>${student.course}</td>
    `;

    studentList.appendChild(studentsRow);
  })
}