import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Navbar from "../components/navbar/Navbar";
import "./order.css";

const Order = () => {
    const dispatch = useDispatch();

    const orderstate = useSelector((state) => state.getUserOrdersReducer);
    const { orders, err, loading } = orderstate;

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className="order-container">
                <div className="order-row">
                    <div className="order-col">
                        <h2 className="order-title">Your Orders</h2>
                    </div>
                </div>
                <div className="order-row">
                    <div className="order-col">
                        <div className="order-cards">
                            {loading ? (
                                <h2 className="loading">Loading...</h2>
                            ) : err ? (
                                <h2 className="error">Error...</h2>
                            ) : (
                                orders.map((order) => (
                                    <div className="order-card">
                                        <div className="order-header">
                                            {order.orderItems.map((item) => (
                                                <>
                                                    <h2 className="order-items">
                                                        {item.name} *{" "}
                                                        {item.quantity} = $
                                                        {item.price.toFixed(2)}
                                                    </h2>
                                                    <span className="order-size">
                                                        {item.size}
                                                    </span>
                                                </>
                                            ))}
                                        </div>
                                        <div className="order-body">
                                            <p className="order-address">
                                                Address
                                            </p>
                                            <span className="order-address-span">
                                                {order.shippingAddress}
                                            </span>
                                        </div>
                                        <div className="order-footer">
                                            <p>Order Amount</p>
                                            <span className="order-amount">
                                                ${order.orderAmount}
                                            </span>
                                            <p className="order-date-title">
                                                Date
                                            </p>
                                            <span className="order-date">
                                                {order.createdAt.substring(
                                                    0,
                                                    10
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
