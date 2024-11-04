import React from 'react'
import { Header } from '../header/header'
import Footer from '../footer/footer'

function Track_order() {
    return (
        <>
            <Header />
            <section className="shipping_c_area track_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-9 mx-auto my-auto">
                            <div className="shipping_c_box">
                                <h2>Find And Track Your Current Orders

                                </h2>
                                <p>If you have placed an order, sit back and relax. It will be delivered to you within the stipulated time. Still curious to know where your package is and when will you be able to see it and try it on? Want to track a package? To find the whereabouts of your orders fulfilled by order@aftaneninde.com, open this section. In this section, find all the tracking information of the products you ordered.

                                </p>
                                <input type="text" placeholder='Email Address' className='mt-4'/>
                                <input type="text" placeholder='Order No'/>
                                <button>Track Order</button>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Track_order
