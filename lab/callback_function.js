// some , every

// console.log(arr.every((x) => x > 0));

Array.prototype.every2 = function (callBackFn) {
  const arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    const result = callBackFn(this[i], i, this);
    if (!result) return false;
  }
  return true;
};
const arr = [1, 3, 6];
console.log(arr.every2((x, i, array) => x > 0));

// find, findIndex
//V1
function findFirstConditinalValue(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  let max;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      max = number;
      break;
    }
  }
  return max;
}
console.log(findFirstConditinalValue([1, 2, 9, 7, 5, 0]));

//V2
function findFirstConditinalValue(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return number;
  }
  return undefined;
}
console.log(findFirstConditinalValue([1, 2, 9, 7, 5, 0]));

//V3
function findFirstConditinalValue(numberList, callback) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callback(number)) return number;
  }
  return undefined;
}
function find(number) {
  return number % 2 === 0;
}
console.log(findFirstConditinalValue([1, 8, 9, 7, 5, 0], find));

console.log(
  findFirstConditinalValue([1, 8, 9, 7, 5, 0], function (number) {
    return number % 2 === 0;
  }),
);

console.log(
  findFirstConditinalValue([1, 8, 9, 7, 5, 0], (number) => {
    return number % 2 === 0;
  }),
);

console.log(findFirstConditinalValue([1, 2, 3, 7, 5, 0], (number) => number % 2 === 1));

// ______________________findIndex_______________________
// V1
function findIndexFirstConditinalValue(numberList) {
  if (!Array.isArray(numberList)) return -1;
  let index = -1;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      index = i;
      break;
    }
  }
  return index;
}
console.log(findIndexFirstConditinalValue([7, 2, 5, 9, 0, 3]));

// V2
function findIndexFirstConditinalValue(numberList) {
  if (!Array.isArray(numberList)) return -1;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return i;
  }
  return -1;
}
console.log(findIndexFirstConditinalValue([7, 2, 5, 9, 0, 3]));

// V3
function findIndexFirstConditinalValue(numberList, callback) {
  if (!Array.isArray(numberList)) return -1;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callback(number, i)) return i;
  }
  return -1;
}
function findIndex(number) {
  return number % 2 === 0;
}
console.log(findIndexFirstConditinalValue([7, 2, 5, 9, 0, 3], findIndex));
console.log(
  findIndexFirstConditinalValue([7, 2, 5, 9, 0, 3], function (number) {
    return number % 2 === 0;
  }),
);
console.log(
  findIndexFirstConditinalValue([7, 2, 5, 9, 0, 3], (number) => {
    return number % 2 === 0;
  }),
);
console.log(findIndexFirstConditinalValue([7, 2, 5, 9, 0, 3], (number) => number % 2 === 0));

// [1,2,3] => [2,4,6]
// _______________map___________________
function maptransfom(numberList, mapingFn) {
  if (!Array.isArray(numberList)) return undefined;
  const newList = [];
  for (let i = 0; i < numberList.length; i++) {
    const value = mapingFn(numberList[i], i);
    newList.push(value);
  }
  return newList;
}
function maptransfom(numberList, mapingFn) {
  if (!Array.isArray(numberList) || typeof mapingFn !== 'function') return undefined;
  const newList = [];
  for (let i = 0; i < numberList.length; i++) {
    // const value = mapingFn(numberList[i], i);
    newList.push(mapingFn(numberList[i], i));
  }
  return newList;
}
console.log(maptransfom([1, 2, 3], (x) => x + 2));
console.log(maptransfom([1, 2, 3, 4, 5, 6], (x, i) => (i % 2 === 0 ? x + 1 : x * 2)));

//thêm cuối mảng -> push
//xóa cuối mảng -> pop
//thêm đầu mảng -> unshift
//xóa đầu mảng -> shift
//thêm xóa tùy ý -> slice(x,x,x)

// ________________filter__________________

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) newArr.push(arr[i]);
  }
  return newArr;
}
console.log(filter([1, 2, 3, 4, 5], (x, i) => i % 2 === 1));

// _____________________bubbleSot__________________
// [2, 7, 4, 9, 1]
function bubbleSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  let swap;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([2, 7, 4, 9, 1]));
console.log(bubbleSort([29, 10, 14, 37, 14]));
