import React from "react";

import "../../styles/product.css";

export const Product = ({ product = {}, callback = () => null }) => {
  const style = {
    width: "18rem",
  };
  return (
    <div className="card mx-auto my-3" style={style}>
      {product.image_url ? (
        <img src={product.image_url} className="card-img-top" alt="..." />
      ) : (
        ""
      )}
      <div className="card-body">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">{product.category}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {product.subcategory}
            </li>
          </ol>
        </nav>
        <h2>{product.name}</h2>
        <button onClick={callback} className="btn btn-primary">
          <s className="price">${product.price}</s> ${product.sale_price}
        </button>
      </div>
    </div>
  );
};
