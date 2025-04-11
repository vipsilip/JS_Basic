// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của key
export function statisticsCharacters(str) {
  if (str.length === 0 || typeof str !== 'string') return {};
  const arrString = str.split('');
  const obj = {};
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] === ' ') arrString[i] = 'space';
    obj[arrString[i]] = (obj[arrString[i]] || 0) + 1;
  }
  return obj;
}
console.log(statisticsCharacters('   aa   b   cc   '));

function statisticsCharactersV2(str) {
  if (str.length === 0 || typeof str !== 'string') return {};
  return str.split('').reduce((obj, digit) => {
    if (digit === ' ') digit = 'space';
    obj[digit] = (obj[digit] || 0) + 1;
    return obj;
  }, {});
}
