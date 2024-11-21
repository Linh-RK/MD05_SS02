//  tham số mặc định truyền vào là prop
export default function CartProduct(param) {
  const pro = param.proProps;
  return (
    <li key={pro.id}>
      <div>{pro.id}</div>
      <div>{pro.productName}</div>
      <div>{pro.price}</div>
      <div>{pro.stock}</div>
    </li>
  );
}
