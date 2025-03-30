import { sum, calcAvgOfAllEvenNumbers } from './main';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('calcAvgOfAllEvenNumbers', () => {
  test('should return 0 when numberList not array', () => {
    expect(calcAvgOfAllEvenNumbers(1)).toBe(0);
    expect(calcAvgOfAllEvenNumbers('abc')).toBe(0);
    expect(calcAvgOfAllEvenNumbers({})).toBe(0);
    expect(calcAvgOfAllEvenNumbers([])).toBe(0);
    expect(calcAvgOfAllEvenNumbers(null)).toBe(0);
    expect(calcAvgOfAllEvenNumbers(undefined)).toBe(0);
  });
  test('should return 0 when all number is odd', () => {
    expect(calcAvgOfAllEvenNumbers([1])).toBe(0);
    expect(calcAvgOfAllEvenNumbers([7, 3, 5])).toBe(0);
  });
  test('should return result when there is an even number ', () => {
    expect(calcAvgOfAllEvenNumbers([1, 2, 3, 4, 5])).toBe(3);
    expect(calcAvgOfAllEvenNumbers([1, 2, 3, 4, 8])).toBe(5);
  });
});
