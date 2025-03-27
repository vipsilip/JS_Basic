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

//for...i
function transformNumbers(numberList) {
  if (numberList.length < 2 || !Array.isArray(numberList)) return [...numberList];
  const newNumberList = [];
  newNumberList[0] = numberList[1];
  newNumberList[numberList.length - 1] = numberList[numberList.length - 2];
  for (let i = 1; i < numberList.length - 1; i++) {
    newNumberList[i] = numberList[i - 1] + numberList[i + 1];
  }
  return newNumberList;
}

console.log(transformNumbers([5]));
console.log(transformNumbers([5, 10]));
console.log(transformNumbers([2, 4, 6, 8]));

//forEach
function transformNumbersV2(numberList) {
  if (numberList.length < 2 || !Array.isArray(numberList)) return [...numberList];
  const newNumberList = [];
  numberList.forEach((x, i) => {
    // if (numberList[i - 1] === undefined) numberList[i - 1] = 0;
    // if (numberList[i + 1] === undefined) numberList[i + 1] = 0;
    // newNumberList[i] = numberList[i - 1] + numberList[i + 1];
    if (i === 0) return (newNumberList[i] = numberList[i + 1]);
    if (i === numberList.length - 1) return (newNumberList[i] = numberList[i - 1]);
    newNumberList[i] = numberList[i - 1] + numberList[i + 1];
  });
  return newNumberList;
}
console.log(transformNumbersV2([2, 4, 6, 8]));
console.log(transformNumbers([5]));
console.log(transformNumbers([5, 10]));

//map
function transformNumbers(numberList) {
  if (numberList.length < 2 || !Array.isArray(numberList)) return [...numberList];
  return numberList.map((x, i) => {
    if (i === 0) return numberList[i + 1];
    if (i === numberList.length - 1) return numberList[i - 1];
    return numberList[i - 1] + numberList[i + 1];
  });
}
console.log(transformNumbersV1([2, 4, 6, 8]));
console.log(transformNumbers([5]));
console.log(transformNumbers([5, 10]));
console.log(transformNumbers([2, 4, 6, 8, 10, 12]));
