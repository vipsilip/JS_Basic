// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumberByDistance(11, 1) --> false
// isIncreasingNumberByDistance(123, 1) --> true
// isIncreasingNumberByDistance(135, 2) --> true
// isIncreasingNumberByDistance(135, 1) --> false
export function isIncreasingNumberByDistance(n, x) {
  if (n <= 0 || n >= 1000000 || x <= 0 || x >= 5) return false;
  if (n < 10) return false;
  let curentNumber = n % 10;
  let prevNumber;
  let remaining = Math.trunc(n / 10);
  while (remaining > 0) {
    prevNumber = remaining % 10;
    if (curentNumber - prevNumber !== x) return false;
    curentNumber = prevNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

export function isIncreasingNumberByDistanceV2(n, x) {
  if (n <= 0 || n >= 1000000 || x <= 0 || x >= 5) return false;
  if (n < 10) return false;
  const numberToArray = [...n.toString()].map(Number);
  return numberToArray.slice(1).every((number, i) => number - numberToArray[i] === x);
}

console.log(isIncreasingNumberByDistanceV2(258, 3));
console.log(isIncreasingNumberByDistanceV2(1, 1));
console.log(isIncreasingNumberByDistanceV2(11, 1));
console.log(isIncreasingNumberByDistanceV2(1223, 1));
console.log(isIncreasingNumberByDistanceV2(123, 1));
console.log(isIncreasingNumberByDistanceV2(135, 2));
