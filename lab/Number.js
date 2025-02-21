// Bài toán gọi taxi
// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó.

// Yêu cầu:

// Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ

// Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ

// Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.

// Ví dụ:

// getTaxiCount(3) --> 1 xe 4 chỗ

// getTaxiCount(6) --> 1 xe 7 chỗ

// getTaxiCount(10) --> 2 xe vì 1 xe 7 chỗ và 1 xe 4 chỗ

// getTaxiCount(20) --> 3 xe 7 chỗ

function getTaxiCount(passengers) {
  return Math.ceil(passengers / 7);
}
console.log(getTaxiCount(0));
console.log(getTaxiCount(6));
console.log(getTaxiCount(8));
console.log(getTaxiCount(10));
console.log(getTaxiCount(22));

// Tìm chữ số lớn nhất của một số nguyên dương
// Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)

// Ví dụ:

// getMaxDigit(1) --> 1

// getMaxDigit(12) --> 2

// getMaxDigit(123) --> 3

// getMaxDigit(921) --> 9

// Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1

// Lưu ý: không sử dụng vòng lặp vì chưa học kiến thức này.

function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;
  const one = n % 10;
  const ten = Math.trunc((n % 100) / 10);
  const hundred = Math.trunc(n / 100);
  let max = one;
  if (ten > max) max = ten;
  if (hundred > max) max = hundred;
  return max;
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));
console.log(getMaxDigit(471));
console.log(getMaxDigit(438));

//-------------------------------------------------
// So sánh 2 số nguyên
// Viết hàm compareNumbers(a, b) nhận vào 2 số nguyên a, b bất kỳ.

// Trả về:

// 1 nếu a > b

// 0 nếu a = b

// -1 nếu a < b

// Ví dụ:

// compareNumbers(3, 5) --> -1

// compareNumbers(9, 7) --> 1

// compareNumbers(7, 7) --> 0

function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
}
console.log(compareNumbers(3, 5));
console.log(compareNumbers(9, 7));
console.log(compareNumbers(7, 7));

//---------------------------------------------------

// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.

// Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)

// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.

// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...

// Lưu ý: không dùng chuỗi, không dùng mảng, chỉ xử lý bằng số thôi nhé.

function isSymmetricNumber(n) {
  if (n < 0 || n >= 1000) return false;
  const one = n % 10;
  const ten = Math.trunc((n % 100) / 10);
  const hundred = Math.trunc(n / 100);
  if (n < 10) return true;
  if (n < 100) return one === ten;
  return one === hundred;
}
console.log(isSymmetricNumber(221));
console.log(isSymmetricNumber(122));
console.log(isSymmetricNumber(23));
console.log(isSymmetricNumber(0));
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(121));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(101));
