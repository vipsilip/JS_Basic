import { countWords } from './string-01';
describe('countWords', () => {
  it('should return -1 when empty string or not string', () => {
    expect(countWords('')).toBe(-1);
    expect(countWords(123)).toBe(-1);
    expect(countWords([])).toBe(-1);
    expect(countWords({})).toBe(-1);
  });
  it('should return number of words in string', () => {
    expect(countWords('hai')).toBe(1);
    expect(countWords('thanh hai')).toBe(2);
    expect(countWords('le nguyen thanh hai')).toBe(4);
  });
});
