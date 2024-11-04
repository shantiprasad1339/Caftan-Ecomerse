import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Cat_1 from '../../images/cat/cat_1.svg'
import Cat_2 from '../../images/cat/cat_2.svg'
import Cat_3 from '../../images/cat/cat_3.svg'
import Cat_4 from '../../images/cat/cat_4.svg'
import Cat_5 from '../../images/cat/cat_5.svg'
import Cat_6 from '../../images/cat/cat_6.svg'
import Cat_7 from '../../images/cat/cat_7.svg'
import Big_im_1 from '../../images/big_im_1.svg'
import Big_im_2 from '../../images/big_im_2.svg'
import Big_im_3 from '../../images/big_im_3.svg'
import Big_im_4 from '../../images/big_im_4.svg'
import Big_im_5 from '../../images/big_im_5.svg'
import Tr_p_1 from '../../images/product/tr_p_1.png'
import Tr_p_2 from '../../images/product/tr_p_2.png'
import Tr_p_3 from '../../images/product/tr_p_3.png'
import Tr_p_4 from '../../images/product/tr_p_4.png'
import Tr_p_5 from '../../images/product/tr_p_5.png'
import Tr_p_6 from '../../images/product/tr_p_6.png'
import Round_imm_1 from '../../images/round_imm_1.svg'
import Skirt from '../../images/shapes/skirt.svg'
import Shap_tree from '../../images/shapes/shap_tree.svg'
import Co_pro_1 from '../../images/product/co_pro_1.png'
import Cart_gif from '../../images/cart.gif'
import Worldwide from '../../images/icons/worldwide.png'
import Securepayment from '../../images/icons/securepayment.png'
import Cashondelivery from '../../images/icons/cashondelivery.png'
import Customersupport from '../../images/icons/customersupport.png'
import Return from '../../images/icons/return.png'
import Madeinindia from '../../images/icons/madeinindia.png'
import Women_g_image from '../../images/Women_g_image.png'


import { Link } from 'react-router-dom'
import Youtubearea from './youtubearea';
import Happy_custmor from './happy_custmor';


function Home_area() {

    const catdata = [
        {
            img: Cat_1,
            text: "Saree"
        },
        {
            img: Cat_2,
            text: "Kurti"
        },
        {
            img: Cat_3,
            text: "Skirt"
        },
        {
            img: Cat_4,
            text: "Bags"
        },
        {
            img: Cat_5,
            text: "Man"
        },
        {
            img: Cat_6,
            text: "Bedsheets"
        },
        {
            img: Cat_7,
            text: "Trending Now"
        },

    ]
    const big_idata = [
        {
            img: Big_im_1,
            text: 'Saree'

        },
        {
            img: Big_im_2,
            text: 'Saree'

        },
        {
            img: Big_im_3,
            text: 'Saree'

        },
        {
            img: Big_im_4,
            text: 'Saree'

        },
        {
            img: Big_im_5,
            text: 'Saree'

        },
    ]
    const product_slider = [
        {
            img: Tr_p_1,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },
        {
            img: Tr_p_2,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },
        {
            img: Tr_p_3,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },
        {
            img: Tr_p_4,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },
        {
            img: Tr_p_5,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        }, {
            img: Tr_p_6,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },
        {
            img: Tr_p_1,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },
        {
            img: Tr_p_2,
            text: 'Ink Blue Handblock Co- Ord Set',
            p: {
                span1: "₹ 3,699",
                span2: "₹ 5,299",
                span3: "30% off"
            }

        },

    ]

    return (
        <>
            <section className="hero_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-10 mx-auto">
                            <div className="hero_area_inner">
                                <div className="hero_area_inner_ov">
                                    {catdata.map((catdata_1, hkey1) => (
                                        <Link >
                                            <div className="cat_box">
                                                <div className="image">
                                                    <img src={catdata_1.img} alt="" />

                                                </div>
                                                <span>{catdata_1.text}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="big_img_box">
                    {
                        big_idata.map((big_idata_1, key2) => (
                            <div className="big_i_box">
                                <div className="image">
                                    <img src={big_idata_1.img} alt="" />
                                </div>
                                <div className="content">
                                    <span>{big_idata_1.text}</span>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </section>
            <section className="tranding_area">
                <div className="container_n overflow-hidden">
                    <div className="row ">
                        <div className="col-xl-12">
                            <div className="headding_area">
                                <h2>What's Trending</h2>
                            </div>
                        </div>
                        <div className="col-xl-12 mt-4">
                            <div className="tarnding_area_inner">
                                <Swiper
                                    slidesPerView={5}
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
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1324: {
                                            slidesPerView: 4,
                                        },
                                    }}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {product_slider.map((product_slider_data, hkey2) => (
                                        <SwiperSlide>

                                            <div className="trandin_pr_box">
                                                <div className="image">
                                                    <img src={product_slider_data.img} alt="" className='' />
                                                </div>
                                                <div className="content">
                                                    <img src={product_slider_data.img} alt="" />
                                                    <h4>{product_slider_data.text}</h4>
                                                    <p><span>{product_slider_data.p.span1}</span><span>{product_slider_data.p.span2}</span><span>{product_slider_data.p.span3}</span></p>
                                                    <button className='commen_btn'><span>Buy Now</span></button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}


                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Summer_area />
        </>
    )
}

export { Home_area }





function Summer_area() {

    const catg_data_sld = [
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },
        {
            text: "Bagru Print Suits"
        },

    ]



    const br_data = [
        {
            img: Worldwide,
            span: "WORLDWIDE DELIVERY",
        },
        {
            img: Securepayment,
            span: "SECURE PAYMENT",
        },
        {
            img: Cashondelivery,
            span: "CASH ON DELIVERY",
        },
        {
            img: Customersupport,
            span: "CUSTOMER SUPPORT",
        },
        {
            img: Return,
            span: "EASY RETURN  ",
        },
        {
            img: Madeinindia,
            span: "MADE IN INDIA",
        },
    ]

    return (
        <>
            <section className='summer_area'>
                <div className="container-fluid z-11">
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <div className="summer_area_inner">
                                <div className="headding_area">
                                    <h2>Summer Fashion Ethnic Wear for Women n Girls - Aftaneninde®</h2>
                                </div>
                                <p>Our designer ethnic collection won't let you miss the summer bliss</p>
                                <img src={Round_imm_1} alt="" />
                                <p>Hey there ladies! The spring-summer season is here and it definitely calls for a style which is easy-breezy, comfortable, and chic, all at the same time. Whobetter than "Aftaneninde" can justify thefashion for the season and give you a style which is a blend of cosy, congenial, and worth flattering. With the warm weather approaching and the onset of </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="shapes">
                    <img src={Skirt} alt="" />
                    <img src={Shap_tree} alt="" />
                </div>
            </section>

            <section className='catg_slider'>
                <div className="catg_slider_inner">
                    <div className="catg_slider_box">
                        {catg_data_sld.map((catg_data_sld_1, v1) => (
                            <Link>{catg_data_sld_1.text}</Link>

                        ))}
                    </div>
                </div>
            </section>
            <Youtubearea />
            <Product_coll_are />
            <section className="brand_view_area">
                <div className="container-fluid">
                    <div className="row">
                        {br_data.map((br_data_1, brkey) => (
                            <div className="col-xl-2 col-md-4 col-6 mb-xl-0 mb-4 ">
                                <div className="brand_view_a_box">
                                    <div className="image"><img src={br_data_1.img} alt="" /></div>
                                    <span>{br_data_1.span}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <Happy_custmor />
            <Product_coll_are  />
          <Common_d_content />

        </>

    )
}

export { Summer_area }




function Product_coll_are() {

    const prod_data = [
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },
        {
            img: Co_pro_1,
            price: "3,299",
            p: {
                text1: "4,749",
                text2: "31% off"
            },
            p2: "Premium Handmade Cotton Suit Set with Exquisite Block Print Suit Set with Exquisite Block Print"
        },

    ]
    return (
        <>
            <section className="product_collec_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="product_coll_inner">
                                <h2>HANDBLOCK PRINT SAREES COLLECTION</h2>
                                <p>Take a Quick Sneak-Peek into the World of Aftaneninde</p>
                                <img src={Round_imm_1} alt="" />

                            </div>
                        </div>

                        <div className="col-xl-12 mt-5">
                            <div className="pro_coll_sld">

                                <Swiper
                                    slidesPerView={5}
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
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1324: {
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
                                    {prod_data.map((prod_data_1, kky1) => (
                                        <SwiperSlide>

                                            <div className="product_box">
                                                <div className="image">
                                                    <img src={prod_data_1.img} alt="" />
                                                    <span>Exclusive</span>
                                                </div>
                                                <div className="content">
                                                    <div className="content_box">
                                                        <div className="price_box">
                                                            <h3>{prod_data_1.price}</h3>
                                                            <p><span>{prod_data_1.p.text1}</span><span>{prod_data_1.p.text2}</span></p>
                                                        </div>
                                                        <p>{prod_data_1.p2}</p>
                                                        <button><img src={Cart_gif} alt="" /><span>Add Cart</span></button>
                                                    </div>
                                                </div>
                                                <span className='sp1'></span>
                                                <span className='sp2'></span>
                                            </div>

                                        </SwiperSlide>
                                    ))}



                                </Swiper>
                            </div>
                        </div>
                        <div className="col-xl-12 ">
                            <div className="product_more_btn">
                                <button className="commen_btn mt-5"><span>Buy Now</span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Product_coll_are }




 

function Common_d_content() {
  return (
    <>
      <section className="shoping_detail_area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                       <div className="shoping_da_inner">
                        <h3>"Shop Ethnic Wear Online from The house of Aftaneninde"</h3>
                           <span>YOUR DREAM ETHNIC ATTIRE IS JUST A CLICK AWAY!</span>


                           <p>With our <Link> ethnic wear for women</Link> , you can say that Ethnic wear is the other name for elegant-wear. Majestic, refined, and sophisticated are the words that can appropriately describe the look you will get when you carry our ethnic clothing. Our Ethnic Collection can make you feel like on cloud nine as it is built with precision to give you a comfortable
                           fitting as well as a prominent style statement. When you shop from our ethnic wear online, it is sure that you will getcompliments for how tasteful you are with fashion! Ethnic dresses come in different forms and styles. Indian ethnic wear pieces from our couture ensemble are the go-to choice of designer ethnic wear when a graceful and chic look is to be carried. With ethnic wear online shopping from us, your dream ethnic attire is just a click away ready to make you feel like a diva. Our exclusive offers on ethnic
                           dresses online truly amount to be a deal to steal for when you wish to shop responsibly!</p>
                       </div>
                </div>
            </div>
        </div>
      </section>


      <section className="fashion_w_area">
        <div className="container-fluid">
            <div className="row">
                    <div className="col-xl-8 my-auto">
                        <div className="fashion_w_inner">
                            <h3>"The saga of ethnic wear for women at Aftaneninde"</h3>
                            <span>ETHNIC DRESSES FOR THE FASHION FORWARD WOMEN</span>
                            <p>Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.
                            Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.
                            Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.
                            Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.</p>
                            <p>Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.
                            Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.
                            Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.
                            Our exclusively curated ensemble of ethnic wear redefine contemporary trends as well which lets you be rooted to where you have been nurtured. The vibrant hues and intricate embroideries will make your heart skip a beat because, for a woman, true love can also be found in apparels.</p>
                            <button className="commen_btn mt-5"><span>Buy Now</span></button>
                        </div>
                       
                    </div>
                    <div className="col-xl-4 mt-xl-0 mt-4">
                           <div className="fashion_w_inner2">
                            <img src={Women_g_image} alt="" />
                           </div>
                    </div>
            </div>
        </div>
      </section>
    </>
  )
}

export { Common_d_content}



