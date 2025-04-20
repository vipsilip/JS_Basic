// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
// Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
// Mảng đối xứng phải có ít nhất một phần tử.
// export function isSymmetricList(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] !== numberList[numberList.length - 1 - i]) return false;
//   }
//   return true;
// }
export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  const halfArr = Math.floor(numberList.length / 2);
  return numberList
    .slice(0, halfArr)
    .every((x, i) => numberList[i] === numberList[numberList.length - 1 - i]);
}
export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.reduce(
    (acc, number, i) => (!acc ? false : numberList[i] === numberList[numberList.length - 1 - i]),
    true,
  );
}
