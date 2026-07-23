function populateStudentSelect() {
  studentSelect.innerHTML = `
    <option value="">Select Student</option>
  `;

  students.forEach((student) => {
    const optionStudent = document.createElement("option");

    optionStudent.value = student.id;
    optionStudent.textContent = student.name;

    studentSelect.appendChild(optionStudent);
  });
}

function renderStudents() {
  studentList.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");

    // fallback sa [] kung yung student ay lumang record na walang subject array pa
    const subjects = student.subject || [];

    const subjectsText = subjects.length
      ? subjects.map((s) => `${s.name} (${s.grade})`).join(", ")
      : "—";

    const average = subjects.length
      ? (
          subjects.reduce((sum, s) => sum + s.grade, 0) /
          subjects.length
        ).toFixed(2)
      : 0;

    // simpleng GPA scale base sa average (pwede mo i-adjust depende sa grading system niyo)
    const gpa = (average / 25).toFixed(2); // 100 -> 4.0 scale

    const status = average >= 75 ? "Passed" : average > 0 ? "Failed" : "—";
    const statusClass =
      status === "Passed"
        ? "status-pass"
        : status === "Failed"
        ? "status-fail"
        : "";

    row.innerHTML = `
      <td data-label="Name">${student.name}</td>
      <td data-label="Age">${student.age}</td>
      <td data-label="Gender">${student.gender}</td>
      <td data-label="Course">${student.course}</td>
      <td data-label="Subjects">${subjectsText}</td>
      <td data-label="Average">${average}</td>
      <td data-label="GPA">${gpa}</td>
      <td data-label="Status">
        ${status !== "—" ? `<span class="${statusClass}">${status}</span>` : "—"}
      </td>
      <td data-label="Actions">
        <button class="delete" data-id="${student.id}">Delete</button>
      </td>
    `;

    studentList.appendChild(row);
  });
}