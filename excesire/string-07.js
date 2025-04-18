// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.
// fillPath('/products/:productId', { productId: 123 }); // '/products/123'
// fillPath('/categories/:categoryId/products/:productId', {categoryId: 1,productId: 2});
// should return '/categories/1/products/2'
// fillPath('/categories/:categoryId/products/:productId', { productId: 2 });
// should return '/categories/:categoryId/products/2'
// cach 1
export function fillPath(path, params) {
  if (
    path.length === 0 ||
    typeof path !== 'string' ||
    Object.keys(params).length === 0 ||
    typeof params !== 'object'
  )
    return '';
  const arrPath = path.split('/');
  arrPath.forEach((x, i) => {
    if (x.startsWith(':')) {
      const key = x.slice(1);
      if (key in params) arrPath[i] = params[key];
    }
  });
  return arrPath.join('/');
}

export function fillPathV2(path, params) {
  if (
    path.length === 0 ||
    typeof path !== 'string' ||
    Object.keys(params).length === 0 ||
    typeof params !== 'object'
  )
    return '';
  const arrPath = path.split('/');
  return arrPath
    .reduce((result, word) => {
      word.startsWith(':') && word.slice(1) in params
        ? result.push(params[word.slice(1)])
        : result.push(word);
      return result;
    }, [])
    .join('/');
}
console.log(fillPath('/products/:productId', { productId: 123 }));
console.log(fillPath('/categories/:categoryId/products/:productId', { productId: 2 }));

// const str = '/categories/:categoryId/products/:productId'.replace('categoryId', 1);
// console.log(str);
// const obj = { name: 'hai', age: 18 };
// console.log(obj[0]);
