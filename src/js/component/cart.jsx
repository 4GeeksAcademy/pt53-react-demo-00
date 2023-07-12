import React from "react";

export const Cart = ({ lineItems = [] }) => {
  const style = {
    width: "18rem",
  };

  return (
    <div className="card mx-auto my-3" style={style}>
      <div className="card-body">
        <ul className="mt-5 list-group">
          {lineItems.map((lineItem, idx) => (
            <li className="list-group-item" key={idx}>
              {lineItem.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
