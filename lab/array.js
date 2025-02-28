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
