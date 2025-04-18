// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
// không nhé
import { hasEasyFrontend } from './array-check-03';
describe('hasEasyFrontend(wordList)', () => {
  it('should return false when empty wordList ', () => {
    expect(hasEasyFrontend([])).toBe(false);
    expect(hasEasyFrontend({})).toBe(false);
    expect(hasEasyFrontend(123)).toBe(false);
    expect(hasEasyFrontend('abc')).toBe(false);
  });
  it('should return false when not easy or not frontend', () => {
    expect(hasEasyFrontend(['easy'])).toBe(false);
    expect(hasEasyFrontend(['hai', 'frontend'])).toBe(false);
  });
  it('should return true when there is easy and frontend', () => {
    expect(hasEasyFrontend(['esy frontend', 'easy fronend', 'abc'])).toBe(true);
    expect(hasEasyFrontend(['easy frontend'])).toBe(true);
    expect(hasEasyFrontend(['easy', 'frontend'])).toBe(true);
    expect(hasEasyFrontend(['easy', 'frontend', ''])).toBe(true);
    expect(hasEasyFrontend(['eaSy', 'frontEnd', ''])).toBe(true);
    expect(hasEasyFrontend(['frontend', 'easy'])).toBe(true);
  });
});
