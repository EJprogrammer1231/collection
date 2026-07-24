const students = [
  { id: 1, name: "John", grade: 85 },
  { id: 2, name: "Anna", grade: 92 },
  { id: 3, name: "Mark", grade: 67 },
  { id: 4, name: "Jane", grade: 78 },
  { id: 5, name: "Peter", grade: 95 }
];

let passedStudents = [];

function getPassedStudents(students) {
  const grade = students
  .filter(student => student.grade >= 75)
  .sort((a,b) => b.grade - a.grade)

  passedStudents.push({
    name: grade.name,
    grade: grade.grade
  });

  return grade;
};

console.log(getPassedStudents(students));