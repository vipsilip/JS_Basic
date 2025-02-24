// Tìm và xoá các nguyên âm trong câu văn
// Viết hàm function removeVowel(str) để tìm và remove tất cả nguyên âm có trong câu văn đầu vào.

// Nguyên âm là các ký tự: u, e, o, a, i (uể oải :P)

// Ví dụ:

// removeVowel('') --> ''

// removeVowel('say hello') --> 'sy hll' vì a, e, o là nguyên âm nên đã bị xoá

// Giả định là mỗi nguyên âm trong str chỉ xuất hiện một lần.

// Trường hợp chuỗi sau khi bỏ các nguyên âm có dư khoảng trắng ở đầu hoặc cuối chuỗi, thì hãy bỏ luôn các khoảng trắng thừa này nhé.

// Lưu ý: không được sử dụng for, chỉ được dùng hàm replace()

function removeVowel(str) {
  if (str === '') return '';
  return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim();
}
console.log(removeVowel(''));
console.log(removeVowel('say hello'));
console.log(removeVowel('     say hello     '));

// Format số giây luôn hiển thị 2 chữ số
// Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có 2 chữ số của số giây.

// Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp, mình đảm bảo luôn show 2 chữ số, dù số giờ phút giây chỉ có một chữ số.

// Ví dụ:

// formatSeconds(0) --> '00'

// formatSeconds(9) --> '09'

// formatSeconds(20) --> '20'

// Viết hàm theo 2 hướng tiếp cận khác nhau:

// formatSecondsV1(seconds) Sử dụng if...else

// formatSecondsV2(seconds) Sử dụng hàm slice()

// Happy coding!

function formatSeconds(seconds) {
  if (seconds < 0 || seconds >= 60) return '';
  //if...else
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}

function formatSeconds(seconds) {
  if (seconds < 0 || seconds >= 60) return '';
  //slice
  return `0${seconds}`.slice(-2);
}

console.log(formatSeconds(0));
console.log(formatSeconds(9));
console.log(formatSeconds(20));

// Convert số giây sang chuỗi hh:mm:ss
// Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)

// Trả về là một chuỗi với định dạng hh:mm:ss trong đó:

// hh là số giờ

// mm là số phút

// ss là số giây

// hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.

// Ví dụ:

// formatTime(0) --> '00:00:00'

// formatTime(9) --> '00:00:09'

// formatTime(4256) --> '01:10:56'

// Happy coding!

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '';
  const HH = Math.trunc(seconds / 3600);
  const MM = Math.trunc((seconds - HH * 3600) / 60);
  const SS = seconds - (HH * 3600 + MM * 60);
  if (SS < 10) return `0${HH}:0${MM}:0${SS}`;
  if (MM < 10) return `0${HH}:0${MM}:${SS}`;
  if (HH < 10) return `0${HH}:${MM}:${SS}`;
  return `${HH}:${MM}:${SS}`;
}
console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(539));
console.log(formatTime(4256));

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '';
  const secondToHour = 3600;
  const secondToMinute = 60;
  const h = Math.trunc(seconds / secondToHour);
  const m = Math.trunc((seconds % secondToHour) / secondToMinute);
  const s = seconds % secondToMinute;
  const hh = `0${h}`.slice(-2);
  const mm = `0${m}`.slice(-2);
  const ss = `0${s}`.slice(-2);
  return `${hh}:${mm}:${ss}`;
}

console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(539));
console.log(formatTime(4256));

// Kiểm tra URL có sử dụng phương thức bảo mật
// Viết hàm isSecureUrl(url) nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật, ngược lại trả về false.

// Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:

// https

// wss

// Tạm thời bỏ qua việc kiểm tra url có hoàn chỉnh hay không, chỉ quan tâm phương thức bảo mật.

// Ví dụ:

// isSecureUrl('http://abc.com') --> false vì bắt đầu bằng http, ko phải là https

// isSecureUrl('https://ezfrontend.com') --> true

// isSecureUrl('wss://chat.ezfrontend.com') --> true

// isSecureUrl('ws://chat.abc.com') --> false

// Viết bằng 2 hướng tiếp cận khác nhau:

// isSecureUrlV1(url) Sử dụng indexOf()

// isSecureUrlV2(url) Sử dụng startsWith()

// Happy coding!

function isSecureUrlV1(url) {
  if (url === '') return false;
  //indexOf()
  return url.indexOf('https') === 0 || url.indexOf('wss') === 0;
}
function isSecureUrlV1(url) {
  if (url === '') return false;
  //startsWith()
  return url.startsWith('https') || url.startsWith('wss');
}
console.log(isSecureUrlV1('http://abc.com'));
console.log(isSecureUrlV1('https://abc.com'));
console.log(isSecureUrlV1('wss://abc.com'));
console.log(isSecureUrlV1('ws://abc.com'));

// Rút trích domain từ địa chỉ email
// Viết hàm extractDomain(email) nhận vào địa chỉ email, trả về phần domain sau ký tự @

// Ví dụ:

// extractDomain('')  --> ''

// extractDomain('alice@gmail.com')  --> 'gmail.com'

// extractDomain('bob@abc.com') --> 'abc.com'

// Viết hàm theo 2 hướng tiếp cận:

// extractDomainV1(email) Sử dụng split

// extractDomainV2(email) Sử dụng indexOf() và slice()

// Happy coding!

function extractDomainV1(email) {
  if (email === '') return '';
  //split
  return email.split('@')[1];
}

function extractDomainV2(email) {
  if (email === '') return '';
  //indexOf va slice()
  return email.slice(email.indexOf('@') + 1);
}
console.log(extractDomainV1(''));
console.log(extractDomainV1('alice@gmail.com'));
console.log(extractDomainV1('bob@abc.com'));

// Truy tìm mật mã
// Viết hàm findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau.

// Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.

// Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)

// Ví dụ:

// findSecret('SUPERCODE') --> ''

// findSecret('SUPERhelloCODE') --> 'hello'

// findSecret('eaABFHsyUEYSJfrontJSKJSHend') --> 'easyfrontend'

// Happy coding!

// Lưu ý: được phép dùng vòng for để duyệt chuỗi trong bài này.

function findSecret(code) {
  if (code === '') return '';
  let newCode = '';
  for (i = 0; i < code.length; i++) {
    // console.log(code[i]);
    if (code[i] >= 'a' && code[i] <= 'z') newCode += code[i];
  }
  return newCode;
}
console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));

// Trả về full name khi biết first và last name
// Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.

// Quy tắc để tạo chuỗi fullName như sau:

// firstName và lastName là optional (có thể không có)

// fullName không có khoảng trắng thừa ở đầu và cuối chuỗi

// firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường

// Ví dụ:

// getFullName('Alice') --> 'Alice'

// getFullName('Alice', '') --> 'Alice'

// getFullName('', 'Nguyen') --> 'Nguyen'

// getFullName('Bob', 'Tran') --> 'Bob Tran'

// getFullName('john', 'pHAm') --> 'John Pham'

// Happy coding!

function getFullName(firstName, lastName) {
  if ((firstName === '' && lastName === '') || firstName === undefined || lastName === undefined)
    return '';
  const upperFirst = firstName[0].toUpperCase();
  const lowerFirst = firstName.slice(1).toLowerCase();
  const upperLast = lastName[0].toUpperCase();
  const lowerLast = lastName.slice(1).toLowerCase();
  return `${upperFirst}${lowerFirst} ${upperLast}${lowerLast}`;
}
console.log(getFullName('john', 'pHAm'));
console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', 'Tran'));
