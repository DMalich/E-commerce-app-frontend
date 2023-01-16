import React from "react";
import "./preview.css";

function Preview({ handleClose, pizza }) {
    return (
        <div className="preview-container">
            <div className="preview-row">
                <div className="preview-col">
                    <h3 className="preview-title">{pizza.name}</h3>
                    <span className="preview-category">{pizza.category}</span>
                </div>
                <div className="preview-col">
                    <img src={pizza.image} alt={pizza.name} />
                </div>
                <div className="preview-col">
                    <p>{pizza.desc}</p>
                </div>
            </div>
            <button className='btn-close' onClick={handleClose}>Close</button>
        </div>
    );
}

export default Preview;
