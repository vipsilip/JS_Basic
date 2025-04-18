// Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price
// không?
import { hasFreeShip, isIncreasingNumberList, isDecreasingNumberList } from './array-check-08';
describe('hasFreeShip(productList,price)', () => {
  it('should return false when productList is not array or empty or price is not number', () => {
    expect(hasFreeShip([])).toBe(false);
    expect(hasFreeShip({})).toBe(false);
    expect(hasFreeShip(123)).toBe(false);
    expect(hasFreeShip('abc')).toBe(false);
  });
  it('should return false when freeship product is not found and price of product smaller price', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 1020050 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 15000000 },
        ],
        2000000,
      ),
    ).toBe(false);
  });
  it('should return true when freeship product is not found and price of product smaller price', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 150000 },
        ],
        1000000,
      ),
    ).toBe(true);
  });
});

// _______________________________________________
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// ). Có ít nhất 2 phần tử.
// *. Phần tử sau luôn lớn hơn phần tử trước nó.

describe('isIncreasingNumberList(numberList)', () => {
  it('should return false when numberList is not array or empty', () => {
    expect(isIncreasingNumberList([])).toBe(false);
    expect(isIncreasingNumberList({})).toBe(false);
    expect(isIncreasingNumberList(123)).toBe(false);
    expect(isIncreasingNumberList('abc')).toBe(false);
  });
  it('should return false when length of numberList < 2', () => {
    expect(isIncreasingNumberList([8])).toBe(false);
    expect(isIncreasingNumberList([12])).toBe(false);
  });
  it('should return false when numberList is not increasing', () => {
    expect(isIncreasingNumberList([8, 4, 9, 0, 1])).toBe(false);
    expect(isIncreasingNumberList([1, 2, 3, 9, 0, 2])).toBe(false);
  });
  it('should return true when numberList is increasing', () => {
    expect(isIncreasingNumberList([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(isIncreasingNumberList([11, 22, 33, 44, 55])).toBe(true);
    expect(isIncreasingNumberList([11, 11, 33, 34, 55])).toBe(true);
  });
});
// ___________________________________________________________________________
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// ). Có ít nhất 2 phần tử.
// *. Phần tử sau luôn nhỏ hơn phần tử trước nó.
describe('isDecreasingNumberList(numberList)', () => {
  it('should return false when numberList is not array or empty', () => {
    expect(isDecreasingNumberList([])).toBe(false);
    expect(isDecreasingNumberList({})).toBe(false);
    expect(isDecreasingNumberList(123)).toBe(false);
    expect(isDecreasingNumberList('abc')).toBe(false);
  });
  it('should return false when length of numberList < 2', () => {
    expect(isDecreasingNumberList([8])).toBe(false);
    expect(isDecreasingNumberList([12])).toBe(false);
  });
  it('should return false when numberList is not increasing', () => {
    expect(isDecreasingNumberList([8, 4, 9, 0, 1])).toBe(false);
    expect(isDecreasingNumberList([1, 2, 3, 9, 0, 2])).toBe(false);
  });
  it('should return true when numberList is increasing', () => {
    expect(isDecreasingNumberList([6, 5, 4, 3, 2, 1])).toBe(true);
    expect(isDecreasingNumberList([55, 44, 43, 22, 11])).toBe(true);
    expect(isDecreasingNumberList([9, 7, 6, 6, 4, 2, 0])).toBe(true);
  });
});
