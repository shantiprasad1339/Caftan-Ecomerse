import React from 'react'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import { Link } from 'react-router-dom'

function Refund_policy() {
  return (
    <>
      <Header />
      <div class="page_cat_header">
        <div class="container-fluid">
          <div class="page_cat_inner">
            <a href="/product">Home</a>
            <i class="fa-solid fa-angle-right"></i>
            <Link class="current" href=" ">Refund-policy</Link>
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
                  <li className="active">
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
              <div className="refun_area">
                <h1>Refund Policy - Caftaneninde
                </h1>
                <p>
                  We, at Caftaneninde try our best to serve you with the best. A lot of care has been taken on our part in order to deliver a product of your taste and choice. However, for the instances where you might not like the product and might not want to keep the order you have received or cancel the already placed order, we offer a Refund. Kindly read our Refund and Return Policy carefully-

                </p>
                <ul class="list1">
                  <li>
                    <span>We refund for your orders on the following conditions-</span>
                    <ul class="list2">
                      <li>You cancelled the order before the dispatch from our end.</li>
                      <li>If you want a refund after receiving the product, you must first retun the product in its original and unused condition. In this case, the rights to decide whether or not to refund for the order will be reserved by us.</li>
                    </ul>
                  </li>
                  <li>
                    <span>How can I request for a refund?</span> If you wish to process return and refund, you may drop an email (order@Caftaneninde.com) to us. After receiving the email, we will contact you to inform about the best possible solutions.
                  </li>
                  <li>
                    <span>How can I track the status of refund?</span> After receiving the product, the process of quality checking and verifying the causes of return of the product returned will be carried on by our team. Once the verification is done, a confirmation call or email will be sent to you informing about the status of refund. After this process, the refund amount will be sent to your account within seven working days. If you do not receive your payment after seven days, in such case, you may contact us or track the status on My Account section of our website.
                  </li>
                  <li>
                    <span>How long do you take to refund?</span> The entire process may take up to seven days as a detailed verification, confirmation, and refund procedure is required to be done.
                  </li>
                  <li>
                    <span>What if I do not get my amount back though according to the Support Team, my amount has been refunded?</span> The refund confirmation mail implies that we have processed your refund from our end. Sometimes, it might be the bank taking longer time to process the transaction. In such case, contacting your bank to ask for the status is the most viable option.
                  </li>
                  <li>
                    <span>How and where will I get my refunds credited?</span> Payment mode, that you have selected while purchasing, is the only deciding factor and the mode of refund entirely depends upon it. Net Banking, Credit Card, Debit Card, Cash Card, Mobile Banking or Wallet are certain modes of payments that we accept. We will credit the amount in the same account from which the payment was received that is the one used by you to make the payment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Refund_policy
