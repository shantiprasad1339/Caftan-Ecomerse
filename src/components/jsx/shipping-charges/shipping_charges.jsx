import React, { useState } from 'react';

import { Header } from '../header/header'
import Footer from '../footer/footer'

function Shipping_charges() {
    const [selectedCountry, setSelectedCountry] = useState("");  
    const [showTable, setShowTable] = useState(false);
    const shippingData = [
        { id: 1, weight: 0.5, inr: 0.00, usd: 0.00 },
        { id: 2, weight: 1.0, inr: 0.00, usd: 0.00 },
        { id: 3, weight: 1.5, inr: 0.00, usd: 0.00 },
        { id: 4, weight: 2.0, inr: 0.00, usd: 0.00 },
        { id: 5, weight: 2.5, inr: 0.00, usd: 0.00 },
        { id: 6, weight: 3.0, inr: 0.00, usd: 0.00 },
        { id: 7, weight: 3.5, inr: 0.00, usd: 0.00 },
        { id: 8, weight: 4.0, inr: 0.00, usd: 0.00 },
        { id: 9, weight: 4.5, inr: 0.00, usd: 0.00 },
        { id: 10, weight: 5.0, inr: 0.00, usd: 0.00 },
        { id: 11, weight: 6.0, inr: 0.00, usd: 0.00 },
        { id: 12, weight: 7.0, inr: 0.00, usd: 0.00 },
        { id: 13, weight: 8.0, inr: 0.00, usd: 0.00 },
        { id: 14, weight: 9.0, inr: 0.00, usd: 0.00 },
        { id: 15, weight: 10.0, inr: 0.00, usd: 0.00 },
        { id: 16, weight: 11.0, inr: 0.00, usd: 0.00 },
        { id: 17, weight: 12.0, inr: 0.00, usd: 0.00 },
        { id: 18, weight: 13.0, inr: 0.00, usd: 0.00 },
        { id: 19, weight: 14.0, inr: 0.00, usd: 0.00 },
        { id: 20, weight: 15.0, inr: 0.00, usd: 0.00 },
        { id: 21, weight: 16.0, inr: 0.00, usd: 0.00 },
        { id: 22, weight: 17.0, inr: 0.00, usd: 0.00 },
        { id: 23, weight: 19.0, inr: 0.00, usd: 0.00 },
        { id: 24, weight: 20.0, inr: 0.00, usd: 0.00 },
        { id: 25, weight: 21.0, inr: 0.00, usd: 0.00 },
    ];

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setShowTable(false);  
    };

    const handleCalculateClick = () => {
        if (selectedCountry) {
            setShowTable(true);  
        }
    };


    return (
        <>
            <Header />
            <section className="shipping_c_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 mx-auto my-auto">
                            <div className="shipping_c_box">
                                <h2>Shipping Charges
                                </h2>
                                <p>We offers unmatched shipping rates to deliver your ethnic wear worldwide. The
                                    order@aftaneninde.com is one of prime ethnic wear website in the world who offers free shipping to deliver ordered ethnic wear anywhere in India. Check shipping rates to buy ethnic wear for the shipping country.

                                </p>
                                <select name="country" id="country" onChange={handleCountryChange}>
                                    <option value="">Select Country Charges</option>
                                    <option value="India">India</option>
                                    <option value="UK">UK</option>
                                    <option value="USA">USA</option>
                                </select>
                                <button onClick={handleCalculateClick}>Calculate</button>
                                
                                {showTable  && (
                                    <div className="table_box">
                                        <table className="shipping_ch_table th-left-none td-right-none" cellSpacing="0" border="1" style={{ borderCollapse: "collapse" }}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">S.No</th>
                                                    <th scope="col">Weight upto (in Kgs.)</th>
                                                    <th scope="col">Shipment (INR)</th>
                                                    <th scope="col">Shipment (USD)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {shippingData.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.weight}</td>
                                                        <td>{item.inr.toFixed(2)}</td>
                                                        <td>{item.usd.toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Shipping_charges


 