const studentForm = document.getElementById("student-form");
const studentName = document.getElementById("student-name");
const studentAge = document.getElementById("student-age");
const studentGender = document.getElementById("student-gender");
const studentCourse = document.getElementById("student-course");

const subjectForm = document.getElementById("subject-form");
const studentSelect = document.getElementById("student-select");
const subjectName = document.getElementById("subject-name");
const subjectGrade = document.getElementById("subject-grade");

loadData();

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const studentName_val = studentName.value.trim();
  const studentAge_val = studentAge.value;
  const studentGender_val = studentGender.value;
  const studentCourse_val = studentCourse.value.trim();

  const validating = [
    studentName_val,
    studentAge_val,
    studentGender_val,
    studentCourse_val
  ];

  const hasEmptyField = validating.some((val) => val === "" || val === null);

  if (hasEmptyField) {
    alert("Please fill in all fields!!!");
    return;
  }

  const newStudent = {
    id: Date.now(),
    name: studentName_val,
    age: Number(studentAge_val),
    gender: studentGender_val,
    course: studentCourse_val,
    subject: []
  };

  students.push(newStudent);
  saveStudents();
  loadData();

  studentForm.reset();
});

subjectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const studentSelect_val = studentSelect.value;
  const subjectName_val = subjectName.value.trim();
  const subjectGrade_val = subjectGrade.value;

  const validating = [
    studentSelect_val,
    subjectName_val,
    subjectGrade_val
  ];

  const hasEmptyField = validating.some((val) => val === "" || val === null);

  if (hasEmptyField) {
    alert("Please fill in all fields!!!");
    return;
  }

  // hanapin muna yung student na pinili sa dropdown gamit ang id
  // Number() dahil galing sa <select> value, laging string yun kahit id number sya
  const selectedStudent = students.find(
    (student) => student.id === Number(studentSelect_val)
  );

  if (!selectedStudent) {
    alert("Student not found!");
    return;
  }

  // i-push yung bagong subject papunta sa subject array NG STUDENT NA YUN
  // hindi sa buong "students" array
  selectedStudent.subject.push({
    name: subjectName_val,
    grade: Number(subjectGrade_val)
  });

  saveStudents();
  loadData();

  subjectForm.reset();
});