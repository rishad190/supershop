import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Shared/Navbar/Navbar";
import CartBox from "../CartBox/CartBox";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";

const CartHome = () => {
  const product = useSelector((state) => {
    return state.cart;
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-md-8">
            {product.map((pd) => (
              <CartBox pd={pd} key={pd.id}></CartBox>
            ))}
          </div>
          <div className="col-md-4">
            <CartPriceDetails product={product}></CartPriceDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHome;
