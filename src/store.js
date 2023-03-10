import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import getAllPizzasReducer from "./reducers/pizzaReducer.js";
import cartReducer from "./reducers/cartReducer.js";
import registerUserReducer from "./reducers/userReducer.js";
import loginUserReducer from "./reducers/userReducer.js";
import placeOrderReducer from "./reducers/orderReducer.js";

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
});

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

const initialState = {
    cartReducer: {
        cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
    },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
    finalReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
