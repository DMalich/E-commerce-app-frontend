import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, deleteItem } from "../actions/cartActions";
import Navbar from "../components/navbar/Navbar";
import {
    faMinusCircle,
    faMoneyBill,
    faPlusCircle,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";

const Cart = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;

    const navigate = useNavigate;
    const dispatch = useDispatch();

    var totalPrice = cartItems.reduce((x, item) => x + item.price, 0);
    
    function checkoutHandler() {
        if (totalPrice > 0) {
            navigate("/checkoutdetails");
        }
    }

    return (
        <div className="cart-container">
            <div className="cart-row">
                <Navbar />
            </div>
            <div className="cart-row">
                <h2 className="cart-title">Your cart</h2>
            </div>
            <div className="cart-row">
                <div className="cart-col">
                    {cartItems.map((item) => {
                        <div className="cart-card">
                            <div className="cart-header">
                                <h2 className="cart-subTitle">{item.name}</h2>
                                <span className="cart-size">{item.size}</span>
                            </div>
                            <div className="cart-body">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-footer">
                                <div className="cart-footer-top">
                                    <p className="cart-price">
                                        Price: {item.quantity} *{" "}
                                        {item.prices[0][item.size].toFixed(2)} =
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>
                                <div className="cart-footer-bottom">
                                    <div className="cart-footer-bottom-left">
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            onClick={() => {
                                                dispatch(deleteItem(item));
                                            }}
                                        />
                                    </div>
                                    <div className="cart-footer-bottom-right">
                                        <p>
                                            Quantity:
                                            <FontAwesomeIcon
                                                icon={faPlusCircle}
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(
                                                            item,
                                                            item.quantity + 1,
                                                            item.size
                                                        )
                                                    );
                                                }}
                                            />
                                            <span className="quantity">
                                                {item.quantity}
                                            </span>
                                            <FontAwesomeIcon
                                                icon={faMinusCircle}
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(
                                                            item,
                                                            item.quantity - 1,
                                                            item.size
                                                        )
                                                    );
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    })}
                </div>
                <div className="cart-col">
                    <div className="cartTotal">
                        <h2 className="totalprice">
                            Total Price: ${totalPrice.toFixed(2)}
                        </h2>
                        <button onClick={checkoutHandler}>
                            <FontAwesomeIcon icon={faMoneyBill} /> Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
