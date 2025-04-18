// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
// không nhé
export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;
  let hasEasy = false;
  let hasFrontend = false;
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i].toLowerCase();
    if (word.includes('easy') && word.includes('frontend')) return true;
    if (word.includes('easy')) hasEasy = true;
    if (word.includes('frontend')) hasFrontend = true;
  }
  return hasEasy && hasFrontend;
}
export function hasEasyFrontendV2(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;
  let hasEasy = false;
  let hasFrontend = false;
  let hasEasyAndFrontend = false;
  wordList.forEach((x) => {
    const word = x.toLowerCase();
    if (word.includes('easy') && word.includes('frontend')) hasEasyAndFrontend = true;
    if (word.includes('easy')) hasEasy = true;
    if (word.includes('frontend')) hasFrontend = true;
  });
  return hasEasyAndFrontend || (hasEasy && hasFrontend);
}
export function hasEasyFrontendV3(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;
  const { hasEasy, hasFrontend, hasEasyAndFrontend } = wordList.reduce(
    (acc, word) => {
      const lowerWord = word.toLowerCase();
      if (lowerWord.includes('easy')) acc.hasEasy = true;
      if (lowerWord.includes('frontend')) acc.hasFrontend = true;
      if (lowerWord.includes('easy') && lowerWord.includes('frontend'))
        acc.hasEasyAndFrontend = true;
      return acc;
    },
    { hasEasy: false, hasFrontend: false, hasEasyAndFrontend: false },
  );
  return hasEasyAndFrontend || (hasEasy && hasFrontend);
}
