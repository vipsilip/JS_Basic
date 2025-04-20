// Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số
// fibonaci nhỏ hơn 100 không?
// Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết
// fibonaci là gì thì đọc ở đây nhé
// Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không? Trả về
// true nếu có, ngược lại trả về false
import { hasFibonaciNumber } from './array-check-12';
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233]
describe('hasFibonacciNumber(numberList)', () => {
  it('should return false when numberList is not array or empty', () => {
    expect(hasFibonaciNumber([])).toBe(false);
    expect(hasFibonaciNumber({})).toBe(false);
    expect(hasFibonaciNumber(123)).toBe(false);
    expect(hasFibonaciNumber('abc')).toBe(false);
  });
  it('should return false when there is not fibonacci number in numberList or bigger 100', () => {
    expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
    expect(hasFibonaciNumber([54, 144, 233])).toBe(false);
  });
  it('should return true when fibonacci number in numberList or smaller 100', () => {
    expect(hasFibonaciNumber([89])).toBe(true);
    expect(hasFibonaciNumber([0, 1, 2, 3, 4, 5])).toBe(true);
    expect(hasFibonaciNumber([34, 4, 6])).toBe(true);
    expect(hasFibonaciNumber([8, 13, 21])).toBe(true);
  });
});
