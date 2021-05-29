import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import player from "../../component/fakeData/fakeData.json";

const initalState = {
  cart: [],
  product: player,
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
        cart: state.cart.filter((cart) => cart.id !== action.id),
      };
      return newRemoveCart;

    default:
      return state;
  }
};
export default cartReducers;
