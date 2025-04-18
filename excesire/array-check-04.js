// Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?
export function hasTruthy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const falsyList = [false, 0, -0, '', null, undefined, NaN];
  for (let i = 0; i < arr.length; i++) {
    if (!falsyList.includes(arr[i])) return true;
  }
  return false;
}
export function hasTruthyV2(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const falsyList = [false, 0, -0, '', null, undefined, NaN];
  return arr.some((x) => !falsyList.includes(x));
}
export function hasTruthy(arr) {
  return Array.isArray(arr) && arr.some((x) => !!x);
}
console.log(hasTruthy([false, '']));
console.log(hasTruthy([false, 123]));

// _____________________________________________________________________________
// Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không?
export function hasFalsy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const falsyList = [false, 0, -0, '', null, undefined, NaN];
  for (let i = 0; i < arr.length; i++) {
    if (falsyList.includes(arr[i])) return true;
  }
  return false;
}
export function hasFalsyV2(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const falsyList = [false, 0, -0, '', null, undefined, NaN];
  return arr.some((x) => falsyList.includes(x));
}
export function hasFalsy(arr) {
  return Array.isArray(arr) && arr.some((x) => !x);
}
