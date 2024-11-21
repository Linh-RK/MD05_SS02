import React from "react";
import CartProduct from "./CartProduct";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      productName: " product 1",
      price: 300,
      stock: 30,
    },
    {
      id: 2,
      productName: " product 2",
      price: 400,
      stock: 36,
    },
    {
      id: 3,
      productName: " product 3",
      price: 500,
      stock: 32,
    },
  ];
  return (
    <>
      <h3 style={{ color: "red", backgroundColor: "goldenrod" }}>
        3.List Products
      </h3>
      <ul>
        {products.map((pro, index) => (
          <React.Fragment key={pro.id}>
            <CartProduct proProps={pro} indexProps={index} />;
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
