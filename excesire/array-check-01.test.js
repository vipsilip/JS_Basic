// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không?
import { hasEvenNumberGreaterThanN } from './array-check-01';
describe('hasEvenNumberGreaterThanN(numberList,n)', () => {
  it('should return false when empty numberlist or n<0 ', () => {
    expect(hasEvenNumberGreaterThanN([], 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN({}, 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN(123, 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN('abc', 1)).toBe(false);
  });
  it('should return false when all number in numberlist are odd', () => {
    expect(hasEvenNumberGreaterThanN([1, 3, 5, 7, 9], 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN([19, 7, 101], 100)).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 3, 5, 7, 9], 1)).toBe(false);
  });
  it('should return false when there is even number in numberlist but not number greater than n', () => {
    expect(hasEvenNumberGreaterThanN([10, 11, 12, 13, 14], 20)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 4, 6, 8], 20)).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 5], 20)).toBe(false);
  });
  it('should return true when there is even number in numberlist greater than n', () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 5, 6], 2)).toBe(true);
    expect(hasEvenNumberGreaterThanN([1, 4, 3, 5, 7], 2)).toBe(true);
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 5, 6], 2)).toBe(true);
    expect(hasEvenNumberGreaterThanN([2, 4, 6, 8], 4)).toBe(true);
  });
});
