// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
// studentId không?
import { hasStudent, hasAlice } from './array-check-06';
describe('hasStudent(studentList, studentId', () => {
  it('should return false when input value invalid', () => {
    expect(hasStudent([], 1)).toBe(false);
    expect(hasStudent({}, 1)).toBe(false);
    expect(hasStudent(123, 1)).toBe(false);
    expect(hasStudent('abc', 1)).toBe(false);
  });
  const studentList = [
    { id: 1, name: 'hai' },
    { id: 2, name: 'dung' },
    { id: 4, name: 'hien' },
  ];
  it('should return false when studentId is not found in studentList', () => {
    expect(hasStudent(studentList, 3)).toBe(false);
    expect(hasStudent(studentList, 5)).toBe(false);
  });
  it('should return true when studentId is found in studentList', () => {
    expect(hasStudent(studentList, 1)).toBe(true);
    expect(hasStudent(studentList, 2)).toBe(true);
  });
});
// ______________________________________________________________________________
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)
describe('hasAlice(studentList', () => {
  it('should return false when input value invalid', () => {
    expect(hasAlice([])).toBe(false);
    expect(hasAlice({})).toBe(false);
    expect(hasAlice(123)).toBe(false);
    expect(hasAlice('abc')).toBe(false);
  });

  it('should return false when the name is alice but gender is male and opposite ', () => {
    expect(
      hasAlice([
        { id: 5, name: 'hai', gender: 'female' },
        { id: 1, name: 'Alice', gender: 'male' },
      ]),
    ).toBe(false);
    expect(
      hasAlice([
        { id: 5, name: 'ALICE', gender: 'male' },
        { id: 5, name: 'alicE', gender: 'male' },
      ]),
    ).toBe(false);
  });
  it('should return true when name is alice and gender is female', () => {
    expect(
      hasAlice([
        { id: 5, name: 'hai', gender: 'female' },
        { id: 1, name: 'Alice', gender: 'female' },
      ]),
    ).toBe(true);
    expect(
      hasAlice([
        { id: 2, name: 'aLice', gender: 'female' },
        { id: 5, name: 'hai', gender: 'female' },
      ]),
    ).toBe(true);
    expect(
      hasAlice([
        { id: 5, name: 'ALICE', gender: 'female' },
        { id: 5, name: 'alicE', gender: 'male' },
      ]),
    ).toBe(true);
  });
});
