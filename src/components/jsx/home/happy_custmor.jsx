import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Rev1 from '../../images/rev1.png'



function Happy_custmor() {
    const rev_data = [
        {
            img: Rev1,
            text1: "Thank you so much! Love wearing Tacfab suits. Without Tacfab, my wardrobe is  incomplete.",
            text2: "Ms Aditi Chauhan"
        },
        {
            img: Rev1,
            text1: "Thank you so much! Love wearing Tacfab suits. Without Tacfab, my wardrobe is  incomplete.",
            text2: "Ms Aditi Chauhan"
        },
        {
            img: Rev1,
            text1: "Thank you so much! Love wearing Tacfab suits. Without Tacfab, my wardrobe is  incomplete.",
            text2: "Ms Aditi Chauhan"
        },
    ]
    return (

        <>
            <section className="clint_review_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2 className='clint_r_headding'>Happy Customer Stories</h2>
                        </div>
                        <div className="col-xl-12">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                // centeredSlides={true}
                                autoplay={{
                                    delay: 500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    315: {
                                        slidesPerView: 1,

                                    },
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    992: {
                                        slidesPerView: 1,
                                    },
                                    1324: {
                                        slidesPerView: 1,
                                    },
                                }}

                                // pagination={{
                                //     clickable: true,
                                // }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {rev_data.map((rev_data_1, revkey) => (
                                    <SwiperSlide>

                                        <div className="clint_ra_inner">
                                            <div className="image">
                                                <img src={rev_data_1.img} alt="" />
                                            </div>
                                            <span>" {rev_data_1.text1} "</span>
                                            <h5>{rev_data_1.text2}</h5>
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

export default Happy_custmor
