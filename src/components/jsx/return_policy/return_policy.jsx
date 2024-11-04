import React from 'react'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import { Link } from 'react-router-dom'

function Return_policy() {
    return (
        <>
            <Header />
            <div class="page_cat_header">
                <div class="container-fluid">
                    <div class="page_cat_inner">
                        <a href="/product">Home</a>
                        <i class="fa-solid fa-angle-right"></i>
                        <Link class="current" href=" ">Return-policy</Link>
                    </div>
                </div>
            </div>
            <section className="how-order-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 mb-xl-0 mb-4">
                            <div className="order_naves">
                                <ul>
                                    <li>
                                        <Link to="/how-to-order">How-to-order</Link>
                                    </li>
                                    <li>
                                        <Link to="/payment-options">Payment Options</Link>
                                    </li>
                                    <li >
                                        <Link to="/faq">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/refund-policy">Refund Policy</Link>
                                    </li>
                                    <li className="active">
                                        <Link to="/return-policy">Return Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Terms and Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="refun_area">
                                <h1>Return And Exchange Policy - Caftaneninde

                                </h1>
                                <p>
                                    To make our customers fall in love with the shopping experience with us just like they have fallen for our products, we at Caftaneninde believe in creating a user friendly, hassle free, and great online store for them. We send the best quality products, diligently designed as per specific customer needs, and sold at unbeatably affordable prices. However, due to any unavoidable circumstances, if you wish to get your products exchanged, you must follow the following instructions. Please carefully go through this extremely convenient exchange policy designed for your benefit.
                                </p>
                                <div class="common_static_page">

                                    <h2>FOR EXCHANGE,</h2>
                                    <ul class="list1">
                                        <li>
                                            <span>Step 1:</span> To request an exchange, get in touch with our team by writing an email to order@theCaftaneninde.com within 14 days of delivery.
                                        </li>
                                        <li>
                                            <span>Step 2:</span> After receiving your request, our team will verify it and send a confirmation mail with an address to which you must self- ship the products at your cost.
                                        </li>
                                        <li>
                                            <span>Step 3:</span> Our team will perform a quality check on the exchange item(s), and post that, we will deliver the new item(s) of your choice to your doorstep. Please note that the delivery charges in case of exchange are required to be borne by the customers. We sometimes also provide credit points on exchanges which can be used for future shopping.
                                        </li>
                                    </ul>
                                    <p>You can exchange the items for a different size, color, or an alternative product. We will send the new product as per the availability of stock. You will have to make a payment for the difference in price, if any.</p>
                                    <h2>FOR RETURNS,</h2>
                                    <ul class="list1">
                                        <li>
                                            <span>Step 1:</span> To request a return, get in touch with our team by writing an email to order@theCaftaneninde.com within 14 days of delivery.
                                        </li>
                                        <li>
                                            <span>Step 2:</span> After receiving your request, our team will verify it and send a confirmation mail with an address to which you must self - ship the products at your cost.
                                        </li>
                                        <li>
                                            <span>Step 3:</span> Our team will perform a quality check on the returned item(s), and post that, we will process the payment within 7 working days from the date of receipt. We will send back the money in the payment accounts which were formerly used for the initial purchase. To reverse the payment for all Cash On Delivery (COD) orders, we will need bank account details. Hence we request you to furnish these details diligently, as and when asked.
                                        </li>
                                    </ul>
                                    <h2>Terms and Conditions for Exchange and Return</h2>
                                    <ul class="list2">
                                        <li>We have a "No questions asked" policy and we allow an exchange and return of item(s) purchased on our website. However, we may not allow returning and exchanging a few products as per our discretion considering the health and hygiene factors.</li>
                                        <li>If you wish to return/ exchange products, please keep tags intact, and product should be new and unused. </li>
                                        <li>We will not accept the Items that are damaged, spoiled or altered.</li>
                                        <li>Until the time the product reaches us, it is your responsibility. We request you to pack the products properly in order to avoid any damage and tampering while in transit.</li>
                                        <li>Before completing an exchange or return request, we properly examine and inspect the exchanged or returned products. We try our best to accept all the items returned to us and further process the exchange or refund procedure. </li>
                                        <li>We may have to send the product back to you in the unlikely event when an item is returned to us is in unsuitable condition.</li>
                                    </ul>
                                    <p>For further queries regarding exchange and return policy, please contact us on order@theCaftaneninde.com.</p>
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

export default Return_policy
