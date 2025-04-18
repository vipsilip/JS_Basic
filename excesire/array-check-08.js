// Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price
// không?
function hasFreeShip(productList, price) {
  return Array.isArray(productList) && productList.some((x) => x.isFreeShip && x.price < price);
}

// _______________________________________________
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// ). Có ít nhất 2 phần tử.
// *. Phần tử sau luôn lớn hơn phần tử trước nó.
export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i - 1] > numberList[i]) return false;
  }
  return true;
}
export function isIncreasingNumberListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  return numberList.every((x, i) => {
    if (i === 0) return true;
    return numberList[i] >= numberList[i - 1];
  });
}
export function isIncreasingNumberListV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  let result = true;
  numberList.reduce((prev, curr) => {
    if (prev > curr) result = false;
    return curr;
  });
  return result;
}
console.log(isIncreasingNumberList([8, 4, 9, 0, 1]));
console.log(isIncreasingNumberList([1, 2, 3, 4, 5]));
// ________________________________________________________________________________
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// ). Có ít nhất 2 phần tử.
// *. Phần tử sau luôn nhỏ hơn phần tử trước nó.
export function isDecreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  let result = true;
  numberList.reduce((prev, curr) => {
    if (prev < curr) result = false;
    return curr;
  });
  return result;
}
