
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import '../css/style.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import React, { useState, useEffect } from 'react';
import Login from "../jsx/login/login.jsx";
import Home from "../jsx/home/home.jsx";
import Product from "../jsx/product/product.jsx";
import { Product_details } from "../jsx/product/product_details.jsx";
import Cart from "../jsx/cart/cart.jsx";
import Register from "../jsx/register/register.jsx";
import Contact_us from "../jsx/contact_us/contact_us.jsx";
import Shipping_charges from "../jsx/shipping-charges/shipping_charges.jsx";
import Track_order from "../jsx/track-order/track_order.jsx";
import How_to_order from "../jsx/how_to_order/how_to_order.jsx";
import Payment_options from "../jsx/payment_options.jsx/payment_options.jsx";
import Faq from "../jsx/faq/faq.jsx";
import Refund_policy from "../jsx/refund-policy/refund_policy.jsx";
import Return_policy from "../jsx/return_policy/return_policy.jsx";
import Privacy_policy from "../jsx/privacy_policy/privacy_policy.jsx";





function SetRoute() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product-details" element={<Product_details />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact-us" element={<Contact_us />}></Route>
          <Route path="/shipping-charges" element={<Shipping_charges />}></Route>
          <Route path="/track-order" element={<Track_order />}></Route>
          <Route path="/how-to-order" element={<How_to_order />}></Route>
          <Route path="/payment-options" element={<Payment_options />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/refund-policy" element={<Refund_policy />}></Route>
          <Route path="/return-policy" element={<Return_policy />}></Route>
          <Route path="/privacy-policy" element={<Privacy_policy />}></Route>
          
        </Routes>
        {isVisible && (
          <span className="scroll_up" onClick={scrollToTop}><i class="fa-solid fa-arrow-up"></i></span>
        )}
      </Router>

    </>

  );
};

export default SetRoute;




