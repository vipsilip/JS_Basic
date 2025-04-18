// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.
// fillPath('/products/:productId', { productId: 123 }); // '/products/123'
// fillPath('/categories/:categoryId/products/:productId', {categoryId: 1,productId: 2});
// should return '/categories/1/products/2'
// fillPath('/categories/:categoryId/products/:productId', { productId: 2 });
// should return '/categories/:categoryId/products/2'
import { fillPath } from './string-07';
describe('fillpath(path,params)', () => {
  it('should return empty string when path is not string or empty or param is not obj or empty obj', () => {
    expect(fillPath('', {})).toBe('');
    expect(fillPath('', { productId: 123 })).toBe('');
    expect(fillPath('/products/:productId', {})).toBe('');
  });
  it('should replace string of params in path', () => {
    expect(fillPath('/products/:productId', { productId: 123 })).toBe('/products/123');
    expect(
      fillPath('/categories/:categoryId/products/:productId', { categoryId: 1, productId: 2 }),
    ).toBe('/categories/1/products/2');
    expect(fillPath('/categories/:categoryId/products/:productId', { productId: 2 })).toBe(
      '/categories/:categoryId/products/2',
    );
  });
});
