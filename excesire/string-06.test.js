// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
// chuỗi address hoàn chỉnh
// Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
// Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.
import { getDisplayedAddress } from './string-06';
describe('getDisplayedAddress(address)', () => {
  it('should return empty string when empty obj or not obj', () => {
    expect(getDisplayedAddress({})).toEqual('');
    expect(getDisplayedAddress([])).toEqual('');
    expect(getDisplayedAddress('123')).toEqual('');
    expect(getDisplayedAddress(123)).toEqual('');
  });
  it('should return string when information of object ', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      }),
    ).toEqual('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
    expect(
      getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
      }),
    ).toEqual('Nguyen Cong Tru, Binh Thanh District');
  });
});
