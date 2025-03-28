import { sum, calcAvgOfAllEvenNumbers } from './main';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Tính trung bình cộng của các số chẳn trong mảng
// Viết hàm calcAvgOfAllEvenNumbers(numberList) nhận vào là một mảng số nguyên dương.

// Trả về một con số duy nhất cho biết trung bình cộng của tất cả số sẵn có trong mảng, nếu kết quả là số thực thì làm tròn về số nguyên gần nhất.

// Ví dụ:

// calcAvgOfAllEvenNumbers(1) --> 0 vì dữ liệu đầu vào không hợp lệ

// calcAvgOfAllEvenNumbers([]) --> 0

// calcAvgOfAllEvenNumbers([1]) --> 0

// calcAvgOfAllEvenNumbers([1, 2]) --> 2

// calcAvgOfAllEvenNumbers([1, 2, 4]) --> 3 vì có 2 số chẳn 2 + 4 = 6, trung bình cộng lấy 6 / 2 = 3

// calcAvgOfAllEvenNumbers([1, 2, 4, 8]) --> 5 vì có 3 số chẳn 2 + 4 + 8 = 14, trung bình cộng lấy 14 / 3 = 4.6(6), làm tròn thành 5

// Happy coding!
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
