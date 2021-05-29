import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT,
} from "../actions/cartAction";
import player from "../../component/fakeData/fakeData.json";

const initalState = {
  cart: [],
  product: [],
};
const cartReducers = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = {
        ...state,
        cart: [...state.cart, action.id],
      };
      return newCart;
    case REMOVE_FROM_CART:
      const newRemoveCart = {
        ...state,
        cart: state.cart.filter((pd) => pd.id !== action.id.id),
      };
      return newRemoveCart;

    case ADD_PRODUCT:
      const product = {
        ...state,
        product: action.id,
      };
      return product;
    default:
      return state;
  }
};
export default cartReducers;
