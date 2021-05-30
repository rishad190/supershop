import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../../../Redux/actions/cartAction";

const SingleProduct = ({pd}) => {
  const dispatch = useDispatch();
  const { imageURL, name, price, _id } = pd;
  let history = useHistory();

  const showItem = (_id) => {
    const url = `/productDetails/${_id}`;
    history.push(url, { detail: pd })
   
  }

  return (
    <div className="col-md-4 mb-4 d-flex justify-content-center ">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <h4 className="text-center">$ {price}</h4>
          <div className="d-flex justify-content-around align-items-center">
            <div 
              onClick={()=> showItem(_id)}
              className="btn btn-primary">
              Details
            </div>
            <button
              onClick={() => dispatch(addToCart(pd))}
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
