import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductAdd } from "../../../Redux/actions/cartAction";
import SingleProduct from "./SingleProduct/SingleProduct";

const ProductContainer = () => {
  const product = useSelector((state) => {
    return state.product;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://pure-bayou-34237.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        dispatch(allProductAdd(data));
      });
  }, [dispatch]);
  console.log("product", product);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column mt-3">
        <h6 className="text-secondary">All Products</h6>
        <h3 style={{ fontWeight: "900" }}>Collect your today's need</h3>
        <h3 style={{ fontWeight: "900" }}>available today</h3>
      </div>
      <div className="row container m-auto pt-4">
        {product.map((pd) => (
          <SingleProduct pd={pd} key={pd._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
