/* exported getStudentNames */
function getStudentNames(students) {
  var studentNameArray = [];

  for (var i = 0; i < students.length; i++) {
    studentNameArray.push(students[i].name);
  }
  return studentNameArray;
}
