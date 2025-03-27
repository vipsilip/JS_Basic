// Viết hàm clone object nhưng không dùng spread operator
// Viết hàm function cloneObject(obj) để clone một object obj truyền vào, và trả về là một object mới có đầy đủ các keys của object truyền vào.

// Ví dụ:

// const studentA = { name: 'Bob', math: 9 };
// const studentB = cloneObject(studentA);

// console.log(studentA === studentB); // should be false
// console.log(studentB.name); // Bob
// console.log(studentB.math); // 9

// Lưu ý: Không sử dụng Object.assign() và spread operator

function cloneObject(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
  //object assign
  //   return Object.assign({}, obj);
  //speed operator
  //   return { ...obj };
}
const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB); // should be false
console.log(studentB.name); // Bob
console.log(studentB.math); // 9

// Kiểm tra 2 objects có bằng nhau không?
// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:

// true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)

// ngược lại là false

// Ví dụ:

// isEqual({}, {}) --> true

// isEqual({ name: 'Bob' }, { name: 'Alice' }) --> false

// isEqual({ name: 'Bob' }, { name: 'Bob' }) --> true

// isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }) --> false

// Giả sử kiểu dữ liệu của các thuộc tính của cả 2 objects đều là kiểu dữ liệu primitive.

// Happy coding!

function isEqual(obj1, obj2) {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;
  if (obj1Length !== obj2Length) return false;
  //   if (obj1Length === 0 && obj2Length === 0) return true;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(isEqual({ name: 'Bob' }, { name: 'Bob' })); // --> true
console.log(isEqual({}, {})); //--> true
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' })); // --> false
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 })); // --> false
console.log(isEqual({ name: 'Bob', age: 20 }, { name: 'Bob', age: 18 })); // --> false
