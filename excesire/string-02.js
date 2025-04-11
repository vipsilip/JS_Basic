export function statisticsWords(str) {
  if (str.length === 0 || typeof str !== 'string') return {};

  const obj = {};
  const arrString = str.trim().split(' ');
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] === '') continue;
    // obj[arrString[i]] === undefined ? (obj[arrString[i]] = 1) : obj[arrString[i]]++;
    obj[arrString[i]] = (obj[arrString[i]] || 0) + 1;
  }
  return obj;
}
function statisticsWordsV2(str) {
  if (str.length === 0 || typeof str !== 'string') return {};
  return str
    .trim()
    .split(' ')
    .filter((word) => word !== '')
    .reduce((obj, word) => {
      // obj[word] === undefined ? (obj[word] = 1) : obj[word]++;
      obj[word] = (obj[word] || 0) + 1;
      return obj;
    }, {});
}
console.log(statisticsWordsV2('le     nguyen    thanh    hai'));
