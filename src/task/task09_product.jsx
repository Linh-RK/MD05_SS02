import React from "react";

export default function Task09_product(param) {
  const pro = param.pro;
  const index = param.index;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="product-upper">
          <img src={pro.image} alt="" />
        </div>
        <h2>
          <a href="">{pro.proName}</a>
        </h2>
        <div className="product-carousel-price">
          <ins>${pro.price1}</ins> <del>${pro.price2}</del>
        </div>
        <div className="product-option-shop">
          <a
            className="add_to_cart_button"
            data-quantity={1}
            data-product_sku=""
            data-product_id={70}
            rel="nofollow"
            href="/canvas/shop/?add-to-cart=70"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
