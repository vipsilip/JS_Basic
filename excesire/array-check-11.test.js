// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
// Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
// Mảng đối xứng phải có ít nhất một phần tử.
import { isSymmetricList } from './array-check-11';
describe('isSymmetricList(numberList)', () => {
  it('should return false when numberList is not array or empty', () => {
    expect(isSymmetricList([])).toBe(false);
    expect(isSymmetricList({})).toBe(false);
    expect(isSymmetricList(123)).toBe(false);
    expect(isSymmetricList('abc')).toBe(false);
  });
  it('should return false when element of numberList is not symmetric', () => {
    expect(isSymmetricList([1, 2, 3, 1, 1])).toBe(false);
    expect(isSymmetricList([1, 2, 3, 2, 0])).toBe(false);
    expect(isSymmetricList([1, 2, 3, 4, 2, 1])).toBe(false);
  });
  it('should return false when element of numberList is symmetric', () => {
    expect(isSymmetricList([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 4, 4, 2, 1])).toBe(true);
  });
});
