// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true
export function hasTwoDigitsWithSum(n, sum) {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;
  let tempN = n;
  while (tempN > 0) {
    let curentDigit = tempN % 10;
    let remaining = Math.trunc(tempN / 10);
    let tempRemaining = remaining;
    while (tempRemaining > 0) {
      let prevDigit = tempRemaining % 10;
      if (curentDigit + prevDigit === sum) return true;
      tempRemaining = Math.trunc(tempRemaining / 10);
    }
    tempN = remaining;
  }
  return false;
}

export function hasTwoDigitsWithSumV2(n, sum) {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;
  const str = n.toString();
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 1; j < str.length; j++) {
      if (+str[i] + +str[j] === sum) return true;
    }
  }
  return false;
}

export function hasTwoDigitsWithSumV3(n, sum) {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;
  const arrNumber = n.toString().split('').map(Number);
  return arrNumber.some((x, i) => arrNumber.slice(i + 1).some((y) => x + y === sum));
}
