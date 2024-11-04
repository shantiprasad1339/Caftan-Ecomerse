import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../header/header'
import Log_vac from '../../images/log_vac.svg'
import Logo from '../../images/logo/logo.svg'
import Dress from '../../images/shapes/dress.svg'
import Baan_new from '../../images/shapes/baan_new.svg'

import Footer from '../footer/footer'
 
function Login() {
  return (
  <>
  <Header />
  <section className="login_area">
    <div className="container z-11">
        <div className="row">
          <div className="col-xl-6 pe-xl-0 pe-auto">
               <div className="login_a_vactor">
                <img src={Log_vac} alt="" />
               </div>
          </div>
          <div className="col-xl-6 ps-xl-0 ps-auto">
            <div className="login_a_box">
               <img src={Logo} alt="" />
               <div className="form_box mb-3 z-11">
                    <span><i class="fa-regular fa-circle-user"></i></span>
                    <input type="text" name="" id="" placeholder='Enter Your Username'/>
               </div>
               <div className="form_box mb-3 z-11">
                    <span><i class="fa-solid fa-unlock-keyhole"></i></span>
                    <input type="password" name="" id="" placeholder='Enter Your Password'/>
               </div>
               <div className="form_box_2 z-11">
                  <div className="r_box">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Remember</label>
                  </div>
                  <Link>Forgot Password</Link>
               </div>
               <div className="form_box_3 z-11">
                <button>Get Login</button>
               </div>
               <div className="form_box_3 z-11"> 
                <p>You Don't Have Account <Link to='/register'>Register Now</Link> </p>
               </div>
               <span className='sp_1'></span>
               <span className='sp_2'></span>
               <img src={Dress} alt="" className='dr_img'/>
               <img src={Baan_new} alt=""  className='dr_img_1'/>
            </div>
          </div>
        </div>
    </div>
  </section>
  <Footer />
  </>
  )
}

export default Login
