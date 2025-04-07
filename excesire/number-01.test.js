import { isIncreasingNumber, isIncreasingNumberV2, isIncreasingNumberV3 } from './number-01';

// 0 >= n >= 1000000 -> false
// one digit -> false
// left number >= right number -> false
describe('kiem tra so tang dan', () => {
  test('should return false when one digit', () => {
    expect(isIncreasingNumber(1)).toBe(false);
    expect(isIncreasingNumber(0)).toBe(false);
  });
  test('should return false when left number >= right number', () => {
    expect(isIncreasingNumber(11)).toBe(false);
    expect(isIncreasingNumber(21)).toBe(false);
    expect(isIncreasingNumber(12321)).toBe(false);
    expect(isIncreasingNumber(123456748)).toBe(false);
    expect(isIncreasingNumber(987654321)).toBe(false);
  });
  test('should return true when ascending number', () => {
    expect(isIncreasingNumber(123)).toBe(true);
    expect(isIncreasingNumber(789)).toBe(true);
    expect(isIncreasingNumber(456789)).toBe(true);
  });
});

describe('kiem tra so tang dan', () => {
  test('should return false when one digit', () => {
    expect(isIncreasingNumberV2(1)).toBe(false);
    expect(isIncreasingNumberV2(0)).toBe(false);
  });
  test('should return false when left number >= right number', () => {
    expect(isIncreasingNumberV2(11)).toBe(false);
    expect(isIncreasingNumberV2(21)).toBe(false);
    expect(isIncreasingNumberV2(12321)).toBe(false);
    expect(isIncreasingNumberV2(123456748)).toBe(false);
    expect(isIncreasingNumberV2(987654321)).toBe(false);
  });
  test('should return true when ascending number', () => {
    expect(isIncreasingNumberV2(123)).toBe(true);
    expect(isIncreasingNumberV2(789)).toBe(true);
    expect(isIncreasingNumberV2(456789)).toBe(true);
  });
});
describe('kiem tra so tang dan', () => {
  test('should return false when one digit', () => {
    expect(isIncreasingNumberV3(1)).toBe(false);
    expect(isIncreasingNumberV3(0)).toBe(false);
  });
  test('should return false when left number >= right number', () => {
    expect(isIncreasingNumberV3(11)).toBe(false);
    expect(isIncreasingNumberV3(21)).toBe(false);
    expect(isIncreasingNumberV3(12321)).toBe(false);
    expect(isIncreasingNumberV3(123456748)).toBe(false);
    expect(isIncreasingNumberV3(987654321)).toBe(false);
  });
  test('should return true when ascending number', () => {
    expect(isIncreasingNumberV3(123)).toBe(true);
    expect(isIncreasingNumberV3(789)).toBe(true);
    expect(isIncreasingNumberV3(456789)).toBe(true);
  });
});
