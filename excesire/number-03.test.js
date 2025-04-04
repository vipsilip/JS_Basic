import { isIncreasingNumberByDistance, isIncreasingNumberByDistanceV2 } from './number-03';
describe('isIncreasingNumberByDistance(n,x)', () => {
  // it('should return false when n<0 || n>1000000 || x<0 || x>5', () => {
  //   expect(isIncreasingNumberByDistance(-1, -1)).toBe(false);
  //   expect(isIncreasingNumberByDistance(-1, 1)).toBe(false);
  //   expect(isIncreasingNumberByDistance(12, -1)).toBe(false);
  //   expect(isIncreasingNumberByDistance(1000000, 5)).toBe(false);
  //   expect(isIncreasingNumberByDistance(4000000, 9)).toBe(false);
  // });
  it('should return false when has one digit', () => {
    Array.from({ length: 4 }, (x, idx) => idx + 1).forEach((x) => {
      expect(isIncreasingNumberByDistance(x, x)).toBe(false);
    });
  });
  it('should return false when left number >= right number', () => {
    [22, 333, 4444, 55555, 143, 98765, 97531].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 2)).toBe(false);
    });
    [(22, 333, 4444, 55555, 143, 98765, 97531)].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(false);
    });
  });
  it('should return false when incorrect distance ', () => {
    [123, 789, 45678].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 2)).toBe(false);
    });
    [(135, 246, 579)].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(false);
    });
  });
  it('should return true when increasing number and correct distance', () => {
    [123, 789, 45678].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(true);
    });
    [(135, 246, 579)].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 2)).toBe(true);
    });
    [(147, 369)].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 3)).toBe(true);
    });
  });
});

describe('isIncreasingNumberByDistanceV2(n,x)', () => {
  // it('should return false when n<0 || n>1000000 || x<0 || x>5', () => {
  //   expect(isIncreasingNumberByDistanceV2(-1, -1)).toBe(false);
  //   expect(isIncreasingNumberByDistanceV2(-1, 1)).toBe(false);
  //   expect(isIncreasingNumberByDistanceV2(12, -1)).toBe(false);
  //   expect(isIncreasingNumberByDistanceV2(1000000, 5)).toBe(false);
  //   expect(isIncreasingNumberByDistanceV2(4000000, 9)).toBe(false);
  // });
  it('should return false when has one digit', () => {
    Array.from({ length: 4 }, (x, idx) => idx + 1).forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, x)).toBe(false);
    });
  });
  it('should return false when left number >= right number', () => {
    [22, 333, 4444, 55555, 143, 98765, 97531].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 2)).toBe(false);
    });
    [(22, 333, 4444, 55555, 143, 98765, 97531)].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 1)).toBe(false);
    });
  });
  it('should return false when incorrect distance ', () => {
    [123, 789, 45678].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 2)).toBe(false);
    });
    [(135, 246, 579)].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 1)).toBe(false);
    });
  });
  it('should return true when increasing number and correct distance', () => {
    [123, 789, 45678].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 1)).toBe(true);
    });
    [(135, 246, 579)].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 2)).toBe(true);
    });
    [(147, 369)].forEach((x) => {
      expect(isIncreasingNumberByDistanceV2(x, 3)).toBe(true);
    });
  });
});
