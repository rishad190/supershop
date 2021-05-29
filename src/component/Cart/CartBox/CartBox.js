import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../Redux/actions/cartAction";

const CartBox = (props) => {
  const { image, name, country, salary, id } = props.pd;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">${salary}</p>
              <p className="card-text">
                <button
                  onClick={() => dispatch(removeFromCart(props.pd))}
                  className="btn btn-primary"
                >
                  remove
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
