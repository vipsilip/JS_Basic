function every(arrList) {
  if (!Array.isArray(arrList)) return false;
  for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] % 2 === 1) return false;
  }
  return true;
}
console.log(every([1, 2, 3]));
console.log(every([2, 4, 6]));

function some(arrList) {
  if (!Array.isArray(arrList)) return false;
  for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] % 2 === 0) return true;
  }
  return false;
}
console.log(some([1, 3, 5]));
console.log(some([1, 2, 3]));
console.log(some([2, 4, 6]));

function indexOf(arrList) {
  if (!Array.isArray(arrList)) return false;
  for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] % 2 === 0) return i;
  }
  return -1;
}
console.log(indexOf([1, 3, 5]));
console.log(indexOf([1, 2, 3]));
console.log(indexOf([2, 4, 6]));

function lastIndexOf(arrList) {
  if (!Array.isArray(arrList)) return false;
  for (let i = arrList.length - 1; i >= 0; i--) {
    if (arrList[i] % 2 === 0) return i;
  }
  return -1;
}
console.log(lastIndexOf([1, 3, 5]));
console.log(lastIndexOf([1, 2, 3]));
console.log(lastIndexOf([2, 4, 6]));

console.log([1, 2, 3].some((x) => x === 3));
console.log([1, 2, 3].includes(3));

function greet(name, callback) {
  console.log('Hello, ' + name);
  callback(); // Gọi hàm callback được truyền vào
}

function sayGoodbye() {
  console.log('Goodbye!');
}

// Truyền hàm sayGoodbye vào làm callback
greet('Alice', sayGoodbye);
// -------------------------------------------------------------------------
// Liệt kê các số trong khoảng [a, b]
// Viết hàm createArrayInRange(a, b) để tạo ra mảng gồm các số nằm trong khoảng [a, b] (có bao gồm a và b)

// Với a, b là các số thoả điều kiện sau: -100 < a < b < 100

// Trả về là một array chứa các số trong khoảng từ a tới b.

// Ví dụ:

// createArrayInRange(1, 5) --> [1, 2, 3, 4, 5]

// createArrayInRange(-2, 1) --> [-2, -1, 0, 1]

// Hãy viết bài này bằng 2 cách:

// Dùng for...i createArrayInRangeV1(a, b)

// Dùng Array.from() createArrayInRangeV2(a, b)

// Happy coding!
//for i
function createArrayInRange(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a <= -100 || b >= 100 || a > b)
    return undefined;
  const result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
console.log(createArrayInRange(1, 5));
console.log(createArrayInRange(-2, 1));
//from
function createArrayInRange(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a <= -100 || b >= 100 || a > b)
    return undefined;
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
console.log(createArrayInRange(1, 5));
console.log(createArrayInRange(-2, 1));

// Kiểm tra số nguyên tố
// Viết hàm isPrime(n) nhận vào là số nguyên dương (0 <= n < 1000) và trả về kết quả true/false cho biết đó có phải là số nguyên tố hay không?

// Trả về true nếu là số nguyên tố

// Ngược lại, trả về false

// Số nguyên tố là số chỉ chia hết cho 1 và chính nó (hay nói cách khác là chỉ có 2 ước số là 1 và chính nó) (Wikipedia)

// Dãy số nguyên tố tham khảo: 2, 3, 5, 7, 11, 13, 17, ...

// isPrime(2) --> true

// isPrime(3) --> true

// isPrime(4) --> false vì 4 ngoài chia hết cho 1, nó còn chia hết cho 2

// Giải bài này bằng 2 cách:

// Cách 1 là lặp từ 2 tới n - 1 để kiểm tra isPrimeV1(n)

// Cách 2 là lặp từ 2 tới căn bậc 2 của n để kiểm tra isPrimeV2(n) (hãy suy nghĩ tại sao nhé)

function isPrime(n) {
  if (typeof n !== 'number' || n < 0 || n >= 1000) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

function isPrime(n) {
  if (typeof n !== 'number' || n < 0 || n >= 1000) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

// Liệt kê ước số của số nguyên dương n
// Viết hàm getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và trả về một mảng các ước số của n.

// Ví dụ:

// getDivisorList(1) --> [1]

// getDivisorList(10) --> [1, 2, 5, 10]

// getDivisorList(12) --> [1, 2, 3, 4, 6, 12]

// Hãy viết hàm này bằng 3 cách tiếp cận:

// Sử dụng for...i từ 1 tới n getDivisorListV1(n)

// Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorListV2(n)

// Sử dụng Array.from(), forEach() và sort(). Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorListV3(n)

// Happy coding!

// function getDivisorList(n) {
//   if (n < 1 || n > 1000) return [];
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) result.push(i);
//   }
//   return result;
// }
// console.log(getDivisorList(1));
// console.log(getDivisorList(10));
// console.log(getDivisorList(12));

// //from - filter
// function getDivisorList(n) {
//   if (n < 1 || n > 1000) return [];
//   return Array.from({ length: n }, (_, i) => i + 1).filter((value) => n % value === 0);
// }
// console.log(getDivisorList(1));
// console.log(getDivisorList(10));
// console.log(getDivisorList(12));

//from - foreach - sort
function getDivisorList(n) {
  if (n < 1 || n > 1000) return [];
  const result = [];
  const sqrt = Math.sqrt(n);
  const numberList = Array.from({ length: sqrt }, (_, i) => i + 1);
  numberList.forEach((x) => {
    if (n % x === 0) {
      sqrt === x ? result.push(x) : result.push(n / x);
    }
  });
  return result.sort((a, b) => a - b);
}

console.log(getDivisorList(64));
console.log(getDivisorList(12));
console.log(getDivisorList(1));
console.log(getDivisorList(10));
