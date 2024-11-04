import React from "react";
import Logo from "../../images/logo/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid z-11">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer-logo">
                <Link>
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer_content">
                <h5>Categories</h5>
                <ul>
                  <li>
                    <Link>Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Kurta sets</Link>
                  </li>
                  <li>
                    <Link>Dresses</Link>
                  </li>
                  <li>
                    <Link>Unstitched Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Handblock Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Handpainted Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Kaftans</Link>
                  </li>
                  <li>
                    <Link>Premium Chanderi Suit-sets</Link>
                  </li>
                  <li>
                    <Link>Premium Chanderi Suit-sets</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer_content">
                <h5>Categories</h5>
                <ul>
                  <li>
                    <Link>Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Kurta sets</Link>
                  </li>
                  <li>
                    <Link>Dresses</Link>
                  </li>
                  <li>
                    <Link>Unstitched Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Handblock Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Handpainted Suit Sets</Link>
                  </li>
                  <li>
                    <Link>Kaftans</Link>
                  </li>
                  <li>
                    <Link>Premium Chanderi Suit-sets</Link>
                  </li>
                  <li>
                    <Link>Premium Chanderi Suit-sets</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 ms-auto">
              <div className="footer_inner">
                <h4>Contact Us</h4>
                <p>
                  Please contact us on email order@aftaneninde.com or call us at
                  +91 000000000 between 10:00 to 18:00 Monday to Saturday.
                </p>
                <span>Cartaneninde is a part of Ethniqclore</span>
                <div className="newsletter">
                  <h5>Newletter</h5>
                  <p>
                    Subscribe to receive updates, access to exclusive deals, and
                    more.
                  </p>
                  <div className="form_box">
                    <input type="text" placeholder="Enter your email address" />
                    <button class="commen_btn mt-5">
                      <span>Buy Now</span>
                    </button>
                  </div>
                  <div className="social_links">
                    <Link>
                      <i class="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-instagram"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-pinterest-p"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-youtube"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
