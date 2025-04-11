// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của key
import { statisticsCharacters } from './string-03';
describe('statisticsCharacters', () => {
  it('should return {} when empty string or not string', () => {
    expect(statisticsCharacters('')).toEqual({});
    expect(statisticsCharacters(123)).toEqual({});
    expect(statisticsCharacters({})).toEqual({});
    expect(statisticsCharacters([])).toEqual({});
  });
  it('should return correct when redundant space', () => {
    expect(statisticsCharacters('   le hai   ')).toEqual({
      l: 1,
      e: 1,
      h: 1,
      a: 1,
      i: 1,
      space: 7,
    });
    expect(statisticsCharacters('le    thanh')).toEqual({
      l: 1,
      e: 1,
      t: 1,
      h: 2,
      a: 1,
      n: 1,
      space: 4,
    });
  });
  it('should return correct when has word in string', () => {
    expect(statisticsCharacters('le hai')).toEqual({
      l: 1,
      e: 1,
      h: 1,
      a: 1,
      i: 1,
      space: 1,
    });
    expect(statisticsCharacters('le thanh')).toEqual({
      l: 1,
      e: 1,
      t: 1,
      h: 2,
      a: 1,
      n: 1,
      space: 1,
    });
  });
});
