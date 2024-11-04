import React from 'react'
import { Header } from '../header/header'
import { Page_cat, Product_area } from './product_area'
import { Common_d_content } from '../home/home_area'
import Footer from '../footer/footer'

function Product() {
  return (
    <>
      <Header />
      <Page_cat />
      <Product_area />
      <Common_d_content />
      <Footer />
    </>
  )
}

export default Product
