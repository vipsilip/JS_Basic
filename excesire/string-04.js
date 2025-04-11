// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào.
// Lưu ý: không sử dụng regular expression.
// Ví dụ:
// countEmails('my email should be abc@super.com') --> 1
// countEmails('my email should be a@a.com') --> 0
// countEmails('my email should be @ bla .com') --> 0
// countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn') --> 3

function checkEmails(str) {
  const specialIndex = str.indexOf('@');
  const validDomain = ['.com', '.com.vn', '.vn'];
  let domain = '';
  for (const x of validDomain) {
    if (str.endsWith(x) && domain.length < x.length) domain = x;
  }
  if (!domain) return false;
  const remaining = str.slice(0, str.length - domain.length);
  const arrXY = remaining.split('@');
  if (arrXY.length !== 2) return false;
  const [X, Y] = arrXY;
  if (X.length < 3 || Y.length < 3) return false;
  if (specialIndex <= 0 || specialIndex === str.length - 1) return false;
  return true;
}
// export function countEmails(str) {
//   if (str.length === 0 || typeof str !== 'string') return 0;
//   let count = 0;
//   str.split(' ').forEach((x) => {
//     if (checkEmails(x)) count++;
//   });
//   return count;
// }
export function countEmails(str) {
  if (str.length === 0 || typeof str !== 'string') return 0;
  //   const result = str.split(' ').filter((email) => checkEmails(email));
  //   return result.length;
  return str.split(' ').reduce((result, email) => result + +checkEmails(email), 0);
}
console.log(countEmails('abc@bc.com.vn'));
console.log(countEmails('abc@abc.com thanhhai@gmail.com.vn hai@abc.abc'));
console.log(countEmails('aba@abc.vn'));
console.log(countEmails('abc@abc.abcldk'));
