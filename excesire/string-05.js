// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong câu.
// Lưu ý: không sử dụng regular expression.
// Ví dụ:
// countURLs('my website is: http://ezfrontend.com you can visit it') --> 1
// countURLs('my website is: https://ez.com you can visit it') --> 0 vì phần tên domain chỉ có 2 ký tự ez
// nên không hợp lệ
function checkDomain(str) {
  const listValidProtocol = ['http://', 'https://', 'ws://', 'wss://'];
  let protocol = '';
  for (const p of listValidProtocol) {
    if (str.startsWith(p) && protocol.length < p.length) protocol = p;
  }
  if (!protocol) return false;

  const pathName = str.slice(str.lastIndexOf('/'));
  const remaining = str.slice(0, str.lastIndexOf(pathName));
  const listValidDomain = ['.com', '.vn', '.com.vn'];
  let domain = '';
  for (const d of listValidDomain) {
    if (remaining.endsWith(d) && domain.length < d.length) domain = d;
  }
  if (!domain) return false;
  const domainName = str.slice(-(str.length - protocol.length), str.indexOf(domain));
  if (domainName.length < 3) return false;
  return true;
}

function countURLs(str) {
  if (str.length === 0 || typeof str !== 'string') return 0;
  return str.split(' ').filter((valid) => checkDomain(valid)).length;
}
console.log(countURLs('http://ezfrontend.com'));
