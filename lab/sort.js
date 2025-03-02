function bubbleSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  let swap;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
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
// _____________________________________________________________

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let idxMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min < arr[j]) {
        min = arr[j];
        idxMin = j;
      }
    }
    arr[idxMin] = arr[i];
    arr[i] = min;
  }
  return arr;
}
console.log(selectionSort([2, 7, 4, 9, 1]));
console.log(selectionSort([29, 10, 14, 37, 14]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let tempIdx = i;
    while (temp < arr[tempIdx - 1]) {
      arr[tempIdx] = arr[tempIdx - 1];
      tempIdx--;
    }
    arr[tempIdx] = temp;
  }
  return arr;
}
console.log(insertionSort([2, 7, 4, 9, 1]));
console.log(insertionSort([29, 10, 14, 37, 14]));
