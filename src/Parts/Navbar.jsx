import React from "react";
import { Link } from "react-router-dom";

// import Home from "./Home";
const Navbar = () => {
  return (
      <header className="site-header" id="site-header">
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="navbar navbar-expand-lg navigation-area">
                  <div className="site-branding">
                    <Link className="site-logo" to="index.html">
                      <img src="assets/images/logo/logo.png" alt="Site Logo" />
                    </Link>
                  </div>
                  <div className="mainmenu-area">
                    <nav className="menu">
                      <ul id="nav">
                        <li>
                          <Link className="active" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li className="dropdown-trigger">
                          <Link to="#">Auction</Link>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/deals">Deals Of The Day</Link>
                            </li>
                            <li>
                              <Link to="/Categories">Auction Category</Link>
                            </li>
                            <li>
                              <Link to="/auction_details">Auction Details</Link>
                            </li>
                            <li>
                              <Link to="/winner">Auction Winners</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-trigger">
                          <Link to="#">Pages</Link>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/faqs">Faqs</Link>
                            </li>
                            <li>
                              <Link to="/privacy">privacy Policy</Link>
                            </li>
                            <li>
                              <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                              <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                              <Link to="/terms">Terms & conditions</Link>
                            </li>
                            <li>
                              <Link to="/404">404</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-trigger">
                          <Link to="#">Blog</Link>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/blog">Blog Classic</Link>
                            </li>
                            <li>
                              <Link to="/blog_single">Blog Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="header-navigation-right">
                      <div className="search-wrap">
                        <div className="search-btn">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="search-form">
                          <form action="#">
                            <input type="search" placeholder="Search" />
                            <button type="submit">
                              <i className="fas fa-search"></i>{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!--~~~~~~~ Start Mobile Menu ~~~~~~~~--> */}
                <div className="mobile-menu">
                  <Link className="mobile-logo" to="index.html">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
            
    
  );
};
export default Navbar;
