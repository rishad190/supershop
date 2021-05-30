import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addToCart } from "../../../../Redux/actions/cartAction";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import "./ProductDetail.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [itemDetails, setItemDetails] = useState({});
  useEffect(() => {
    setItemDetails(location.state?.detail);
  }, [location]);

  const { name, details, price, quantity, imageURL } = itemDetails || {};
  return (
    <div>
      <Navbar />
      <div className="container product-details">
        <div className="row mt-5">
          <div className="col-md-05">
            <img className=" w-75 " src={imageURL} alt="" />
          </div>
          <div className="col-md-07 mt-5">
            <h2>{name}</h2>
            <p>Brand: n/a</p>
            <h4>Per Kg (final cost based on weight)</h4>
            <h1>{price} taka</h1>
            <div
              onClick={() => dispatch(addToCart(itemDetails))}
              className="btn btn-success"
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
