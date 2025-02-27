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
console.log(arr.every2((x, i, array) => ));
