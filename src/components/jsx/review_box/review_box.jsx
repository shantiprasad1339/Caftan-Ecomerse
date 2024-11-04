import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import smart_icons from '../../images/shapes/smart-icons.svg'
import Linespprra from '../../images/shapes/linespprra.svg'
import Rev_1 from '../../images/review/rev_1.svg'
import { Link } from "react-router-dom";

function Review_box() {
    const [rating, setRating] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const handleRating = (value) => {
        setRating(value);
    };
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    const reviewdata = [
        {
            img: Rev_1,
            username: "Vijay Singh Shekhawat",
            reviewcontent: "i ordered a saree from here for my mother. She really loved the print of this saree and the quality of the saree is excellent and i will love to do shopping again from here."
        }
        ,
        {
            img: Rev_1,
            username: "Shanti Prasad Swami",
            reviewcontent: "i ordered a saree from here for my mother. She really loved the print of this saree and the quality of the saree is excellent and i will love to do shopping again from here."
        }
        ,
        {
            img: Rev_1,
            username: "Ankit Chaudhary ",
            reviewcontent: "i ordered a saree from here for my mother. She really loved the print of this saree and the quality of the saree is excellent and i will love to do shopping again from here."
        }
        ,
    ]
    return (
        <>
            <section className="review_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 mx-auto">
                            <div className="review_area_inner">
                                <h3>
                                    CUSTOMER REVIEWS
                                </h3>
                                <img src={smart_icons} alt="" />
                                <img src={Linespprra} alt="" className='  line_img' />
                                <p>Based on 1 Customer Review</p>
                                <button onClick={toggleVisibility}>
                                    {isVisible ? "Hide REVIEW" : "WRITE REVIEW"}
                                </button>
                                {isVisible && (
                                    <div className="review_sub_box">
                                        <span className="tnaksepn">Thank You Being a Customer!:(AS GUST)</span>
                                        <h5>Write a Review</h5>
                                        <div style={{ display: "flex", fontSize: "2rem" }} className="stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span
                                                    key={star}
                                                    onClick={() => handleRating(star)}
                                                    style={{
                                                        cursor: "pointer",
                                                        color: star <= rating ? "#FF64D2" : "#ff64d269", // Fill color for selected stars
                                                    }}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rev_form">
                                            <label htmlFor="">Review Title</label>
                                            <input type="text" />
                                        </div>
                                        <div className="rev_form">
                                            <label htmlFor="">Your Message</label>
                                            <textarea name="" id="" cols={50} rows={5}></textarea>
                                        </div>
                                        <div className="rev_form">
                                            <button>Submit</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="row pt-5 mt-4">
                        <div className="col-xl-12">
                            <div class="headding_area"><h2>CUSTOMER REVIEWS</h2></div>
                        </div>
                        <div className="col-xl-12">
                            <div className="c_review_slider">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={20}
                                    // centeredSlides={true}
                                    autoplay={{
                                        delay: 500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        315: {
                                            slidesPerView: 1, 
                                            spaceBetween: 20,

                                        },
                                        450: {
                                            slidesPerView: 1, 
                                            spaceBetween: 20,

                                        },
                                        640: {
                                            slidesPerView: 1, 
                                            spaceBetween: 20,
                                        },
                                        992: {
                                            slidesPerView: 1,
                                        },

                                        1199: {
                                            slidesPerView: 2,
                                        },
                                        1424: {
                                            slidesPerView: 2,
                                        },
                                    }}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[ Navigation]}
                                    className="mySwiper"
                                >
                                    {reviewdata.map((Reviewdata, key) => (
                                        <SwiperSlide>

                                            <div className="c_review_box">
                                                <div className="image">
                                                    <img src={Reviewdata.img} alt="" />
                                                </div>
                                                <div className="stars">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <h3>
                                                    {Reviewdata.username}
                                                </h3>
                                                <p>{Reviewdata.reviewcontent}</p>
                                            </div>
                                        </SwiperSlide>

                                    ))}




                                </Swiper> 
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Review_box
