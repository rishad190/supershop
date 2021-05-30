// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// export const ADD_PRODUCT = "ADD_PRODUCT";

export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    id,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload,
  };
};

export const allProductAdd = (id) => {
  return {
    type: "ADD_PRODUCT",
    id,
  };
};
