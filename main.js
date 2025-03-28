export function sum(a, b) {
  return a + b;
}

export function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0 || numberList.every((x) => x % 2 === 1))
    return 0;
  let count = 0;
  const avgNumber = numberList.reduce((sum, x) => {
    // console.log(sum);
    if (x % 2 === 0) {
      sum += x;
      count++;
    }
    return sum;
  }, 0);
  return Math.ceil(avgNumber / count);
}
