// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
// studentId không?
export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return false;
  return studentList.some((x) => x.id === studentId);
}
export function hasStudentV2(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return false;
  for (const element of studentList) {
    if (element.id === studentId) return true;
  }
  return false;
}
export function hasStudentV3(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return false;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === studentId) return true;
  }
  return false;
}

// _______________________________________________________________________
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)
const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];

export function hasAlice(studentList) {
  return (
    Array.isArray(studentList) &&
    studentList.some((x) => x.name.toLowerCase() === 'alice' && x.gender === 'female')
  );
}
console.log(hasAlice(studentList));
