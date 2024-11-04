import React, { useState } from "react";
import { Header } from '../header/header'
import { Link } from 'react-router-dom'

import Product_cart from '../../images/product/product_cart.svg'
import Remove_gif from '../../images/remove_gif.gif'
import Footer from "../footer/footer";


function Cart() {
    const [quantity, setQuantity] = useState(1);
    const [isGifPlaying, setIsGifPlaying] = useState(false);
    const stillImage = "./src/components/images/remove_icon.png";
    const gifImage = "./src/components/images/remove_gif.gif";
    
    const handleClick = () => {
        setIsGifPlaying(true);

        setTimeout(() => {
            setIsGifPlaying(false);
        }, 3000);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <>
            <Header />
            <section className="card_page_cat">
                <div className="page_cat_header">
                    <div className="container-fluid">
                        <div className="page_cat_inner">
                            <Link>Home</Link>  <i class="fa-solid fa-angle-right"></i>

                            <Link className='current'>Your Shopping Cart</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7  ">
                            <div className="cart_area_inner">
                            <h4>Cart Products</h4>

                                <div className="cart_box">
                                    <div className="image">
                                        <img src={Product_cart} alt="" />
                                    </div>
                                    <div className="content">
                                        <h2>
                                            Mustard Yellow Exclusive Silk Unstitched Salwar Kameez -
                                        </h2>
                                        <div class="product_count_box">
                                            <div className="box">
                                                <button onClick={decreaseQuantity} disabled={quantity === 1}>-</button>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    readOnly
                                                />
                                                <button onClick={increaseQuantity}>+</button>
                                            </div>
                                        </div>
                                        <img
                                            src={isGifPlaying ? gifImage : stillImage}
                                            alt="Click to play GIF"
                                            onClick={handleClick}
                                            style={{ cursor: "pointer",  }}
                                        />
                                    </div>
                                </div>
                                <div className="cart_box">
                                    <div className="image">
                                        <img src={Product_cart} alt="" />
                                    </div>
                                    <div className="content">
                                        <h2>
                                            Mustard Yellow Exclusive Silk Unstitched Salwar Kameez -
                                        </h2>
                                        <div class="product_count_box">
                                            <div className="box">
                                                <button onClick={decreaseQuantity} disabled={quantity === 1}>-</button>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    readOnly
                                                />
                                                <button onClick={increaseQuantity}>+</button>
                                            </div>
                                        </div>
                                     
                                        <img
                                            src={isGifPlaying ? gifImage : stillImage}
                                            alt="Click to play GIF"
                                            onClick={handleClick}
                                            style={{ cursor: "pointer",  }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="coupon_details">
                                <h4>Coupon</h4>
                                <div className="code_box">
                                    <input type="text" placeholder="Please Enter Code" />
                                    <button>
                                    Apply
                                    </button>
                                </div>
                                <div className="details_box">
                                    <h5>Price Details</h5>
                                    <div className="d_box_inner">
                                           <ul>
                                            <li>
                                            <span>Bag Total</span>
                                            <span>500 INR</span>
                                            </li>
                                            <li>
                                            <span>Cart Weight</span>
                                            <span>500.00 gram (With Packing)</span>
                                            </li>
                                            <li>
                                            <span>Delivery Charage</span>
                                            <span>90 INR</span>
                                            </li>
                                            <li>
                                            <span>Order Total</span>
                                            <span>590 INR</span>
                                            </li>
                                           </ul>
                                    </div>
                                    <div className="select_contry">
                                    <select name="" id="">
                                        <option value="">Shipping Country  ==  </option>
                                        <option value="">INDIA</option>
                                        <option value="">UK</option>
                                        <option value="">US</option>
                                        <option value="">PAKISTAN</option>
                                    </select>
                                </div>
                                <button>Place Order</button>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Footer />
        </>
    )
}

export default Cart
