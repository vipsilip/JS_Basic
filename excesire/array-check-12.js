// Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số
// fibonaci nhỏ hơn 100 không?
// Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết
// fibonaci là gì thì đọc ở đây nhé
// Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không? Trả về
// true nếu có, ngược lại trả về false
// F(n) = F(n - 1) + F(n - 2)
function checkFibonacci(n) {
  const fiboListSmaller100 = [0, 1];
  for (let i = 2; i < n; i++) {
    const fibo = fiboListSmaller100[i - 1] + fiboListSmaller100[i - 2];
    if (fibo >= 100) break;
    fiboListSmaller100.push(fibo);
  }
  return fiboListSmaller100.includes(n);
}
// function fibonacci(n) {
//   return Array(100)
//     .fill(0)
//     .reduce((acc) => {
//       const len = acc.length;
//       const next = len < 2 ? len : acc[len - 1] + acc[len - 2];
//       return next < n ? [...acc, next] : acc;
//     }, []);
// }
export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((x) => checkFibonacci(x));
}
export function hasFibonaciNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (checkFibonacci(numberList[i])) return true;
  }
  return false;
}
function fibonacci(n) {
  const fiboListSmaller100 = [0, 1];
  for (let i = 2; i < n; i++) {
    const fibo = fiboListSmaller100[i - 1] + fiboListSmaller100[i - 2];
    if (fibo >= 100) break;
    fiboListSmaller100.push(fibo);
  }
  return fiboListSmaller100;
}
// dùng Set...has để tăng hiệu năng vì duyệt O(1), còn includes duyệt O(n)
export function hasFibonaciNumberV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  const newArr = new Set(fibonacci);
  for (const number of numberList) {
    if (newArr.has(number)) return true;
  }
  return false;
}
