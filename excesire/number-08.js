// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// Ví dụ:
// isDivisibleBy10(10) --> false
// isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
// isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10
export function isDivisibleBy10(n) {
  if (n <= 0 || n >= 1000000) return false;
  let sum = 0;
  let remaining = n;
  let currentNumber = n % 10;
  while (remaining > 0) {
    sum += currentNumber;
    remaining = Math.trunc(remaining / 10);
    currentNumber = remaining % 10;
  }
  return sum % 10 === 0;
}

export function isDivisibleBy10V2(n) {
  if (n <= 0 || n >= 1000000) return false;
  const str = n.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum % 10 === 0;
}

// export function isDivisibleBy10V3(n) {
//   if (n <= 0 || n >= 1000000) return false;
//   const arrNumber = n.toString().split('').map(Number);
//   return arrNumber.reduce((sum, number) => sum + number, 0) % 10 === 0 ? true : false;
// }

export function isDivisibleBy10V3(n) {
  if (n <= 0 || n >= 1000000) return false;
  const arrNumber = n.toString().split('').map(Number);
  let sum = 0;
  arrNumber.forEach((x, i) => {
    sum += x;
  });
  return sum % 10 === 0;
}
console.log(isDivisibleBy10V3(1234));
console.log(isDivisibleBy10V3(12));
