import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pizza from "../pizza/Pizza";
// import pizzas from "../../data/data";
import { getAllPizzas } from "../../actions/pizzaActions";
// import { getAllPizzasReducer } from "../../reducers/pizzaReducer";
import "./pizzas.css";

const Pizzas = () => {
    const dispatch = useDispatch();
    const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
    const { pizzas, loading, error } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    return (
        <div className="pizzas-container">
            <div className="pizzas-row">
                <div className="pizzas-col">
                    <div className="pizzas-cards">
                        {loading ? (<h2 className="loading">Loading...</h2>) : error
                            ? (<h2 className="error">Error...</h2>)
                            : (pizzas?.map((pizza) => {
                                return <Pizza pizza={pizza} />;
                            })
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizzas;
