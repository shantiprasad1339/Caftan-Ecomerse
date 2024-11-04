import React, { useState, useEffect } from 'react'
import Topbar from './topbar'
import Logo from '../../images/logo/logo.svg'
import { Link } from 'react-router-dom'
function Header() {
    const [state, setState] = useState(false);
    const [scrolltopdata, setscrolltopdata] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const changeState = () => {
        setState(!state);
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('scrolled');
            }
        });
    }, [])


 
    const handleOpenBar = () => {
      setIsOpen(true); // Add class
    };
   
    const handleCloseBar = () => {
      setIsOpen(false);  
    };
    return (
        <>
            <header className={`header-wrapper ${scrolltopdata}`}>
                <Topbar />
                <div className="main_nav">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 my-auto d-lg-block d-none">
                                <div className="mail_topbar">
                                    <Link  ><i className="fa-regular fa-envelope"></i><span> order@aftaneninde.com</span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="logo_topbar">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 my-auto">
                                <div className="topbar_ssb_box">
                                    <ul>
                                        <li>
                                            {state ? <div className="contentt" >
                                                <input type="text" id="txtSearch" className="form-control" placeholder="Search Here..." />
                                                <a className="search_icn" >
                                                    <i className="fas fa-search"></i>
                                                </a>

                                            </div> : null}
                                            <Link onClick={changeState}><i className="fa-solid fa-magnifying-glass"></i> <span>Search</span></Link>

                                        </li>
                                        <li className='d-lg-block d-none'>
                                            <Link to='/login'>Sign In</Link>
                                        </li>
                                        <li>
                                            <Link to="/cart">BAg
                                                <span className='count_pr'>0</span>
                                            </Link>

                                        </li>
                                        <li  className='d-lg-none d-flex open_sidenav'>
                                            <Link onClick={handleOpenBar}><i className="fa-solid fa-bars"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>




                            <div className="col-xl-12">
                                <nav className='d-lg-block d-none'>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link>Woman<i className="fa-solid fa-angle-down"></i></Link>
                                            <ul className='shownaw'>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link  to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link  to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link  to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link  to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link  to="/product">Designer Sherwani</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link>Men<i className="fa-solid fa-angle-down"></i></Link>
                                            <ul className='shownaw'>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                                <li>
                                                    <Link to="/product">Designer Sherwani</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link>Designer lehenga</Link>
                                        </li>

                                        <li>
                                            <Link>About Us </Link>
                                        </li>
                                        <li>
                                            <Link>Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidbar isOpen={isOpen} handleCloseBar={handleCloseBar} />
        </>
    )
}

export { Header };







function Sidbar({isOpen,handleCloseBar}) {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleToggle = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };
    return (
        <>
            <aside className={`my-div ${isOpen ? 'active' : ''}`}>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    <li>
                        <Link to='/' className="sub-btn"  >
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={`${activeMenu === 1 ? 'active' : ''}`}>
                        <Link className="sub-btn" onClick={() => handleToggle(1)}>
                            <span>Woman</span>
                            <span className={`dropdown1 ${activeMenu === 1 ? 'rotate' : ''}`}><i className="fa-solid fa-caret-right"></i></span>
                        </Link>
                        <ul className={`sub-menu ${activeMenu === 1 ? 'active' : ''}`}>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                        </ul>
                    </li>


                    <li className={`${activeMenu === 2 ? 'active' : ''}`}>
                        <Link className="sub-btn" onClick={() => handleToggle(2)}>
                            <span>Men</span>
                            <span className={`dropdown1 ${activeMenu === 2 ? 'rotate' : ''}`}><i className="fa-solid fa-caret-right"></i></span>
                        </Link>
                        <ul className={`sub-menu ${activeMenu === 2 ? 'active' : ''}`}>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'> Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                            <li>
                                <Link to='/product'>Designer Sherwani</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/product' className="sub-btn"  >
                            <span>Designer lehenga</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/product' className="sub-btn"  >
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link  to='/contact-us' className="sub-btn"  >
                            <span>Contact Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link  to='/login' className="sub-btn login_btn"  >
                            <span>Login</span>
                        </Link>
                    </li>

                </ul>
                <Link onClick={handleCloseBar}>
                <span className="close" >X</span>

                </Link>
            </aside>
        </>
    )
}

export { Sidbar };

