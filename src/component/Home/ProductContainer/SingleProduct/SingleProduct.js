import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../Redux/actions/cartAction";

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const { image, country, salary, id } = props.pd;

  return (
    <div className="col-md-4 mb-4 d-flex justify-content-center ">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{country}</h5>
          <h4 className="text-center">$ {salary}</h4>
          <div className="d-flex justify-content-around align-items-center">
            <Link to={`/productDetails/${id}`} className="btn btn-primary">
              Details
            </Link>
            <button
              onClick={() => dispatch(addToCart(props.pd))}
              className="btn btn-success"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
