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
  const listProtocols = ['http://', 'https://', 'ws://', 'wss://'];
  const listSuffix = ['.com', '.vn', '.com.vn'];
  let protocols = '';
  let suffixs = '';
  for (const protocol of listProtocols) {
    if (str.startsWith(protocol) && protocols.length < protocol.length) protocols = protocol;
  }
  if (!protocols) return false;
  let rest = str.slice(protocols.length);
  ['.', ',', '!', '?'].forEach((x) => {
    if (rest.slice(-1) === x) rest.slice(0, -1);
  });
  let domainName = '';
  domainName = rest.includes('/') ? rest.slice(0, rest.indexOf('/')) : rest;
  for (const suffix of listSuffix) {
    if (domainName.endsWith(suffix) && suffixs.length < suffix.length) suffixs = suffix;
  }
  if (!suffixs) return false;
  const domain = domainName.slice(0, -suffixs.length);
  if (domain.length < 3) return false;
  return true;
}
export function countURLs(str) {
  if (str.length === 0 || typeof str !== 'string') return 0;
  return str.split(' ').filter((word) => checkDomain(word)).length;
}
