import React from "react";
import { Header } from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <>
      <Header />
      <div class="page_cat_header">
        <div class="container-fluid">
          <div class="page_cat_inner">
            <a href="/product">Home</a>
            <i class="fa-solid fa-angle-right"></i>
            <Link class="current" href=" ">
              Faq
            </Link>
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
                  <li className="active">
                    <Link to="/faq">FAQ</Link>
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
              <div className="faq_area">
                <h1>FAQ - Frequently Asked Questions</h1>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is Caftaneninde
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div className="ac_box">
                          <p>
                            Blockart is an online shopping portal offering a
                            wide range of products comprising of anything and
                            everything related to the traditional block printing
                            of Rajasthan. The portal is best known for selling
                            exclusive block printed cloth collection. Ethnic
                            sarees in cotton, silk, and Chanderi; Suits, Dress
                            Materialand other products are delivered across the
                            world through this portal at unbeatable prices. Our
                            website pioneer in promptly delivering theex clusive
                            Blockart products at the mentioned address, anywhere
                            in the world.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Do you accept orders through phone or fax?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div className="ac_box">
                          <p>
                            For the time being, we don"t accept orders through
                            this mode considering the safety and security
                            matters and to ensure quality services to all our
                            patrons. We only accept the orders placed through
                            our website online. If in future, we enable this
                            service, we will let you know.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Will the products delivered be the same as shown on
                        website?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div className="ac_box">
                          <p>
                            We deliver the exact products as shown in the
                            picture. There are no or minimum chances of
                            receiving any wrong product. However, the colour and
                            the size of the product may vary due to the lighting
                            and photographic techniques. But we try our level
                            best to deliver you what you have selected. Still,
                            in case of unavailability of the product selected by
                            you, we reserve the rights to deliver a similar or
                            alternative product.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        From where you purchase the items?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div className="ac_box">
                          <p>
                            We have our own manufacturing unit where we stitch,
                            block print, and make the products shown on the
                            website. The raw material is purchased from trusted
                            sources to ensure that no compromise on quality is
                            done. To make sure that all products are received
                            with utmost quality, in-depth scanning of the
                            product is done after receiving the material.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
