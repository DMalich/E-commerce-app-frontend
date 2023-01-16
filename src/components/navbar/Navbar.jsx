import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";
import "./navbar.css";

const Navbar = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);

    const { currentUser } = userState;
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="navbar-row">
                <div className="navbar-col">
                    <a href="/" className="navbar-logo">
                        Pizzeria
                    </a>
                </div>
                <div className="navbar-col">
                    {currentUser ? (
                        <>
                            <a href="#">{currentUser.name}</a>
                            <a href="/orders">Orders</a>
                            <a
                                href="#"
                                onClick={() => {
                                    dispatch(logout());
                                }}
                            >
                                LogOut
                            </a>
                        </>
                    ) : (
                        <a href="/login">Login</a>
                    )}
                    <a href="/cart">
                        Cart{" "}
                        <span className="badge">
                            {cartState.cartItems.length}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
