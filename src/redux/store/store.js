import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/reducers";
import { initialStateSize } from "../reducers/reducer-sizes";
import { initialStateProduct } from "../reducers/reducer-product";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  getProduct: initialStateProduct,
  getSizeProduct: initialStateSize,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

export default store;
