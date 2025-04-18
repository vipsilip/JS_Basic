// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không?
// export function hasEvenNumberGreaterThanN(numberList, n) {
//   if (!Array.isArray(numberList) || numberList.length === 0 || n < 0) return false;
//   return numberList.some((x) => x % 2 === 0 && x > n);
// }
export function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0 || n < 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0 && numberList[i] > n) return true;
  }
  return false;
}
