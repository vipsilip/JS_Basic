// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
// chuỗi address hoàn chỉnh
// Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
// Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.
// export function getDisplayedAddress(address) {
//   if (Object.keys(address).length === 0 || typeof address !== 'object') return '';
//   let result = '';
//   const keyList = Object.keys(address);
//   for (let i = 0; i < keyList.length; i++) {
//     const key = keyList[i];
//     if (key === 'number') {
//       result += address[key] + ' ';
//       continue;
//     }
//     if (i === keyList.length - 1) {
//       result += address[key];
//       continue;
//     }
//     result += address[key] + ', ';
//   }
//   return result;
// }
// export function getDisplayedAddress(address) {
//   if (Object.keys(address).length === 0 || typeof address !== 'object') return '';
//   const result = [];
//   if (address.number && address.street) {
//     result.push(`${address.number} ${address.street}`);
//   } else if (address.street) {
//     result.push(address.street);
//   } else result.push(address.number);
//   address.ward ? result.push(address.ward) : '';
//   address.district ? result.push(address.district) : '';
//   address.city ? result.push(address.city) : '';
//   return result.join(', ');
// }
// export function getDisplayedAddress(address) {
//   if (Object.keys(address).length === 0 || typeof address !== 'object') return '';
//   const keyList = Object.keys(address); //['district','ward','street']
//   const info = ['number', 'street', 'ward', 'district', 'city'];
//   const result = info.reduce((string, key) => {
//     if (address[key])
//       key === 'number' ? (string += `${address[key]} `) : (string += `${address[key]}, `);
//     return string;
//   }, '');
//   return result.slice(0, -2);
// }
export function getDisplayedAddress(address) {
  if (Object.keys(address).length === 0 || typeof address !== 'object') return '';
  const info = ['number', 'street', 'ward', 'district', 'city'];
  let result = '';
  info.forEach((key) => {
    if (address[key])
      key === 'number' ? (result += address[key] + ' ') : (result += address[key] + ', ');
  });
  return result.slice(0, -2);
}
console.log(
  getDisplayedAddress({
    district: 'Binh Thanh District',
    ward: 'Ward 11',
    street: 'Nguyen Cong Tru',
  }),
);
console.log(
  getDisplayedAddress({
    number: 123,
    street: 'Nguyen Cong Tru',
    ward: 'Ward 11',
    district: 'Binh Thanh District',
    city: 'HCMC',
  }),
);
