function sumOfOddMultiplications(n) {
  let result = 1;
  for (let i = 1; i <= 2 * n + 1; i += 2) {
    result *= i;
  }
  return result;
}
console.log(sumOfOddMultiplications(3));
console.log(sumOfOddMultiplications(5));

function calcTwoNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  const addition = a + b;
  const subtraction = a - b;
  const multiply = a * b;
  const division = a / b;
  return `Tổng là: ${addition}
Hiệu là: ${subtraction}
Tích là: ${multiply}
Thương là: ${division} 
  `;
}
console.log(calcTwoNumber(1, 2));

function calcFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return `Giai thừa của ${n}! = ${result}`;
}
console.log(calcFactorial(5));
console.log(calcFactorial(7));
