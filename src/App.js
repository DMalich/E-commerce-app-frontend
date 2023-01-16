import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/checkoutdetails" element={<Checkout />} />
                    <Route path="/orders" element={<Order />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
