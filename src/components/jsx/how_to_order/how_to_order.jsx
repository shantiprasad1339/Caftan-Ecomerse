import React from 'react'
import { Header } from '../header/header'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'

function How_to_order() {
    return (

        <>
            <Header />
            <div class="page_cat_header">
                <div class="container-fluid">
                    <div class="page_cat_inner">
                        <a href="/product">Home</a>
                        <i class="fa-solid fa-angle-right"></i> 
                        <Link class="current" href=" ">How-to-order</Link>
                    </div>
                </div>
            </div>
            <section className="how-order-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 mb-xl-0 mb-4">
                            <div className="order_naves">
                                <ul>
                                    <li className='active'>
                                        <Link to='/how-to-order'>How-to-order</Link>
                                    </li>
                                    <li>
                                        <Link to='/payment-options'>Payment Options</Link>
                                    </li>
                                    <li>
                                    <Link to='/faq'>FAQ</Link>
                                    </li>
                                    <li>
                                    <Link to="/refund-policy">Refund Policy</Link>
                                    </li>
                                    <li>
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
                            <div className="order-content-box">
                                <h1>How To Order - Caftaneninde
                                </h1>

                                <div class="common_static_page">
                                    <p>To place an order, you must consider the following - </p>
                                    <p>Browse through our online store for the huge collection</p>
                                    <p>Our main navigation menu is your core guide to browsing the online store. The menu has well-defined product categories and you can browse through each of them as per your requirement.</p>
                                    <p>Click on the title of that category to reach the landing page for each category. For example, to reach "Ethnic Sarees", hover the cursor on "Women" in the main menu and then click on "Ethnic sarees". You can click on the sub categories once you reach a landing page. This will enable you to reach a listing of products present under that category.</p>
                                    <p>Another method for the same is to hovering your cursor over a category name in the main navigation menu. When the dropdown menu appears, click on the products you want to explore.</p>
                                    <p>If you wish to sort the products on a certain basis, you can do so by sorting each sub category of products on price, discount, name, popularity, and colour, style grounds. To get more product details, colour swatches and closer images, you may click on that item once you see an individual item in this menu.</p>
                                    <p>There is trail, or breadcrumb, on the top of each product page which shows where you have been. You can click on this trail to return to a previous page or subcategory, and it will bring you back. To move to a different product category, you can also go to the top Navigation Bar.</p>
                                    <h2>Setting up an Account</h2>
                                    <p>If you create your own account on Caftaneninde, you can enjoy an array of value added services. However, its not mandatory for you to register online and establish an account in order to add items to your shopping cart and make a purchase. You can shop as a guest on our website.</p>
                                    <ul class="list2">
                                        <li>Go to My Accountto set up an account.</li>
                                        <li>Fill in all the relevant information including your contact information.</li>
                                        <li>If you continue shopping as a Guest Shopper, you will have the option of signing up for a new account during checkout.</li>
                                    </ul>
                                    <h2>Adding Items to your Shopping Cart</h2>
                                    <p>After carefully checking the colour, size (if these attributes are applicable) and quantity of a product, when you are ready to add an item to your shopping cart, click on the Add to Cart button which is available on the screen next to the product.</p>
                                    <p>A new page will appear informing you that the item is in the cart and all the relevant details relating to the product and the payment. As per your requirements, you may choose to continue shopping or checkout. During the checkout process, If you change your mind and want to continue browsing you may do so at any moment.</p>
                                    <p>You can add as many items as you want to your shopping cart until you are ready to Checkout.</p>
                                    <h2>How to review and change the items in the Shopping Cart</h2>
                                    <ul class="list2">
                                        <li>Reviewing/Changing items in your cart is easy and you can do so at any time.</li>
                                        <li>Simply click on the cross to delete an item.</li>
                                        <li>Simply change the quantity by clicking on + or – button to update the quantity.</li>
                                        <li>Each time you change the quantity, your order value will be recalculated automatically.</li>
                                    </ul>
                                    <p>You can start the checking out process once you are satisfied with your order. You can do so by clicking on "Proceed to Pay" on the Shopping Cart page. This takes you to the Checkout page.</p>
                                    <h2>Checking Out</h2>
                                    <ul class="list2">
                                        <li>You can choose to checkout either as a guest, or as a registered customer on the Checkout Page. Click on the "Already registered? Click here to login. " link at the top of the page to checkout as a registered customer. If you have a Caftaneninde account, login to it, or create a new account in the pop window that appears.</li>
                                        <li>If you checkout as a registered customer, choose from the Billing Address and Shipping Address already registered. You will need to enter this information yourself if you choose to checkout as a guest.</li>
                                        <li>Click on the "continue" button to confirm your order once you have closely reviewed and evaluated all details relating to the order.</li>
                                        <li>You will be redirected to our secured payment gateway. Choose your bank for net banking transactions or enter your credit or debit card information, and click "Submit".</li>
                                        <li>In order to verify your online password, you might be directed to another site depending on the type of card you own. Otherwise, you're done! Congratulations and thank you for shopping with Caftaneninde.</li>
                                        <li>Your payment is processed in real time and with in a few seconds we will send a confirmation email to you.</li>
                                        <li>Once the shipping of the order is, our team will send an email to you with the name of the courier, and the tracking number. If you wish to see where your shipment is, you can visit the courier's website, and enter the tracking number.</li>
                                        <li>SMS and email notification will be sent to you at different stages of your order to keep you informed about the status.</li>
                                    </ul>
                                    <p>For us, our patrons are the only priority and to make their shopping experience as intuitive and as convenient as possible, we try to do every possible thing from our end at Caftaneninde. Your comments and feedback are most welcomed and you can reach out to us at (order@Caftaneninde.com) and we will always be there for your assistance and to hear from you.</p>
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

export default How_to_order
