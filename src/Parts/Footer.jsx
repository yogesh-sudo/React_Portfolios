import React from 'react'

const Footer = () => {
    return (
        <>
          {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Site Footer
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <footer class="site-footer pd-t-120">
        {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Start Footer Widget Area
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
        <div class="footer-widget-area">
          <div class="container">
            <div class="row">
              
              <div class="col-lg-4">
                <aside class="widget widget_about">
                  <h2 class="widget-title">About Us</h2>
                  <div class="widget-content">
                    <p>
                      Dempor pede libero dapi useu class venenatis ut bibendum
                      quam ut nibh necnullam. Nonhon Pede mollis vel vitae
                      dolorurpis
                    </p>
                    <div class="contact-info">
                      <div class="icon">
                        <span class="icon-paperplane"></span>
                      </div>
                      <div class="info">
                        <p>121 King St, Melbourne VIC 3000, Australia</p>
                      </div>
                    </div>
                    
                    <div class="contact-info">
                      <div class="icon">
                        <span class="icon-phone2"></span>
                      </div>
                      <div class="info">
                        <p>(+880)012 351 542</p>
                      </div>
                    </div>
                    
                    <div class="contact-info">
                      <div class="icon">
                        <span class="icon-mail5"></span>
                      </div>
                      <div class="info">
                        <p>
                          <a href="mailto:diddodemo@gmail.com"
                            >diddodemo@gmail.com</a
                          >
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </aside>
              </div>
              

              
              <div class="col-lg-2">
                <aside class="widget widget_links">
                  <h2 class="widget-title">Quick Link</h2>
                  <div class="widget-content">
                    <ul>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Affiliate Program</a></li>
                      <li><a href="#">Lawyer Consulting</a></li>
                      <li><a href="#">Sorteo Licenses</a></li>
                      <li><a href="#">Quick Start Guide</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </aside>
              </div>
              

              
              <div class="col-lg-2">
                <aside class="widget widget_links">
                  <h2 class="widget-title">Help Center</h2>
                  <div class="widget-content">
                    <ul>
                      <li><a href="#">Help centre</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Tutorials</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Borrow</a></li>
                      <li><a href="#">Complaints Policy</a></li>
                    </ul>
                  </div>
                </aside>
              </div>
              

              
              <div class="col-lg-4">
                <aside class="widget widget_payment">
                  <h2 class="widget-title">Payment Option</h2>
                  <div class="widget-content">
                    <p>
                      Dempor pede libero dapi useu class venenatis ut bibendum
                      quam ut nibh necnullam. Nonhon Pede mollis vel vitae
                      dolorurpis
                    </p>
                    <div class="payment-barcode-area">
                      <div class="payment-accepted">
                        <img
                          src="assets/images/payment/wallet-logo.png"
                          alt="Wallet"
                        />
                        <p class="title">Accepted Here</p>
                      </div>
                      <div class="barcode-thumb">
                        <img
                          src="assets/images/payment/barcode.png"
                          alt="Bar Code"
                        />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              {/* <!--~./ end payment widget ~--> */}
            </div>
          </div>
        </div>
        {/* <!--~./ end footer widgets area ~--> */}

        {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Start Footer Bottom Area
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
        <div class="footer-bottom-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="copyright-text text-center">
                  <p>Copyright © 2020 . All rights reserved</p>
                </div>
              
              </div>
              
            </div>
          </div>
        </div>
        {/* <!--~./ end footer bottom area ~--> */}
      </footer>
      {/* <!--~./ end site footer ~--> */}   
        </>
    )
}

export default Footer
