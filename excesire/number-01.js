export function isIncreasingNumber(n) {
  if (n <= 0 || n >= 1000000) return false;
  if (n < 10) return false;
  let curentNumber = n % 10;
  let remaining = Math.trunc(n / 10);
  let prevNumber;
  while (remaining > 0) {
    prevNumber = remaining % 10;
    if (prevNumber >= curentNumber) return false;
    curentNumber = prevNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

export function isIncreasingNumberV2(n) {
  if (n <= 0 || n >= 1000000) return false;
  if (n < 10) return false;
  const str = n.toString();
  for (let i = 1; i < str.length; i++) {
    if (str[i] <= str[i - 1]) return false;
  }
  return true;
}
//123
export function isIncreasingNumberV3(n) {
  if (n <= 0 || n >= 1000000) return false;
  if (n < 10) return false;
  let result = true;
  const arrNumber = n.toString().split('').map(Number);
  // return arrNumber.every((x, i) => {
  //   if (i === 0) return true;
  //   return x > arrNumber[i - 1];
  // });

  arrNumber.forEach((x, i) => {
    if (i === 0) return;
    if (x <= arrNumber[i - 1]) result = false;
  });
  return result;
}
