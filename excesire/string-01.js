export function countWords(str) {
  if (str.length === 0 || typeof str !== 'string') return -1;
  return str.split(' ').length;
}
