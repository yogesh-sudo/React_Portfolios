import React from 'react'
const About = () => {
    return (
        <>
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Page Title Area
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="page-title-area bg-white-smoke">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-header-content text-center">
                <div className="page-header-caption">
                  <h2 className="page-title">About us</h2>
                </div>{/*~~./ page-header-caption ~~*/}
                <div className="breadcrumb-area">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                    <li className="breadcrumb-item active">About Us</li>
                  </ol>
                </div>{/*~~./ breadcrumb-area ~~*/}
              </div>{/*~~./ page-header-content ~~*/}
            </div>
          </div>
        </div>{/*~~./ end container ~~*/}
      </div>{/*~~./ end page title area ~~*/}
          {/* Hell   <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start About Us Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="about-us-block ptb-120">
        <div className="container">
          {/* Title Row */}
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="mock-up-thumb md-mrb-55">
                <img src="assets/images/about/about.png" alt="About Mock" />
              </div>{/* /.mock-up-block */}
            </div>{/* /.col-lg-5 */}
            <div className="col-lg-6">
              <div className="about-text-content">
                <div className="section-title">
                  <h2 className="title-main">About <span>Biddo</span></h2>{/* /.title-main */}
                </div>{/* /.section-title */}
                <div className="about-info-list">
                  <div className="single-info">
                    <div className="icon">
                      <span className="icon-like1" />
                    </div>{/* /.icon */}
                    <div className="info">
                      <h3 className="heading">Why Choose Biddo</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                    </div>{/* /.info */}
                  </div>{/* /.single-info */}
                  <div className="single-info">
                    <div className="icon">
                      <span className="icon-bookmark1" />
                    </div>{/* /.icon */}
                    <div className="info">
                      <h3 className="heading">Daily Bid &amp; Auction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                    </div>{/* /.info */}
                  </div>{/* /.single-info */}
                  <div className="single-info">
                    <div className="icon">
                      <span className="icon-review-1" />
                    </div>{/* /.icon */}
                    <div className="info">
                      <h3 className="heading">Satisfaction guarate</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                    </div>{/* /.info */}
                  </div>{/* /.single-info */}
                </div>
              </div>
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </div>{/*~~./ end about us block ~~*/}
      
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Fan Fact Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="fanfact-block bg-white-smoke ptb-120">
        <div className="container ml-b-30">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="title-main" data-animate="hg-fadeInUp">our <span>strategy</span></h2>{/* /.title-main */}
              </div>{/* /.section-title */}
              <div className="fanfact-content pd-r-70 ml-t-10">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magnam excepturi maxime a est itaque harum impedit amet aspernatur expedita ipsam sint ea vel illum facere, iure consectetur perferendis aut explicabo quaerat ducimus aliquam rem.</p>
                <a className="btn btn-default" href="#">Read more</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row fanfact-promo-numbers pd-t-30">
                <div className="col-4" data-animate="hg-fadeInUp">
                  <div className="promo-number">
                    <div className="odometer-wrap"><div className="odometer" data-odometer-final={4589}>0</div></div>{/* /.odometer-wrap */}
                    <h4 className="promo-title">Total Auction</h4>{/* /.promo-title */}
                    <div className="animation-circle-inverse">
                      <span />
                      <span />
                      <span />
                    </div>{/* /.animation-circle-inverse */}
                  </div>{/* /.promo-number */}
                </div>{/* /.col-lg-4 */}  
                <div className="col-4" data-animate="hg-fadeInUp">
                  <div className="promo-number number-green">
                    <div className="odometer-wrap"><div className="odometer" data-odometer-final={69}>0</div><sub>M</sub></div>{/* /.odometer-wrap */}
                    <h4 className="promo-title">Running Auction</h4>{/*  /.promo-title */}
                    <div className="animation-circle-inverse">
                      <span />
                      <span />
                      <span />
                    </div>{/* /.animation-circle-inverse */}
                  </div>{/* /.promo-number */}
                </div>{/* /.col-lg-4 */}  
                <div className="col-4" data-animate="hg-fadeInUp">
                  <div className="promo-number number-orange">
                    <div className="odometer-wrap"><div className="odometer" data-odometer-final={58}>0</div><sub>K</sub></div>{/* /.odometer-wrap */}
                    <h4 className="promo-title">winner member</h4>{/*  /.promo-title */}
                    <div className="animation-circle-inverse">
                      <span />
                      <span />
                      <span />
                    </div>{/* /.animation-circle-inverse */}
                  </div>{/* /.promo-number */}
                </div>{/* /.col-lg-4 */}   
              </div>{/* /.fanfact-promo-numbers */}
            </div>
          </div>
        </div>{/* /.container */}
      </div>{/*~~./ end fanfact block ~~*/}
       {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Auction Winner Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="auction-winner-block ptb-120">
        <div className="container ml-b-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2 className="title-main" data-animate="hg-fadeInUp">Top <span>Winners</span></h2>{/* /.title-main */}
              </div>{/* /.section-title */}
            </div>{/* /.col-lg-1 */}
          </div>{/* /.row */}
          <div className="row">
            <div className="col-12">
              <div id="winner-carousel" className="owl-carousel">
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w6.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span className="icon-gift" />
                      </div>
                      <div className="product-thumb">
                        <img src="assets/images/winner/product/s1.png" alt="product" />
                      </div>
                    </div>
                  </div>{/* /.winner-thumb */}
                  <div className="info">
                    <h4 className="winner-name">Martin Hook</h4>{/* /.client-name */}
                    <p className="auction-id">Auction Id: <a href="#">BB28111</a></p>
                  </div>{/* /.info */}
                </div>{/* /.winner-item */}
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w5.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span className="icon-gift" />
                      </div>
                      <div className="product-thumb">
                        <img src="assets/images/winner/product/s2.png" alt="product" />
                      </div>
                    </div>
                  </div>{/* /.winner-thumb */}
                  <div className="info">
                    <h4 className="winner-name">Jobs Beker</h4>{/* /.client-name */}
                    <p className="auction-id">Auction Id: <a href="#">BB28111</a></p>
                  </div>{/* /.info */}
                </div>{/* /.winner-item */}
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w1.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span className="icon-gift" />
                      </div>
                      <div className="product-thumb">
                        <img src="assets/images/winner/product/s3.png" alt="product" />
                      </div>
                    </div>
                  </div>{/* /.winner-thumb */}
                  <div className="info">
                    <h4 className="winner-name">Batin Tomas</h4>{/* /.client-name */}
                    <p className="auction-id">Auction Id: <a href="#">BB28111</a></p>
                  </div>{/* /.info */}
                </div>{/* /.winner-item */}
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w2.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span className="icon-gift" />
                      </div>
                      <div className="product-thumb">
                        <img src="assets/images/winner/product/s1.png" alt="product" />
                      </div>
                    </div>
                  </div>{/* /.winner-thumb */}
                  <div className="info">
                    <h4 className="winner-name">Jhon Martin</h4>{/* /.client-name */}
                    <p className="auction-id">Auction Id: <a href="#">BB28111</a></p>
                  </div>{/* /.info */}
                </div>{/* /.winner-item */}
                <div className="winner-item">
                  <div className="winner-thumb">
                    <img src="assets/images/winner/w3.jpg" alt="img" />
                    <div className="winner-auction-product">
                      <div className="product-icon">
                        <span className="icon-gift" />
                      </div>
                      <div className="product-thumb">
                        <img src="assets/images/winner/product/s2.png" alt="product" />
                      </div>
                    </div>
                  </div>{/* /.winner-thumb */}
                  <div className="info">
                    <h4 className="winner-name">Alex Mason</h4>{/* /.client-name */}
                    <p className="auction-id">Auction Id: <a href="#">BB28111</a></p>
                  </div>{/* /.info */}
                </div>{/* /.winner-item */}
              </div>
            </div>
          </div>
        </div>{/* /.container */}
      </div>{/*~~./ end auction winner block ~~*/}
       {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Testimonial Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="testimonial-block bg-white-smoke ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h2 className="title-main">Auction <span>Winners Say</span></h2>{/* /.title-main */}
              </div>{/* /.section-title */}
            </div>
            <div className="col-lg-4">
              <div className="btn-links-area text-right">
                <button className="btn-links btn-prev">
                  <span className="icon-arrows" />
                </button>
                <button className="btn-links btn-next">
                  <span className="icon-arrows-1" />
                </button>
              </div>{/* /.btn-links-area */}
            </div>
          </div>{/* /.row */}
          <div className="row">
            <div className="col-12">
              <div className="testimonail-carousel-main">
                <div id="testimonail-carousel" className="owl-carousel">
                  <div className="testimonial-item">
                    <div className="client-header">
                      <div className="client-thumb">
                        <div className="shape-thumb">
                          <img src="assets/images/testimonials/1.jpg" alt="img" />
                        </div>
                      </div>{/* /.client-thumb */}
                      <div className="icon"><span className="icon-quotes-right" /></div>
                    </div>{/* /.client-header */}
                    <div className="details">
                      <p>Augue posuere, lacus molestie justo, fermentum eget nisl quam pedfringilla ante sapien id est adipiscing. Mauris tristique magna sit. </p>
                    </div>{/* /.details */}
                    <div className="client-info">
                      <h4 className="client-name"><a href="#">David James</a></h4>{/* /.client-name */}
                      <p className="client-designation">CEO Thesoftking</p>
                    </div>{/* /.client-info */}
                  </div>{/* /.testimonial-item */}  
                  <div className="testimonial-item">
                    <div className="client-header">
                      <div className="client-thumb">
                        <div className="shape-thumb">
                          <img src="assets/images/testimonials/2.jpg" alt="img" />
                        </div>
                      </div>{/* /.client-thumb */}
                      <div className="icon"><span className="icon-quotes-right" /></div>
                    </div>{/* /.client-header */}
                    <div className="details">
                      <p>Augue posuere, lacus molestie justo, fermentum eget nisl quam pedfringilla ante sapien id est adipiscing. Mauris tristique magna sit. </p>
                    </div>{/* /.details */}
                    <div className="client-info">
                      <h4 className="client-name"><a href="#">David James</a></h4>{/* /.client-name */}
                      <p className="client-designation">CEO Thesoftking</p>
                    </div>{/* /.client-info */}
                  </div>{/* /.testimonial-item */}  
                  <div className="testimonial-item">
                    <div className="client-header">
                      <div className="client-thumb">
                        <div className="shape-thumb">
                          <img src="assets/images/testimonials/3.jpg" alt="img" />
                        </div>
                      </div>{/* /.client-thumb */}
                      <div className="icon"><span className="icon-quotes-right" /></div>
                    </div>{/* /.client-header */}
                    <div className="details">
                      <p>Augue posuere, lacus molestie justo, fermentum eget nisl quam pedfringilla ante sapien id est adipiscing. Mauris tristique magna sit. </p>
                    </div>{/* /.details */}
                    <div className="client-info">
                      <h4 className="client-name"><a href="#">David James</a></h4>{/* /.client-name */}
                      <p className="client-designation">CEO Thesoftking</p>
                    </div>{/* /.client-info */}
                  </div>{/* /.testimonial-item */}  
                </div>{/* /#testimonail-carousel */}
              </div>{/* /.testimonail-carousel-main */}
            </div>{/* /.col-12 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </div>{/*~~./ end testimonial block ~~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Work brand Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="work-brand-block ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*~~ Start Brands Carousel ~~*/}
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
              </div>{/*~./ end brands carousel ~*/}
            </div>
          </div>
        </div>
      </div>{/*~./ end work brand block ~*/}
        </>
    )
}

export default About
