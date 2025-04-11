import { countEmails } from './string-04';
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào.
// Lưu ý: không sử dụng regular expression.
// Ví dụ:
// countEmails('my email should be abc@super.com') --> 1
// countEmails('my email should be a@a.com') --> 0
// countEmails('my email should be @ bla .com') --> 0
// countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn') --> 3
describe('countEmails(str)', () => {
  it('should return 0 when str is not string or str is empty string', () => {
    expect(countEmails('')).toBe(0);
    expect(countEmails({})).toBe(0);
    expect(countEmails([])).toBe(0);
    expect(countEmails(123)).toBe(0);
  });
  it('should return 0 when there is not @ in string or @ is not center of the sentence ', () => {
    expect(countEmails('abcmf.com@')).toBe(0);
    expect(countEmails('@abcmf.com')).toBe(0);
    expect(countEmails('abcmf.com')).toBe(0);
  });
  it('should return 0 when not format of domain', () => {
    expect(countEmails('abc@abc.co')).toBe(0);
    expect(countEmails('abc@abc.co m')).toBe(0);
    expect(countEmails('abc@abc.vnn')).toBe(0);
    expect(countEmails('abc@abc.com.vnn')).toBe(0);
  });
  it('should return 0 when from first sentence to @ < 3 or from @ to domain < 3', () => {
    expect(countEmails('ab@abc.com')).toBe(0);
    expect(countEmails('abc@ab.com.vn')).toBe(0);
    expect(countEmails('ab@ab.com')).toBe(0);
  });
  it('should return correct when there is @, correct format, correct domain', () => {
    expect(countEmails('abc@abc.com')).toBe(1);
    expect(countEmails('abc@abc.com thanhhai@gmail.com.vn')).toBe(2);
    expect(
      countEmails(
        'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn',
      ),
    ).toBe(3);
  });
});
