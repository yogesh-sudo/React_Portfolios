import React from "react";
import { Link } from "react-router-dom";
import {Gift,LeftArrow,RightArrow,Doller,CreditCard,Support,AirPlane,Qoutes} from '../SVG/index.jsx'
const Home = () => {
  return (
    <div  className="site-content">        
         <div id="hero-block" className="hero-block bg-overlay bg-image" style={{backgroundImage:" url('.././Assets/images/bg/hero.jpg')"}}>
            <div id="particles-js"></div>
            <div className="container">
                <div className="row align-items-center justify-content-center hero-content-main">
                    <div className="col-lg-8">
                        <div className="hero-content-area text-center ptb-120">
                            <div className="hero-title-area">
                                <h2 className="hero-title">Auction Bidding Platform Biddo Is Win Auction </h2>
                            </div>
                            <div className="hero-desc">
                                <p>Middleton in objection discovery as agreeable. Edward thrown dinin. Nulla sem porta ullamcorper orci, scelerisque ullamcorper vitae vestibulum turpis non, vitae donec feugiat leo nunc</p>
                            </div>
                            <div className="form-group-btn">
                                <Link className="btn btn-default" to="deals.html">All Auction</Link>
                                <Link className="btn btn-default btn-white" to="contact.html">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* START */}
      <div className="facility-area">
        <div className="container ml-b-30">
          <div className="row facility-content">
            <div className="col-lg-3 col-md-6">
              <div className="facility-box">
                <div className="icon">
                  <span><AirPlane/></span>
                </div>
                <h3 className="title">World Wide Free Shipping</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facility-box">
                <div className="icon">
                  <span><Doller/></span>
                </div>
                <h3 className="title">100% money back guarantee</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="facility-box">
                <div className="icon">
                  <span><CreditCard/></span>
                </div>
                <h3 className="title">Many payment gatways</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="facility-box">
                <div className="icon">
                  <span><Support/></span>
                </div>
                <h3 className="title">24/7 online support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auction-categories-block ptb-120">
        <div className="container ml-b-30">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  auction <span>categories</span>
                </h2>
              </div>
            </div>
          </div>
          {/* END */}
          {/* START */}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat">
                <div className="cat-icon">
                  <span className="icon-drawing-12"></span>
                </div>
                <h2 className="cat-name">Fine Art</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-red">
                <div className="cat-icon">
                  <span className="icon-dress"></span>
                </div>
                <h2 className="cat-name">Dolls, Bears &amp; Toys</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-green">
                <div className="cat-icon">
                  <span className="icon-food3"></span>
                </div>
                <h2 className="cat-name">Farm &amp; Agriculture</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-turquoise">
                <div className="cat-icon">
                  <span className="icon-desk2"></span>
                </div>
                <h2 className="cat-name">Decorative Art</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-yellow">
                <div className="cat-icon">
                  <span className="icon-flask"></span>
                </div>
                <h2 className="cat-name">Jewelry</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-violet">
                <div className="cat-icon">
                  <span className="icon-truck2"></span>
                </div>
                <h2 className="cat-name">Vehicles, Marine</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-matterhorn">
                <div className="cat-icon">
                  <span className="icon-school"></span>
                </div>
                <h2 className="cat-name">Industrial Machinery</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#" className="single-auction-cat cat-orange">
                <div className="cat-icon">
                  <span className="icon-house"></span>
                </div>
                <h2 className="cat-name">Real Estate</h2>
                <div className="cat-no">320</div>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* END */}


      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Live Auction Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="live-auction-block bg-white-smoke ptb-120">
        <div className="container ml-b-30">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  live <span>Auction</span>
                </h2>
                
              </div>
              
            </div>
            
          </div>
          

          <div className="row items-two-1199">
            <div className="col-lg-4 col-md-6">
              <div className="auction-item">
                <div className="item-header">
                  <h3 className="heading">
                    <a href="auction-details.html">JBL GO Digital Drone</a>
                  </h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
          
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product1.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product2.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="bid-max">
                    3 x <span className="icon-user-1"></span>
                  </div>
                  <div className="item-price">Price: $339</div>
                </div>
          
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-price">$0.08</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter1" className="bid-timer"></div>
                      <p>Waiting For Bid</p>
                    </div>
                  </div>
                  <div className="bid-button">
                    <a className="btn btn-default" href="#">Bid Now</a>
                  </div>
                </div>
          
              </div>
          
            </div>
          
            <div className="col-lg-4 col-md-6">
              <div className="auction-item">
                <div className="item-header">
                  <h3 className="heading">
                    <a href="auction-details.html">BBB Bluetooth Headphone</a>
                  </h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
          
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product4.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product3.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="bid-max">
                    3 x <span className="icon-user-1"></span>
                  </div>
                  <div className="item-price">Price: $339</div>
                </div>
          
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-price">$0.66</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter2" className="bid-timer"></div>
                      <p>Waiting For Bid</p>
                    </div>
                  </div>
                  <div className="bid-button">
                    <a className="btn btn-default" href="#">Bid Now</a>
                  </div>
                </div>
          
              </div>
          
            </div>
          
            <div className="col-lg-4 col-md-6">
              <div className="auction-item">
                <div className="item-header">
                  <h3 className="heading">
                    <a href="auction-details.html">Android Mobile Phone</a>
                  </h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product5.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product6.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="bid-max">
                    3 x <span className="icon-user-1"></span>
                  </div>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-price">$0.55</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter3" className="bid-timer"></div>
                      <p>Waiting For Bid</p>
                    </div>
                  </div>
                  <div className="bid-button">
                    <a className="btn btn-default" href="#">Bid Now</a>
                  </div>
                </div>
                
              </div>
          
            </div>
          
            <div className="col-lg-4 col-md-6">
              <div className="auction-item">
                <div className="item-header">
                  <h3 className="heading">
                    <a href="auction-details.html">Digital Headphone</a>
                  </h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product3.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product4.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="bid-max">
                    3 x <span className="icon-user-1"></span>
                  </div>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-price">$0.15</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter4" className="bid-timer"></div>
                      <p>Waiting For Bid</p>
                    </div>
                  </div>
                  <div className="bid-button">
                    <a className="btn btn-default" href="#">Bid Now</a>
                  </div>
                </div>
                
              </div>
          
            </div>
          
            <div className="col-lg-4 col-md-6">
              <div className="auction-item">
                <div className="item-header">
                  <h3 className="heading">
                    <a href="auction-details.html">Realistic Watche</a>
                  </h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product7.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product8.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="bid-max">
                    3 x <span className="icon-user-1"></span>
                  </div>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-price">$0.15</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter5" className="bid-timer"></div>
                      <p>Waiting For Bid</p>
                    </div>
                  </div>
                  <div className="bid-button">
                    <a className="btn btn-default" href="#">Bid Now</a>
                  </div>
                </div>
                
              </div>
          
            </div>
          
            <div className="col-lg-4 col-md-6">
              <div className="auction-item">
                <div className="item-header">
                  <h3 className="heading">
                    <a href="auction-details.html">JBL GO White Drone</a>
                  </h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product2.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product1.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="bid-max">
                    3 x <span className="icon-user-1"></span>
                  </div>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-price">$0.33</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter6" className="bid-timer"></div>
                      <p>Waiting For Bid</p>
                    </div>
                  </div>
                  <div className="bid-button">
                    <a className="btn btn-default" href="#">Bid Now</a>
                  </div>
                </div>
                
              </div>
          
            </div>
          
          </div>
          
        </div>
      </div>
      

      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Upcomming Auction Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="upcoming-auction-block ptb-120">
        <div className="container ml-b-30">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  Upcoming <span>Auction</span>
                </h2>
                
              </div>
              
            </div>
           
          </div>
          

          <div className="row">
            <div className="col-12">
              <div className="upcoming-auction-main">
                <div
                  className="
                    upcoming-auction-carousel
                    carousel-nav-dots
                    owl-carousel
                  "
                >
                  <div className="auction-item style-two">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src="assets/images/auction/grid/product1.jpg"
                          alt="Thumbnail"
                        />
                        <img
                          className="prod2"
                          src="assets/images/auction/grid/product2.jpg"
                          alt="Thumbnail"
                        />
                      </a>
                      <div className="bid-max">
                        3 x <span className="icon-user-1"></span>
                      </div>
                      <div className="item-price">Price: $339</div>
                    </div>
                    
                    <div className="item-header">
                      <h3 className="heading">
                        <a href="#">JBL GO Digital Drone</a>
                      </h3>
                      <div className="auction-id">Auction ID: BB28111</div>
                    </div>
                    
                  </div>
              
                  <div className="auction-item style-two">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src="assets/images/auction/grid/product4.jpg"
                          alt="Thumbnail"
                        />
                        <img
                          className="prod2"
                          src="assets/images/auction/grid/product3.jpg"
                          alt="Thumbnail"
                        />
                      </a>
                      <div className="bid-max">
                        3 x <span className="icon-user-1"></span>
                      </div>
                      <div className="item-price">Price: $339</div>
                    </div>
                    
                    <div className="item-header">
                      <h3 className="heading">
                        <a href="#">BBB Bluetooth Headphone</a>
                      </h3>
                      <div className="auction-id">Auction ID: BB28111</div>
                    </div>
                    
                  </div>
              
                  <div className="auction-item style-two">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src="assets/images/auction/grid/product5.jpg"
                          alt="Thumbnail"
                        />
                        <img
                          className="prod2"
                          src="assets/images/auction/grid/product6.jpg"
                          alt="Thumbnail"
                        />
                      </a>
                      <div className="bid-max">
                        3 x <span className="icon-user-1"></span>
                      </div>
                      <div className="item-price">Price: $339</div>
                    </div>
                    
                    <div className="item-header">
                      <h3 className="heading">
                        <a href="#">Android Mobile Phone</a>
                      </h3>
                      <div className="auction-id">Auction ID: BB28111</div>
                    </div>
                    
                  </div>
              
                  <div className="auction-item style-two">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src="assets/images/auction/grid/product3.jpg"
                          alt="Thumbnail"
                        />
                        <img
                          className="prod2"
                          src="assets/images/auction/grid/product4.jpg"
                          alt="Thumbnail"
                        />
                      </a>
                      <div className="bid-max">
                        3 x <span className="icon-user-1"></span>
                      </div>
                      <div className="item-price">Price: $339</div>
                    </div>
                    
                    <div className="item-header">
                      <h3 className="heading"><a href="#">Digital Headphone</a></h3>
                      <div className="auction-id">Auction ID: BB28111</div>
                    </div>
                    
                  </div>
              
                  <div className="auction-item style-two">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src="assets/images/auction/grid/product7.jpg"
                          alt="Thumbnail"
                        />
                        <img
                          className="prod2"
                          src="assets/images/auction/grid/product8.jpg"
                          alt="Thumbnail"
                        />
                      </a>
                      <div className="bid-max">
                        3 x <span className="icon-user-1"></span>
                      </div>
                      <div className="item-price">Price: $339</div>
                    </div>
                    
                    <div className="item-header">
                      <h3 className="heading"><a href="#">Realistic Watche</a></h3>
                      <div className="auction-id">Auction ID: BB28111</div>
                    </div>
                    
                  </div>
              
                  <div className="auction-item style-two">
                    <div className="item-img">
                      <a href="#">
                        <img
                          src="assets/images/auction/grid/product2.jpg"
                          alt="Thumbnail"
                        />
                        <img
                          className="prod2"
                          src="assets/images/auction/grid/product1.jpg"
                          alt="Thumbnail"
                        />
                      </a>
                      <div className="bid-max">
                        3 x <span className="icon-user-1"></span>
                      </div>
                      <div className="item-price">Price: $339</div>
                    </div>
                    
                    <div className="item-header">
                      <h3 className="heading">
                        <a href="#">JBL GO White Drone</a>
                      </h3>
                      <div className="auction-id">Auction ID: BB28111</div>
                    </div>
                    
                  </div>
              
                </div>
                
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      {/* <!-- /.upcoming-auction-block --> */}

      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Closed Auction Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="closed-auction-block bg-white-smoke ptb-120">
        <div className="container ml-b-30">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  closed <span>Auction</span>
                </h2>
              
              </div>
              
            </div>
            
          </div>


          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="auction-item style-three">
                <div className="item-header">
                  <h3 className="heading"><a href="#">Digital Headphone</a></h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product3.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product4.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-status">Closed</div>
                    <div className="bid-winner">Davidames</div>
                  </div>
                </div>
               
              </div>
            
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="auction-item style-three">
                <div className="item-header">
                  <h3 className="heading"><a href="#">Realistic Watche</a></h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product7.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product8.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-status">Closed</div>
                    <div className="bid-winner">Davidames</div>
                  </div>
                </div>
               
              </div>
            
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="auction-item style-three">
                <div className="item-header">
                  <h3 className="heading"><a href="#">JBL GO White Drone</a></h3>
                  <div className="auction-id">Auction ID: BB28111</div>
                </div>
                
                <div className="item-img">
                  <a href="#">
                    <img
                      src="assets/images/auction/grid/product2.jpg"
                      alt="Thumbnail"
                    />
                    <img
                      className="prod2"
                      src="assets/images/auction/grid/product1.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                  <div className="item-price">Price: $339</div>
                </div>
                
                <div className="item-footer">
                  <div className="item-footer-top">
                    <div className="bid-status">Closed</div>
                    <div className="bid-winner">Davidames</div>
                  </div>
                </div>
                
              </div>
          
            </div>
          
          </div>
          
        </div>
      </div>
      {/* <!-- /.closed-auction-block --> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Fan Fact Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="fanfact-block ptb-120">
        <div className="container ml-b-30">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  our <span>strategy</span>
                </h2>
              
              </div>
              
              <div className="fanfact-content pd-r-70 ml-t-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate magnam excepturi maxime a est itaque harum impedit
                  amet aspernatur expedita ipsam sint ea vel illum facere, iure
                  consectetur perferendis aut explicabo quaerat ducimus aliquam
                  rem.
                </p>
                <a className="btn btn-default" href="#">Read more</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row fanfact-promo-numbers pd-t-30">
                <div className="col-4" data-animate="hg-fadeInUp">
                  <div className="promo-number">
                    <div className="odometer-wrap">
                      <div className="odometer" data-odometer-final="4589">0</div>
                    </div>
                    
                    <h4 className="promo-title">Total Auction</h4>
                    
                    <div className="animation-circle-inverse">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  
                  </div>
                  
                </div>
                
                <div className="col-4" data-animate="hg-fadeInUp">
                  <div className="promo-number number-green">
                    <div className="odometer-wrap">
                      <div className="odometer" data-odometer-final="69">0</div>
                      <sub>M</sub>
                    </div>
                    
                    <h4 className="promo-title">Running Auction</h4>
                    
                    <div className="animation-circle-inverse">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    
                  </div>
                
                </div>
                
                <div className="col-4" data-animate="hg-fadeInUp">
                  <div className="promo-number number-orange">
                    <div className="odometer-wrap">
                      <div className="odometer" data-odometer-final="58">0</div>
                      <sub>K</sub>
                    </div>
                    
                    <h4 className="promo-title">winner member</h4>
                    
                    <div className="animation-circle-inverse">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
              
                  </div>
              
                </div>
              
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      {/* <!--~~./ end fanfact block ~~--> */}


      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Auction Winner Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="auction-winner-block bg-white-smoke ptb-120">
        <div className="container ml-b-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  Top <span>Winners</span>
                </h2>
          
              </div>
          
            </div>
          
          </div>
          
          <div className="row">
            <div className="col-12">
              <div id="winner-carousel" className="owl-carousel">
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w6.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span><Gift/></span>
                      </div>
                      <div className="product-thumb">
                        <img
                          src="assets/images/winner/product/s1.png"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                
                  <div className="info">
                    <h4 className="winner-name">Martin Hook</h4>
                
                    <p className="auction-id">
                      Auction Id: <a href="#">BB28111</a>
                    </p>
                  </div>
                
                </div>
                
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w5.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span><Gift/></span>
                      </div>
                      <div className="product-thumb">
                        <img
                          src="assets/images/winner/product/s2.png"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                
                  <div className="info">
                    <h4 className="winner-name">Jobs Beker</h4>
                
                    <p className="auction-id">
                      Auction Id: <a href="#">BB28111</a>
                    </p>
                  </div>
                
                </div>
                
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w1.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span><Gift/></span>
                      </div>
                      <div className="product-thumb">
                        <img
                          src="assets/images/winner/product/s3.png"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                
                  <div className="info">
                    <h4 className="winner-name">Batin Tomas</h4>
                
                    <p className="auction-id">
                      Auction Id: <a href="#">BB28111</a>
                    </p>
                  </div>
                
                </div>
                
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w2.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span><Gift/></span>
                      </div>
                      <div className="product-thumb">
                        <img
                          src="assets/images/winner/product/s1.png"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                
                  <div className="info">
                    <h4 className="winner-name">Jhon Martin</h4>
                
                    <p className="auction-id">
                      Auction Id: <a href="#">BB28111</a>
                    </p>
                  </div>
                
                </div>
                
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w3.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span><Gift/></span>
                      </div>
                      <div className="product-thumb">
                        <img
                          src="assets/images/winner/product/s2.png"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
        
                  <div className="info">
                    <h4 className="winner-name">Alex Mason</h4>
        
                    <p className="auction-id">
                      Auction Id: <a href="#">BB28111</a>
                    </p>
                  </div>
        
                </div>
        
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <!--~~./ end auction winner block ~~--> */}

      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Win Steps Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="win-steps-block ptb-150">
        <div className="container ml-b-45">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">
                  Easy 3 Steps <span>To Win</span>
                </h2>
        
              </div>
        
            </div>
        
          </div>
        

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card-center">
                <div className="card-icon">
                  <img src="assets/images/icon/select.png" alt="Icon" />
                  <div className="step">01</div>
                </div>
                <div className="card-info">
                  <h3 className="heading">Choose product</h3>
                  <p>
                    Hendrerit aliquam vel luctus. Mauris etiam vivamus, nec
                    lorem quisque per eveniet in mollis rhonc
                  </p>
                </div>
        
              </div>
        
            </div>
        

            <div className="col-lg-4 col-md-6">
              <div className="card-center">
                <div className="card-icon">
                  <img src="assets/images/icon/auction.png" alt="Icon" />
                  <div className="step">02</div>
                </div>
                <div className="card-info">
                  <h3 className="heading">Bid product</h3>
                  <p>
                    Hendrerit aliquam vel luctus. Mauris etiam vivamus, nec
                    lorem quisque per eveniet in mollis rhonc
                  </p>
                </div>
        
              </div>
        
            </div>
        

            <div className="col-lg-4 col-md-6">
              <div className="card-center">
                <div className="card-icon">
                  <img src="assets/images/icon/trophy.png" alt="Icon" />
                  <div className="step">03</div>
                </div>
                <div className="card-info">
                  <h3 className="heading">Easy Win</h3>
                  <p>
                    Hendrerit aliquam vel luctus. Mauris etiam vivamus, nec
                    lorem quisque per eveniet in mollis rhonc
                  </p>
                </div>
        
              </div>
        
            </div>
        
          </div>
        
        </div>
        
      </div>
      {/* <!--~~./ end win steps block ~~--> */}

      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Testimonial Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="testimonial-block bg-white-smoke ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h2 className="title-main">Auction <span>Winners Say</span></h2>
          
              </div>
          
            </div>
            <div className="col-lg-4">
              <div className="btn-links-area text-right">
                <button className="btn-links btn-prev">
                  <span><LeftArrow/></span>
                </button>
                <button className="btn-links btn-next">
                  <span><RightArrow/></span>
                </button>
              </div>
          
            </div>
          </div>
          

          <div className="row">
            <div className="col-12">
              <div className="testimonail-carousel-main">
                <div id="testimonail-carousel" className="owl-carousel">
                  <div className="testimonial-item">
                    <div className="client-header">
                      <div className="client-thumb">
                        <div className="shape-thumb">
                          <img
                            src="assets/images/testimonials/1.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                  
                      <div className="icon">
                        <span><Qoutes/></span>
                      </div>
                    </div>
                  
                    <div className="details">
                      <p>
                        Augue posuere, lacus molestie justo, fermentum eget nisl
                        quam pedfringilla ante sapien id est adipiscing. Mauris
                        tristique magna sit.
                      </p>
                    </div>
                  
                    <div className="client-info">
                      <h4 className="client-name"><a href="#">David James</a></h4>
                  
                      <p className="client-designation">CEO Thesoftking</p>
                    </div>
                  
                  </div>
                  

                  <div className="testimonial-item">
                    <div className="client-header">
                      <div className="client-thumb">
                        <div className="shape-thumb">
                          <img
                            src="assets/images/testimonials/2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                   
                      <div className="icon">
                        <span><Qoutes/></span>
                      </div>
                    </div>
                   
                    <div className="details">
                      <p>
                        Augue posuere, lacus molestie justo, fermentum eget nisl
                        quam pedfringilla ante sapien id est adipiscing. Mauris
                        tristique magna sit.
                      </p>
                    </div>
                  
                    <div className="client-info">
                      <h4 className="client-name"><a href="#">David James</a></h4>
                  
                      <p className="client-designation">CEO Thesoftking</p>
                    </div>
                  
                  </div>
                  

                  <div className="testimonial-item">
                    <div className="client-header">
                      <div className="client-thumb">
                        <div className="shape-thumb">
                          <img
                            src="assets/images/testimonials/3.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    
                      <div className="icon">
                        <span><Qoutes/></span>
                      </div>
                    </div>
                    
                    <div className="details">
                      <p>
                        Augue posuere, lacus molestie justo, fermentum eget nisl
                        quam pedfringilla ante sapien id est adipiscing. Mauris
                        tristique magna sit.
                      </p>
                    </div>
        
                    <div className="client-info">
                      <h4 className="client-name"><a href="#">David James</a></h4>
        
                      <p className="client-designation">CEO Thesoftking</p>
                    </div>
        
                  </div>
        
                </div>
        
              </div>
        
            </div>
        
          </div>
        
        </div>
        
      </div>
      {/* <!--~~./ end testimonial block ~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Work brand Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <div className="work-brand-block ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!--~~ Start Brands Carousel ~~--> */}
              <div className="brands-carousel-main" data-animate="hg-fadeInUp">
                <div className="brands-carousel owl-carousel">
                  <div className="brands-link">
                    <img src="assets/images/brand/1.png" alt="logo" />
                  </div>
                  <div className="brands-link">
                    <img src="assets/images/brand/2.png" alt="logo" />
                  </div>
                  <div className="brands-link">
                    <img src="assets/images/brand/3.png" alt="logo" />
                  </div>
                  <div className="brands-link">
                    <img src="assets/images/brand/4.png" alt="logo" />
                  </div>
                </div>
              </div>
              {/* <!--~./ end brands carousel ~--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!--~./ end work brand block ~--> */}

     
    </div>
  );
};

export default Home;
