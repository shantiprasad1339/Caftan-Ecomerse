import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import Log_vac from '../../images/log_vac.svg'
import Logo from '../../images/logo/logo.svg'
import Dress from '../../images/shapes/dress.svg'
import Baan_new from '../../images/shapes/baan_new.svg'

function Register() {
  return (
    <>
      <Header />
      <section className="login_area register_area">
        <div className="container z-11">
          <div className="row ">
            <div className="col-xl-6 pe-xl-0 pe-auto">
              <div className="login_a_vactor">
                <img src={Log_vac} alt="" />
              </div>
            </div>
            <div className="col-xl-6 ps-xl-0 ps-auto">
              <div className="login_a_box">
                <img src={Logo} alt="" />
                <div className="row ">
                  <div className="col-xl-6">
                  <div className="form_box mb-3 z-11">
                  <span><i class="fa-regular fa-circle-user"></i></span>
                  <input type="text" name="" id="" placeholder='Full Name' />
                </div>
                  </div>
                  <div className="col-xl-6">
                  <div className="form_box mb-3 z-11">
                  <span><i class="fa-regular fa-envelope"></i></span>
                  <input type="text" name="" id="" placeholder='Email Id' />
                </div>
                  </div>
                  <div className="col-xl-6">
                  <div className="form_box mb-3 z-11">
                  <span><i class="fa-solid fa-phone"></i></span>
                  <input type="text" name="" id="" placeholder='Mobile Number' />
                </div>
                  </div>
                  <div className="col-xl-6">
                  <div className="form_box mb-3 z-11 p-0 ">
                  <span><i class="fa-solid fa-unlock-keyhole"></i></span>
                  <input type="text" name="" id="" placeholder='Password' />
                </div>
                  </div>
                </div>
                
           
                <div className="form_box_3 z-11">
                  <button>Register Now</button>
                </div>
                <div className="form_box_3 z-11">
                  <p>You  Have An Account <Link to='/login'>Login Now</Link> </p>
                </div>
                <span className='sp_1'></span>
                <span className='sp_2'></span>
                <img src={Dress} alt="" className='dr_img' />
                <img src={Baan_new} alt="" className='dr_img_1' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register
