// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n
import { isPerfectNumber, isPerfectNumberV2, isPerfectNumberV3 } from './number-06';

describe('isPerfectNumber', () => {
  it('should return false when n<=1 || n>=1000', () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(1000)).toBe(false);
    expect(isPerfectNumber(58473)).toBe(false);
  });
  it('should return false when sum of divisor not equal n', () => {
    expect(isPerfectNumber(8)).toBe(false);
    expect(isPerfectNumber(98)).toBe(false);
    expect(isPerfectNumber(14730)).toBe(false);
    expect(isPerfectNumber(752)).toBe(false);
  });
  it('should return true when sum of divisor equal n', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
    expect(isPerfectNumber(8128)).toBe(true);
  });
});

describe('isPerfectNumberV2', () => {
  it('should return false when n<=1 || n>=1000', () => {
    expect(isPerfectNumberV2(1)).toBe(false);
    expect(isPerfectNumberV2(0)).toBe(false);
    expect(isPerfectNumberV2(1000)).toBe(false);
    expect(isPerfectNumberV2(58473)).toBe(false);
  });
  it('should return false when sum of divisor not equal n', () => {
    expect(isPerfectNumberV2(8)).toBe(false);
    expect(isPerfectNumberV2(98)).toBe(false);
    expect(isPerfectNumberV2(14730)).toBe(false);
    expect(isPerfectNumberV2(752)).toBe(false);
  });
  it('should return true when sum of divisor equal n', () => {
    expect(isPerfectNumberV2(6)).toBe(true);
    expect(isPerfectNumberV2(28)).toBe(true);
    expect(isPerfectNumberV2(496)).toBe(true);
    expect(isPerfectNumberV2(8128)).toBe(true);
  });
});

describe('isPerfectNumberV3', () => {
  it('should return false when n<=1 || n>=1000', () => {
    expect(isPerfectNumberV3(1)).toBe(false);
    expect(isPerfectNumberV3(0)).toBe(false);
    expect(isPerfectNumberV3(1000)).toBe(false);
    expect(isPerfectNumberV3(58473)).toBe(false);
  });
  it('should return false when sum of divisor not equal n', () => {
    expect(isPerfectNumberV3(8)).toBe(false);
    expect(isPerfectNumberV3(98)).toBe(false);
    expect(isPerfectNumberV3(14730)).toBe(false);
    expect(isPerfectNumberV3(752)).toBe(false);
  });
  it('should return true when sum of divisor equal n', () => {
    expect(isPerfectNumberV3(6)).toBe(true);
    expect(isPerfectNumberV3(28)).toBe(true);
    expect(isPerfectNumberV3(496)).toBe(true);
    expect(isPerfectNumberV3(8128)).toBe(true);
  });
});
