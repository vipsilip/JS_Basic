import { statisticsWords } from './string-02';
describe('statisticsWords', () => {
  it('should return {} when empty string or not string', () => {
    expect(statisticsWords('')).toEqual({});
    expect(statisticsWords(123)).toEqual({});
    expect(statisticsWords({})).toEqual({});
    expect(statisticsWords([])).toEqual({});
  });
  it('should return correct when has redundant space', () => {
    expect(statisticsWords('  le nguyen le thanh hai  ')).toEqual({
      le: 2,
      nguyen: 1,
      thanh: 1,
      hai: 1,
    });
    expect(statisticsWords('le     nguyen    thanh    hai')).toEqual({
      le: 1,
      nguyen: 1,
      thanh: 1,
      hai: 1,
    });
  });
  it('should return correct when has word in string', () => {
    expect(statisticsWords('le nguyen le thanh hai')).toEqual({
      le: 2,
      nguyen: 1,
      thanh: 1,
      hai: 1,
    });
    expect(statisticsWords('le nguyen thanh hai')).toEqual({ le: 1, nguyen: 1, thanh: 1, hai: 1 });
  });
});
