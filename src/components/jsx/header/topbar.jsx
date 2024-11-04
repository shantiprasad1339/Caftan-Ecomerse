import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <div>
            <div className="top_bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 d-md-flex d-none">
                            <div className="top_bar_inner">
                                <p>COD available! Shop now, pay upon delivery</p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="top_bar_inner_1">
                                <ul>
                                    <li>
                                        <Link title="Order Tracking" to='/track-order' >Order Tracking</Link>
                                    </li>

                                    <li>

                                        <Link title="Order Tracking"  to='/shipping-charges' >Shipping Charges</Link>
                                    </li>
                                    <li>
                                        <select name="" id="">
                                            <option value="">INR</option>
                                            <option value="" >USD</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="topbar_middle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 mx-auto">
                            <div className="topmiddle_inner">
                              
                                    <div className="m-scroll">
                                        <span>* Enjoy free shipping on all orders in India * Buy any 2 products and get 5% off Coupon code: special5 * Buy any 4 or more products and get 10% off Coupon code: special10* Enjoy free shipping on all orders in India * Buy any 2 products and get 5% off Coupon code: special5 *</span>
                                    </div>
                                </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
