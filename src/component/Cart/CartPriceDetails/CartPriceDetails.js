import React from "react";

const CartPriceDetails = (props) => {
  const productPrice = props.product;
  let total = 0;
  for (let i = 0; i < productPrice.length; i++) {
    const price = parseInt(productPrice[i].price);
    total = total + price;
  }
  return (
    <div>
      <h2>Order Price</h2>
      <h3>Total ${total}</h3>
      <button className="btn btn-success">Shipment</button>
    </div>
  );
};

export default CartPriceDetails;
