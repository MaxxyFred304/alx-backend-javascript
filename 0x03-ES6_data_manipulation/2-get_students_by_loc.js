function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));
