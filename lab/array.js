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

function getDivisorList(n) {
  if (n < 1 || n > 1000) return [];
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}
console.log(getDivisorList(1));
console.log(getDivisorList(10));
console.log(getDivisorList(12));

//from - filter
function getDivisorList(n) {
  if (n < 1 || n > 1000) return [];
  return Array.from({ length: n }, (_, i) => i + 1).filter((v) => n % v === 0);
}
console.log(getDivisorList(1));
console.log(getDivisorList(10));
console.log(getDivisorList(12));

//from - foreach - sort
function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return [];
  const result = [];
  const sqrt = Math.trunc(Math.sqrt(n));
  const numberList = Array.from({ length: sqrt }, (_, i) => i + 1);
  numberList.forEach((x) => {
    if (n % x === 0) {
      result.push(x);
      if (n / x !== x) result.push(n / x);
    }
  });
  return result.sort((a, b) => a - b);
}

console.log(getDivisorListV2(64));
console.log(getDivisorListV2(12));
console.log(getDivisorListV2(1));
console.log(getDivisorListV2(10));

// Kiểm tra số hoàn hảo
// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?

// Với n thoả điều kiện 1 < n < 1000

// Trả về true nếu đúng, ngược lại trả về false

// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.

// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)

// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n

function isDivisorNumber(n) {
  const arrayList = [];
  const sqrt = Math.trunc(Math.sqrt(n));
  Array.from({ length: sqrt }, (_, i) => i + 1).forEach((x) => {
    if (n % x === 0) {
      arrayList.push(x);
      if (n / x !== x) arrayList.push(n / x);
    }
  });
  return arrayList.sort((a, b) => a - b);
}
function isPerfectNumber(n) {
  if (typeof n !== 'number' || n <= 1 || n >= 1000) return false;
  const numberList = isDivisorNumber(n);
  numberList.pop();
  return numberList.reduce((sum, x) => sum + x) === n;
}

function isPerfectNumber(n) {
  if (typeof n !== 'number' || n <= 5 || n >= 1000) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      sum += n / i;
    }
  }
  return sum === n;
}

// console.log(Math.sqrt(6));
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(64));
console.log(isPerfectNumber(22));
console.log(isPerfectNumber(12));
console.log(isPerfectNumber(5));
console.log(isPerfectNumber(100));
console.log(isPerfectNumber(89));

const number = [1, 2, 3];
console.log(number.pop());
console.log(number);

// Biến đổi mảng với f(i) = f(i-1) + f(i + 1)
// Viết hàm transformNumbers(numberList) để biến đổi các số hiện tại của mảng numberList thành các số mới theo công thức.

// f(i) = f(i - 1) + f(i + 1) với i là index
// Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh.

// Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề.

// Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi.

// Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé!

// Ví dụ

// transformNumbers([]) --> []

// transformNumbers([1]) --> [1]

// transformNumbers([5, 10]) --> [10, 5]

// transformNumbers([2, 4, 6, 8]) --> [4, 8, 12, 6] chú thích bên dưới

// Đặt mảng đầu vào là a, mảng trả về là b, ta có:

// b[0] = a[1] = 4 (đầu mảng)

// b[1] = a[0] + a[2] = 2 + 6 = 8

// b[2] = a[1] + a[3] = 4 + 8 = 12

// b[3] = a[2] = 6 (cuối mảng)

// Viết hàm này theo 3 cách khác nhau:

// Dùng for...i transformNumbersV1(numberList)

// Dùng forEach() transformNumbersV2(numberList)

// Dùng map() transformNumbersV3(numberList)

// Happy coding!

function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length < 2) return [...numberList];
  const result = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      result.push(numberList[i + 1]);
      continue; //bỏ qua những đoạn code phía dưới để nhảy tiếp vòng lặp
    }
    if (i === numberList.length - 1) {
      result.push(numberList[i - 1]);
      continue;
    }
    result.push(numberList[i - 1] + numberList[i + 1]);
    // if (numberList[i - 1] === undefined) {
    //   result[i] = 0 + numberList[i + 1];
    //   continue;
    // }
    // if (numberList[i + 1] === undefined) {
    //   result[i] = numberList[i - 1] + 0;
    //   continue;
    // }
    // result[i] = numberList[i - 1] + numberList[i + 1];
  }
  return result;
}

function transformNumbers(numberList) {
  if (numberList.length < 2) return [...numberList];
  const result = [];
  for (let i = 0; i < numberList.length; i++) {
    result[i] = numberList[i - 1] + numberList[i + 1] || numberList[i - 1] || numberList[i + 1];
  }
  return result;
}

// forEach
function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length < 2) return [...numberList];
  const result = [];
  numberList.forEach((x, i) => {
    // if (i === 0) result[i] = numberList[i + 1];
    // if (i === numberList.length) result[i] = numberList[i - 1];
    result[i] = numberList[i - 1] + numberList[i + 1] || numberList[i - 1] || numberList[i + 1];
  });
  return result;
}

//map
function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length < 2) return [...numberList];
  return numberList.map((x, i) => {
    const prevNum = numberList[i - 1] || 0;
    const nextNum = numberList[i + 1] || 0;
    return prevNum + nextNum;
  });
}

function transformNumbers(numberList) {
  if (numberList.length < 2) return [...numberList];

  return numberList.map((_, i, numberList) => {
    if (i === 0) return numberList[i + 1];
    if (i === numberList.length - 1) return numberList[i - 1];
    return numberList[i - 1] + numberList[i + 1];
  });
}
function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];

  const newList = [numberList[1]];
  for (let i = 1; i < numberList.length - 1; i++) {
    newList[i] = numberList[i - 1] + numberList[i + 1];
  }
  newList.push(numberList[numberList.length - 2]);

  return newList;
}
console.log(transformNumbers([10, 5]));
console.log(transformNumbers([2, 4, 6, 8])); //[4,8,12,6]
console.log(transformNumbers([1]));
console.log(transformNumbers([2, 4, 6])); //[4,8,4]

// Kiểm tra mảng có chứa số nguyên tố không?
// Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương.

// Trả về true nếu có ít nhất một số nguyên tố, ngược lại trả về false.

// Gợi ý: có thể tận dụng lại hàm kiểm tra số nguyên tố đã làm ở bài tập trước đó.

// Viết bằng 5 cách khác nhau:

// Sử dụng for...i hasPrimeV1(numberList)

// Sử dụng forEach() hasPrimeV2(numberList)

// Sử dụng find() hasPrimeV3(numberList)

// Sử dụng findIndex() hasPrimeV4(numberList)

// Sử dụng some() hasPrimeV5(numberList)

// Happy coding!

function findPrime(n) {
  if (n < 4) return true;
  const sqrt = Math.trunc(Math.sqrt(n));
  const numberList = Array.from({ length: sqrt }, (_, i) => i + 1);
  for (let i = 1; i < numberList.length; i++) {
    if (n % numberList[i] === 0) return false;
  }
  return true;
}
//for...i
// function hasPrimeV1(numberList) {
//   for (let i = 0; i < numberList.length; i++) {
//     return findPrime(numberList[i]);
//   }
//   return false;
// }
// //forEach
function hasPrimeV1(numberList) {
  let result = false;
  numberList.forEach((x) => (result += findPrime(x)));
  return result > 0 ? true : false;
}

//find
function hasPrimeV1(numberList) {
  return numberList.find((x) => findPrime(x)) > 0 ? true : false;
}
//findIndex
function hasPrimeV1(numberList) {
  return numberList.findIndex((x) => findPrime(x)) >= 0 ? true : false;
}
//some
function hasPrimeV1(numberList) {
  return numberList.some((x) => findPrime(x));
}

console.log(hasPrimeV1([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(hasPrimeV1([4, 6, 8, 9, 10]));

// Kiểm tra mảng có phải tất cả đều là số hoàn hảo không?
// Viết hàm isAllPerfectNumbers(numberList) nhận vào mảng số nguyên dương.

// Trả về true nếu tất cả đều là số hoàn hảo, ngược lại trả về false.

// Ví dụ:

// isAllPerfectNumbers([]) --> false

// isAllPerfectNumbers([1, 6]) --> false vì 1 không phải là số hoàn hảo

// isAllPerfectNumbers([1, 2, 3]) --> false

// isAllPerfectNumbers([6]) --> true vì 6 là số hoàn hảo

// isAllPerfectNumbers([6, 28]) --> true vì 6 và 28 đều là số hoàn hảo

// Viết hàm bằng 3 cách khác nhau:

// isAllPerfectNumbersV1(numberList) Sử dụng for...i với cách tiếp cận là return false nếu phát hiện có một số ko phải là số hoàn hảo.

// isAllPerfectNumbersV2(numberList) Sử dụng reduce() với cách tiếp cận là đếm số lượng số hoàn hảo, nếu nó bằng với length của array, nếu bằng thì return true, ngược lại return false

// isAllPerfectNumbersV3(numberList) Sử dụng every()
function isPerfectNumber(n) {
  const sqrt = Math.trunc(Math.sqrt(n));
  const result = [];
  Array.from({ length: sqrt }, (_, i) => i + 1).forEach((x) => {
    if (n % x === 0) {
      result.push(x);
      if (n / x !== x) result.push(n / x);
    }
  });
  result.sort((a, b) => a - b).pop();
  return result.reduce((sum, x) => sum + x, 0) === n ? true : false;
}
//for...i
// function isAllPerfectNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;
//   for (let i = 0; i < numberList.length; i++) {
//     if (!isPerfectNumber(numberList[i])) return false;
//   }
//   return true;
// }
//reduce
function isAllPerfectNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  const total = numberList.reduce((sum, x) => {
    if (isPerfectNumber(x)) sum++;
    return sum;
  }, 0);
  return total === numberList.length ? true : false;
}
//every
// function isAllPerfectNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;
//   return numberList.every((x) => isPerfectNumber(x));
// }
console.log(isAllPerfectNumber([6]));
console.log(isAllPerfectNumber([]));
console.log(isAllPerfectNumber([1, 6]));
console.log(isAllPerfectNumber([6, 1, 2, 3]));
console.log(isAllPerfectNumber([6, 28]));
// -------------------------------------------------------------------------------------------------

// Tính trung bình cộng của các số chẳn trong mảng
// Viết hàm calcAvgOfAllEvenNumbers(numberList) nhận vào là một mảng số nguyên dương.

// Trả về một con số duy nhất cho biết trung bình cộng của tất cả số sẵn có trong mảng, nếu kết quả là số thực thì làm tròn về số nguyên gần nhất.

// Ví dụ:

// calcAvgOfAllEvenNumbers(1) --> 0 vì dữ liệu đầu vào không hợp lệ

// calcAvgOfAllEvenNumbers([]) --> 0

// calcAvgOfAllEvenNumbers([1]) --> 0

// calcAvgOfAllEvenNumbers([1, 2]) --> 2

// calcAvgOfAllEvenNumbers([1, 2, 4]) --> 3 vì có 2 số chẳn 2 + 4 = 6, trung bình cộng lấy 6 / 2 = 3

// calcAvgOfAllEvenNumbers([1, 2, 4, 8]) --> 5 vì có 3 số chẳn 2 + 4 + 8 = 14, trung bình cộng lấy 14 / 3 = 4.6(6), làm tròn thành 5

// Happy coding!
