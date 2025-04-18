import { hasTruthy, hasFalsy } from './array-check-04';
describe('hasTruthy(arr)', () => {
  it('should return false when arr not array or empty arr', () => {
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy({})).toBe(false);
    expect(hasTruthy(123)).toBe(false);
    expect(hasTruthy('abc')).toBe(false);
  });
  it('should return false when not find truthy value in arr', () => {
    expect(hasTruthy([false, ''])).toBe(false);
    expect(hasTruthy([0])).toBe(false);
    expect(hasTruthy([null, '', undefined])).toBe(false);
  });
  it('should return true when there is truthy value in arr', () => {
    expect(hasTruthy([true, 123])).toBe(true);
    expect(hasTruthy(['abc', 123])).toBe(true);
    expect(hasTruthy([{}, []])).toBe(true);
  });
});
// _____________________________________________________________________________
// Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không?
describe('hasFalsy(arr)', () => {
  it('should return false when arr not array or empty arr', () => {
    expect(hasFalsy([])).toBe(false);
    expect(hasFalsy({})).toBe(false);
    expect(hasFalsy(123)).toBe(false);
    expect(hasFalsy('abc')).toBe(false);
  });
  it('should return false when not find truthy value in arr', () => {
    expect(hasFalsy([true, 123])).toBe(false);
    expect(hasFalsy(['abc'])).toBe(false);
    expect(hasFalsy([[1, 2, 3], { name: 'hai' }])).toBe(false);
  });
  it('should return true when there is truthy value in arr', () => {
    expect(hasFalsy([true, false])).toBe(true);
    expect(hasFalsy(['abc', 0])).toBe(true);
    expect(hasFalsy([undefined, null, ''])).toBe(true);
  });
});
