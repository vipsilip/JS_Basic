// Viết hàm lấy giá vé tương ứng theo số tuổi
// Khi khách hàng vào tham quan khu du lịch, tuỳ thuộc vào độ tuổi mà có giá vé khác nhau.
// Hãy viết một hàm nhận vào số tuổi của khách hàng, trả về giá vé tương ứng.
// Bảng giá như sau:
// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)
// Từ 6 - 12 tuổi giá vé là 20.000 VND
// Trên 12 tuổi thì đồng giá 50.000 VND
// Viết hàm function getTicketPrice(age)  để giúp mình lấy được giá tiền khi biết tuổi của khách hàng nhé.
// Trả về là một con số nguyên:
// -1 nếu dữ liệu không hợp lệ
// 0 nếu free
// các giá tiền nếu tuổi hợp lệ
// Giả sử người sống thọ nhất là 125 tuổi.

function getTicketPrice(age) {
  if (age <= 0 || age > 125 || typeof age !== 'number') return -1;
  if (age < 6 || age >= 70) return 0;
  if (6 <= age && age <= 12) return 20000;
  if (age > 12) return 50000;
}
function getTicketPrice(age) {
  if (age <= 0 || age > 125 || typeof age !== 'number') return -1;
  if (age < 6 || age >= 70) return 0;
  return age <= 12 ? 20000 : 50000;
}
function getTicketPrice(age) {
  switch (true) {
    case age <= 0 || age > 125 || typeof age !== 'number':
      return -1;
    case age < 6 || age >= 70:
      return 0;
    case 6 <= age && age <= 12:
      return 20000;
    default:
      return 50000;
  }
}

console.log(getTicketPrice(-1));
console.log(getTicketPrice(0));
console.log(getTicketPrice(3));
console.log(getTicketPrice(72));
console.log(getTicketPrice(7));
console.log(getTicketPrice(45));
console.log(getTicketPrice(69));
console.log(getTicketPrice(126));

// Random a number in range of [a,b] voi a< b
// [10,20] 20-10+10

function randomNumberInRange(a, b) {
  if (a >= b || a < 0) return -1;
  const random = Math.random() * (b - a) + a;
  return Math.round(random);
}
console.log(randomNumberInRange(0, 10));
console.log(randomNumberInRange(0, 10));
console.log(randomNumberInRange(0, 10));
console.log(randomNumberInRange(0, 10));
console.log(randomNumberInRange(0, 10));

// convert hours to seconds
function convertHoursToSecond(hour) {
  if (hour <= 0) return 0;

  let SECONDS_PER_HOURS = 3600;
  return hour * 3600;
}

console.log(convertHoursToSecond(4));
console.log(convertHoursToSecond(1));
