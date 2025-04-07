import { isSymmetricNumber, isSymmetricNumberV2, isSymmetricNumberV3 } from './number-07';
// Viết hàm isSymmetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ:
// isSymmetricNumber(10) --> false
// isSymmetricNumber(11) --> true
// isSymmetricNumber(12321) --> true
describe('isSymmetricNumber(n)', () => {
  it('should return false when n<1 || n>1000000', () => {
    expect(isSymmetricNumber(1)).toBe(false);
    expect(isSymmetricNumber(1000000)).toBe(false);
    expect(isSymmetricNumber(0)).toBe(false);
    expect(isSymmetricNumber(2000000)).toBe(false);
  });
  it('should return false when not symmetric number', () => {
    [123, 122, 1200, 4507, 123421].forEach((x) => {
      expect(isSymmetricNumber(x)).toBe(false);
    });
  });
  it('should return true when symmetric number', () => {
    [121, 11, 4554, 78087, 123321].forEach((x) => {
      expect(isSymmetricNumber(x)).toBe(true);
    });
  });
});

describe('isSymmetricNumberV2(n)', () => {
  it('should return false when n<1 || n>1000000', () => {
    expect(isSymmetricNumberV2(1)).toBe(false);
    expect(isSymmetricNumberV2(1000000)).toBe(false);
    expect(isSymmetricNumberV2(0)).toBe(false);
    expect(isSymmetricNumberV2(2000000)).toBe(false);
  });
  it('should return false when not symmetric number', () => {
    [123, 122, 1200, 4507, 123421].forEach((x) => {
      expect(isSymmetricNumberV2(x)).toBe(false);
    });
  });
  it('should return true when symmetric number', () => {
    [121, 11, 4554, 78087, 123321].forEach((x) => {
      expect(isSymmetricNumberV2(x)).toBe(true);
    });
  });
});
describe('isSymmetricNumberV3(n)', () => {
  it('should return false when n<1 || n>1000000', () => {
    expect(isSymmetricNumberV3(1)).toBe(false);
    expect(isSymmetricNumberV3(1000000)).toBe(false);
    expect(isSymmetricNumberV3(0)).toBe(false);
    expect(isSymmetricNumberV3(2000000)).toBe(false);
  });
  it('should return false when not symmetric number', () => {
    [123, 122, 1200, 4507, 123421].forEach((x) => {
      expect(isSymmetricNumberV3(x)).toBe(false);
    });
  });
  it('should return true when symmetric number', () => {
    [121, 11, 4554, 78087, 123321].forEach((x) => {
      expect(isSymmetricNumberV3(x)).toBe(true);
    });
  });
});
