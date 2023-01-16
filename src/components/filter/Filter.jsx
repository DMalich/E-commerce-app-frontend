import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPizzas } from "../../actions/pizzaActions.js";
import "./filter.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Filter = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    return (
        <div className="filter-row">
            <div className="filter-col">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="filter-input"
                    placeholder="Search..."
                />
            </div>
            <div className="filter-col">
                <div className="filter-select">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Pizzas</option>
                        {/* <option value="italian">Italian Pizzas</option>
                        <option value="american">American Pizzas</option> */}
                        <option value="category 1">Category 1</option>
                        <option value="category 2">Category 2</option>
                    </select>
                </div>
            </div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="secondary"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    Categories
                </Dropdown.Toggle>
                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item value='all'>
                        All pizzas
                    </Dropdown.Item>
                    <Dropdown.Item value='category 1'>
                        Category 1
                    </Dropdown.Item>
                    <Dropdown.Item value='category 2'>
                        Category 2
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="filter-col">
                <button
                    className="filter-btn"
                    onClick={() => {
                        dispatch(filterPizzas(search, category));
                    }}
                >
                    Filter
                </button>
            </div>
        </div>
    );
};

export default Filter;
