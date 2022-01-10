import React from "react";
import {Register} from '../SVG/index.jsx'
const top_navbar = () => {
  return (
    <>
     <div className="site-content">       
        <header className="site-header">
            <div className="header-top-navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="top-navbar-left">
                                <ul className="info">
                                    <li className="info-date"><span className="fa fa-envelope"></span> Email: <a href="#">support@biddo.com</a></li>
                                    <li className="temperature"><span className="fa fa-phone"></span>Call Us: 012 - 426 - 7890 </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="top-navbar-right">
                                <div className="header-social-area">
                                    <ul className="header-social-share">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="user-registration-area">
                                    <a className="user-reg-btn" href="/signup">
                                        <span><Register/></span>
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                         
        </header></div>        
    </>
  );
};

export default top_navbar;
