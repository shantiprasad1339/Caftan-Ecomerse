import React, { useState } from "react";
import { Header } from '../header/header'
import { Page_cat } from './product_area'
import Product_n_1 from '../../images/product/product_n_1.png'
import Cat_1 from '../../images/cat/cat_1.svg'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Review_box from "../review_box/review_box";
import { Common_d_content, Product_coll_are } from "../home/home_area";
import Footer from '../footer/footer' 
function Product_details() {
    return (
        <>
            <Header />
            <Page_cat />
            <section className="product_area">
                <div className="product_filter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-sm-4 d-sm-block d-none">
                                <div className="row_changer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-8">
                                <div className="filtters_box">
                                    <div className="filtters_box_inner">
                                        <select name="" id="">
                                            <option value="">--Select Price--</option>
                                            <option value="1">Below to 1000</option>
                                            <option value="2">1001-2000</option>
                                            <option value="3">2001-3000</option>
                                            <option value="4">3001-5000</option>
                                            <option value="5">Above 5000</option>
                                        </select>
                                        <span><i class="fa-solid fa-filter"></i></span>
                                    </div>
                                    <div className="filtters_box_inner">
                                        <select name="" id="">
                                            <option selected="selected" value="0">--Select Order By--</option>
                                            <option value="1">Low to high</option>
                                            <option value="2">High to low</option>
                                        </select>
                                        <span><i class="fa-solid fa-filter"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
            <Product_details_area />

        </>
    )
}

export { Product_details }




function Product_details_area() {
    const [quantity, setQuantity] = useState(0);

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
            <section className="product_d_co_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="product_d_co_inner">
                                <div className="image">
                                    <img src={Product_n_1} alt="" />
                                </div>
                                <div className="pro_c_box">
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={20}
                                    // centeredSlides={true}
                                    autoplay={{
                                        delay: 500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        315: {
                                            slidesPerView: 3,
                                            spaceBetween:20,

                                        },
                                        450: {
                                            slidesPerView: 4,
                                            spaceBetween:20,

                                        },
                                        640: {
                                            slidesPerView: 6,
                                            spaceBetween:20,
                                        },
                                        992: {
                                            slidesPerView: 6,
                                        },
                                        
                                        1199: {
                                            slidesPerView: 4,
                                        },
                                        1424: {
                                            slidesPerView: 4,
                                        },
                                    }}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                   
                                        <SwiperSlide>
                                        <Link >
                                        <div className="cat_box">
                                            <div className="image">
                                                <img src={Cat_1} alt="" />

                                            </div>
                                        </div>
                                    </Link>
                                           
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <Link >
                                        <div className="cat_box">
                                            <div className="image">
                                                <img src={Cat_1} alt="" />

                                            </div>
                                        </div>
                                    </Link>
                                           
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <Link >
                                        <div className="cat_box">
                                            <div className="image">
                                                <img src={Cat_1} alt="" />

                                            </div>
                                        </div>
                                    </Link>
                                           
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <Link >
                                        <div className="cat_box">
                                            <div className="image">
                                                <img src={Cat_1} alt="" />

                                            </div>
                                        </div>
                                    </Link>
                                           
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <Link >
                                        <div className="cat_box">
                                            <div className="image">
                                                <img src={Cat_1} alt="" />

                                            </div>
                                        </div>
                                    </Link>
                                           
                                        </SwiperSlide>



                                </Swiper>
                                   
                                    

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="product_d_co_inner_1">
                                <h2>Premium Handmade Cotton Suit Set with Exquisite Block Print</h2>
                                <div className="product_details_box">
                                    <span>ITEM CODE: BA202401704026</span>
                                    <span>IN STOCK</span>
                                    <Link>Add Your Review</Link>

                                </div>
                                <div className="product_details_box_2">
                                    <h5 className='dis_old'>₹ 1999.00</h5>
                                    <h5>₹1450.00</h5>
                                </div>
                                <div className="product_details_size_b">
                                    <ul>
                                        <li>
                                            S
                                        </li>
                                        <li>
                                            M
                                        </li>
                                        <li className='active'>
                                            L
                                        </li>
                                        <li>
                                            XL
                                        </li>

                                        <li>
                                            XXL
                                        </li>

                                    </ul>
                                    <Link><i class="fa-solid fa-child-dress"></i> Size Guid</Link>
                                </div>
                                <div className="product_count_box">
                                    <h3>Select Quantity:</h3>
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
                                <div className="product_bybox">
                                    <div className="product_bybox_inn1">
                                        <ul>
                                            <li>
                                                <span><i class="fa-solid fa-earth-americas"></i></span>WORLDWIDE SHIPPING
                                            </li>
                                            <li>
                                                <span><i class="fa-solid fa-truck-fast"></i></span>AVAILABLE TO SHIP
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product_bybox_inn2">
                                        <Link>ADD TO CART</Link>
                                        <Link>Buy Now</Link>
                                    </div>
                                </div>
                                <div className="product_accordion_detail">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Product Details
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        Cotton Mulmul Saree with Blouse
                                                    </p>
                                                    <p>
                                                        Natural Vegetable Dye Color Process
                                                    </p>
                                                    <p>
                                                        Count Thread 92*80 Super Dying Mulmul Cotton
                                                    </p>
                                                    <p>
                                                        Saree Length 5.5 Meter
                                                    </p>
                                                    <p>
                                                        Blouse 80 Cm
                                                    </p>
                                                    <p>

                                                        Separate Bucket Wash/dry Wash

                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Description
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                   <p>This is a beautiful pink saree with hand block print cotton muslin bagru. This Bagru handblock printed cotton saree with Bagru prints is the perfect blend of contemporary and traditional. The beautiful vegetable-dyed saree comes with a pink border which makes it look even more attractive. Comfortable to wear with neat stitching for a graceful look.</p>
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

            <Review_box />
            <Product_coll_are />
            <Common_d_content />
            <Footer />
        </>
    )
}

export { Product_details_area }

