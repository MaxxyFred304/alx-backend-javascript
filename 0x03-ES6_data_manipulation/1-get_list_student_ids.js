function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map(student => student.id);
}

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
