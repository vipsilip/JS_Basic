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
import { countURLs } from './string-05';
describe('countURLs(str)', () => {
  it('should return 0 when empty string or not string', () => {
    expect(countURLs('')).toBe(0);
    expect(countURLs({})).toBe(0);
    expect(countURLs([])).toBe(0);
    expect(countURLs(123)).toBe(0);
  });
  it('should return 0 when protocol formta is wrong ', () => {
    expect(countURLs('htt://ezfrontend.com')).toBe(0);
    expect(countURLs('htts://ezfrontend.com')).toBe(0);
    expect(countURLs('wa://ezfrontend.com')).toBe(0);
    expect(countURLs('wsss://ezfrontend.com')).toBe(0);
  });
  it('should return 0 when domain format is wrong', () => {
    expect(countURLs('http://ezfrontend.co')).toBe(0);
    expect(countURLs('https://ezfrontend.com.vm')).toBe(0);
    expect(countURLs('ws://ezfrontend.vc')).toBe(0);
    expect(countURLs('wss://ezfrontend.coz')).toBe(0);
  });
  it('should return 0 when domain name < 3 digits', () => {
    expect(countURLs('http://ha.com')).toBe(0);
    expect(countURLs('https://ha.com.vn')).toBe(0);
    expect(countURLs('ws://h.com')).toBe(0);
    expect(countURLs('wss://ha.vn')).toBe(0);
  });
  it('should return sum of domain when correct request', () => {
    expect(countURLs('my website is: http://ezfrontend.com/abc you can visit it')).toBe(1);
    expect(countURLs('my website is: http://ezfrontend.com you can visit it ws://hai.vn')).toBe(2);
    expect(
      countURLs(
        'my website is: http://ezfrontend.com you can https://abc.com.vn visit it wss://thanhhai.vn',
      ),
    ).toBe(3);
    expect(
      countURLs(
        'my website is: http://ezfrontend.com you ws://abcabc.com.vn can visit it wss://thanhhai.vn',
      ),
    ).toBe(3);
  });
});
