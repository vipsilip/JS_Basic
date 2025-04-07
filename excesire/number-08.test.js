import { isDivisibleBy10, isDivisibleBy10V2, isDivisibleBy10V3 } from './number-08';
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// Ví dụ:
// isDivisibleBy10(10) --> false
// isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
// isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10
describe('isDivisibleBy10', () => {
  it('should return false when n<=0 || n>=1000000', () => {
    expect(isDivisibleBy10(0)).toBe(false);
    expect(isDivisibleBy10(-1)).toBe(false);
    expect(isDivisibleBy10(1000000)).toBe(false);
    expect(isDivisibleBy10(200409)).toBe(false);
  });
  it('should return false when sum of digits not divisible by 10', () => {
    expect(isDivisibleBy10(10)).toBe(false);
    expect(isDivisibleBy10(123)).toBe(false);
    expect(isDivisibleBy10(107843)).toBe(false);
    expect(isDivisibleBy10(11111)).toBe(false);
  });
  it('should return true when sum of digits divisible by 10', () => {
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(123455)).toBe(true);
  });
});

describe('isDivisibleBy10V2', () => {
  it('should return false when n<=0 || n>=1000000', () => {
    expect(isDivisibleBy10V2(0)).toBe(false);
    expect(isDivisibleBy10V2(-1)).toBe(false);
    expect(isDivisibleBy10V2(1000000)).toBe(false);
    expect(isDivisibleBy10V2(200409)).toBe(false);
  });
  it('should return false when sum of digits not divisible by 10', () => {
    expect(isDivisibleBy10V2(10)).toBe(false);
    expect(isDivisibleBy10V2(123)).toBe(false);
    expect(isDivisibleBy10V2(107843)).toBe(false);
    expect(isDivisibleBy10V2(11111)).toBe(false);
  });
  it('should return true when sum of digits divisible by 10', () => {
    expect(isDivisibleBy10V2(1234)).toBe(true);
    expect(isDivisibleBy10V2(123455)).toBe(true);
  });
});

describe('isDivisibleBy10V3', () => {
  it('should return false when n<=0 || n>=1000000', () => {
    expect(isDivisibleBy10V3(0)).toBe(false);
    expect(isDivisibleBy10V3(-1)).toBe(false);
    expect(isDivisibleBy10V3(1000000)).toBe(false);
    expect(isDivisibleBy10V3(200409)).toBe(false);
  });
  it('should return false when sum of digits not divisible by 10', () => {
    expect(isDivisibleBy10V3(10)).toBe(false);
    expect(isDivisibleBy10V3(123)).toBe(false);
    expect(isDivisibleBy10V3(107843)).toBe(false);
    expect(isDivisibleBy10V3(11111)).toBe(false);
  });
  it('should return true when sum of digits divisible by 10', () => {
    expect(isDivisibleBy10V3(1234)).toBe(true);
    expect(isDivisibleBy10V3(123455)).toBe(true);
  });
});
