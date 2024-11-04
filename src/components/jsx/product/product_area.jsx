import React, { useRef, useState } from 'react'; 
import { Link } from 'react-router-dom' 
import Co_pro_1 from '../../images/product/co_pro_1.png'
import Cart_gif from '../../images/cart.gif'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Page_cat() {
    return (

        <div className="page_cat_header">
            <div className="container-fluid">
                <div className="page_cat_inner">
                    <Link>Home</Link>  <i class="fa-solid fa-angle-right"></i>
                    <Link>Women</Link>  <i class="fa-solid fa-angle-right"></i>
                    <Link className='current'>Ajrakh</Link>
                </div>
            </div>
        </div>


    )
}

export { Page_cat }




function Product_area() {
    const prod_data_new = [
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
            <section className="product_page_area">
                <div className="container-fluid">
                <div className="row">
                             <div className="col-xl-12">
                                <div className="product_p_a_inner">
                                    <h2>Buy Ajrakh Print Saree Online</h2>
                                </div>
                             </div>
                          {prod_data_new.map((prod_data_new1, kky1) => (
                        
                                            <div className="col-xxl-3 col-xl-4 col-md-6 mb-4"> 
                                         
                                         <Link to="/product-details">
                                              <div className="product_box">
                                                  <div className="image">
                                                      <img src={prod_data_new1.img} alt="" />
                                                      <span>Exclusive</span>
                                                  </div>
                                                  <div className="content">
                                                      <div className="content_box">
                                                          <div className="price_box">
                                                              <h3>{prod_data_new1.price}</h3>
                                                              <p><span>{prod_data_new1.p.text1}</span><span>{prod_data_new1.p.text2}</span></p>
                                                          </div>
                                                          <p>{prod_data_new1.p2}</p>
                                                          <button><img src={Cart_gif} alt="" /><span>Add Cart</span></button>
                                                      </div>
                                                  </div>
                                                  <span className='sp1'></span>
                                                  <span className='sp2'></span>
                                              </div>
                                              </Link>
                                           </div>
                                        
                                      ))}
                                      <div className="col-xl-12">
                                        <div className="pagination_product">
                                            <ul>
                                                <li className='pre'>
                                                <i class="fa-solid fa-angle-left"></i>
                                                </li>
                                                <li className='active'>
                                                    1
                                                </li>
                                                <li>
                                                    2
                                                </li>
                                                <li>
                                                    3
                                                </li>
                                                <li>
                                                    2
                                                </li>
                                                <li>
                                                    5
                                                </li>
                                                <li className='nex'>
                                                <i class="fa-solid fa-angle-right"></i>
                                                </li>
                                            </ul>
                                        </div>
                                      </div>
                                  
                              </div>
                </div>
            </section>
        </>
    )
}

export { Product_area }





