// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ:
// isSymetricNumber(10) --> false
// isSymetricNumber(11) --> true
// isSymetricNumber(12321) --> true

//number
function reverseNumber(n) {
  let currentNumber = n % 10;
  let remaining = n;
  let result = 0;
  while (remaining > 0) {
    result = result * 10 + currentNumber;
    remaining = Math.trunc(remaining / 10);
    currentNumber = remaining % 10;
  }
  return result;
}

export function isSymmetricNumber(n) {
  if (n <= 10 || n >= 1000000) return false;
  return reverseNumber(n) === n;
}

//string
function reverseNumberV2(n) {
  const str = n.toString();
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return n % 10 === 0 ? result : Number(result);
}

export function isSymmetricNumberV2(n) {
  if (n <= 10 || n >= 1000000) return false;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

//array
export function isSymmetricNumberV3(n) {
  if (n <= 10 || n >= 1000000) return false;
  const strReverse = n.toString().split('').reverse().join('');
  return Number(strReverse) === n;
}
