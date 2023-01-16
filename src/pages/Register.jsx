import React, { useState } from "react";
import "./forms.css";
import Navbar from "../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function registerHandler() {
        if (password !== confirmPassword) {
            alert("Passwords should match!");
        } else {
            const users = {
                name,
                email,
                password,
            };

            console.log(users);
            dispatch(register(users));
            navigate("/login");
        }
    }

    return (
        <div className="form-container">
            <Navbar />
            <div className="form-row">
                <div className="form-col">
                    <div className="form">
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            required
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            required
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="form-btn" onClick={registerHandler}>
                            Sign Up
                        </button>
                        <a href="/login" className="form-other-link">
                            To sign In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
