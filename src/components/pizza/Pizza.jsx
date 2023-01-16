import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import Preview from "../preview/Preview";
import "./pizza.css";

const Pizza = ({ pizza }) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("small");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    function addToCartHandler() {
        dispatch(addToCart(pizza, quantity, size));
    }

    return (
        <div className="pizza-card" key={pizza._id}>
            <div className="pizza-card-header">
                <img
                    className="pizza-image"
                    src={pizza.image}
                    alt={pizza.name}
                />
                <h3 className="pizza-title" onClick={handleShow}>
                    {pizza.name}
                </h3>
            </div>
            <div className="pizza-card-body">
                <div className="pizza-left">
                    <span className="size">Size</span>
                    <div className="pizza-select">
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            {pizza.sizes.map((size) => (
                                <option value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="pizza-right">
                    <span className="size">Quantity</span>
                    <div className="pizza-select quantity">
                        <select
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        >
                            {[...Array(3).keys()].map((x, i) => (
                                <option value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="pizza-card-footer">
                <div className="pizza-footer-left">
                    <p className="price">
                        <span>Price:</span> $
                        {(pizza.prices[0][size] * quantity).toFixed(2)}
                    </p>
                </div>
                <div className="pizza-footer-right">
                    <button className="btn" onClick={addToCartHandler}>
                        Add
                    </button>
                </div>
            </div>

            {/* preview modal */}
            {show && <Preview handleClose={handleClose} pizza={pizza} />}
        </div>
    );
};

export default Pizza;
