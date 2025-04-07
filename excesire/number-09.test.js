// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true
import { hasTwoDigitsWithSum, hasTwoDigitsWithSumV2 } from './number-09';

describe('hasTwoDigitsWithSum', () => {
  it('should return false when n<=9 || n>=1000000 || sum<=0 || sum >=19', () => {
    Array.from({ length: 10 }, (n, i) => i).forEach((x) => {
      expect(hasTwoDigitsWithSum(x, 1)).toBe(false);
      expect(hasTwoDigitsWithSum(x, 0)).toBe(false);
      expect(hasTwoDigitsWithSum(x, 19)).toBe(false);
    });
  });
  it('should return false when sum of two digits not equal initial number ', () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSum(101, 5)).toBe(false);
    expect(hasTwoDigitsWithSum(59302, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(12345, 2)).toBe(false);
  });
  it('should return true when sum of two digits equal initial number', () => {
    expect(hasTwoDigitsWithSum(101, 2)).toBe(true);
    expect(hasTwoDigitsWithSum(123, 5)).toBe(true);
    expect(hasTwoDigitsWithSum(56302, 8)).toBe(true);
    expect(hasTwoDigitsWithSum(111, 2)).toBe(true);
  });
});

describe('hasTwoDigitsWithSumV2', () => {
  it('should return false when n<=9 || n>=1000000 || sum<=0 || sum >=19', () => {
    Array.from({ length: 10 }, (n, i) => i).forEach((x) => {
      expect(hasTwoDigitsWithSumV2(x, 1)).toBe(false);
      expect(hasTwoDigitsWithSumV2(x, 0)).toBe(false);
      expect(hasTwoDigitsWithSumV2(x, 19)).toBe(false);
    });
  });
  it('should return false when sum of two digits not equal initial number ', () => {
    expect(hasTwoDigitsWithSumV2(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSumV2(101, 1)).toBe(false);
    expect(hasTwoDigitsWithSumV2(59302, 10)).toBe(false);
    expect(hasTwoDigitsWithSumV2(12345, 7)).toBe(false);
  });
  it('should return true when sum of two digits equal initial number', () => {
    expect(hasTwoDigitsWithSumV2(101, 2)).toBe(true);
    expect(hasTwoDigitsWithSumV2(123, 6)).toBe(true);
    expect(hasTwoDigitsWithSumV2(56302, 16)).toBe(true);
    expect(hasTwoDigitsWithSumV2(111, 3)).toBe(true);
  });
});
