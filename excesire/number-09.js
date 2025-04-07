// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// // hasTwoDigitsWithSum(11, 2) --> true
export function hasTwoDigitsWithSum(n, sum) {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;
  let sumOfDigits = 0;
  let remaining = n;
  let currentNumber = n % 10;
  while (remaining > 0) {
    sumOfDigits += currentNumber;
    remaining = Math.trunc(remaining / 10);
    currentNumber = remaining % 10;
  }
  return sumOfDigits === sum;
}

export function hasTwoDigitsWithSumV2(n, sum) {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;
  const str = n.toString();
  let sumOfDigits = 0;
  for (let i = 0; i < str.length; i++) {
    sumOfDigits += Number(str[i]);
  }
  return sumOfDigits === sum;
}
