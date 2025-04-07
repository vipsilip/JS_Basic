// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n
export function isPerfectNumber(n) {
  if (n <= 1 || n >= 10000) return false;
  let sum = 0;
  for (let i = 1; i <= Math.trunc(n / 2); i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
export function isPerfectNumberV3(n) {
  if (n <= 1 || n >= 10000) return false;
  let sum = 1;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      sum += n / i;
    }
  }
  return sum === n;
}
export function isPerfectNumberV2(n) {
  if (n <= 1 || n >= 10000) return false;
  // const arrNumber = Array.from({ length: Math.trunc(n / 2) }, (_, i) => i + 1);
  const arrNumber = Array.from({ length: Math.sqrt(n) }, (_, i) => i + 1);
  // return (
  //   arrNumber.reduce((sum, number) => {
  //     if (n % number === 0) return (sum += number + n / number);
  //     return sum;
  //   }) === n
  // );
  return arrNumber.reduce((sum, x) => sum + (n % x === 0 ? x + n / x : 0)) === n;
}

console.log(isPerfectNumberV2(28));
