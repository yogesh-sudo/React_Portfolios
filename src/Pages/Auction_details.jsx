import React from 'react'

const Auction_details = () => {
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
                    <h2 className="page-title">Auction Details</h2>
                  </div>{/*~~./ page-header-caption ~~*/}
                  <div className="breadcrumb-area">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                      <li className="breadcrumb-item active">Auction Details</li>
                    </ol>
                  </div>{/*~~./ breadcrumb-area ~~*/}
                </div>{/*~~./ page-header-content ~~*/}
              </div>
            </div>
          </div>{/*~~./ end container ~~*/}
        </div>{/*~~./ end page title area ~~*/} 
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Product Details Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="product-details-block ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-main-thumb-area">
                  <div id="product-main-thumb" className="product-main-thumb">
                    <img src="assets/images/auction/single/productbig1.jpg" alt="big-1" />
                  </div>
                  <div className="product-slider-area">
                    <div className="owl-carousel single-product-slider carousel-nav-align-center">
                      <div className="active-gallery">
                        <img src="assets/images/auction/single/productbig1.jpg" alt="thumbnail" />
                      </div>
                      <div className="active-gallery">
                        <img src="assets/images/auction/single/productbig2.jpg" alt="thumbnail" />
                      </div>
                      <div className="active-gallery">
                        <img src="assets/images/auction/single/productbig1.jpg" alt="thumbnail" />
                      </div>
                      <div className="active-gallery">
                        <img src="assets/images/auction/single/productbig2.jpg" alt="thumbnail" />
                      </div>
                      <div className="active-gallery">
                        <img src="assets/images/auction/single/productbig1.jpg" alt="thumbnail" />
                      </div>
                    </div>
                  </div>
                </div>{/* /.product-main-thumb-area */}
              </div>
              <div className="col-lg-6">
                <div className="auction-item-details md-mrt-55">
                  <h3 className="heading">JBL GO 2 Bluetooth Speaker</h3>
                  <div className="item-bid-price-time">
                    <div className="bid-price">$0.08</div>
                    <div className="bid-timer-area">
                      <div id="bid_counter2" className="bid-timer" />
                      <p>Waiting For Bid</p>
                    </div>
                    <div className="bid-button">
                      <a className="btn btn-default" href="#">Bid Now</a>
                    </div>
                  </div>{/* /.item-bid-price-time */}
                  <div className="item-info-area">
                    <div className="filter-info-tab">
                      <ul className="nav nav-tabs" role="tablist">
                        <li>
                          <a className="active" data-toggle="tab" href="#auction_info" role="tab">Auction Information</a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#auction_history" role="tab">Bidding History</a>
                        </li>
                      </ul>
                    </div>{/*~./ end filter info tab ~*/}
                    <div className="tab-content filter-info-tab-content">
                      {/*~~~~~ Start Tab Pane ~~~~~*/} 
                      <div className="tab-pane fade active show" id="auction_info" role="tabpanel" data-animate="hg-fadeInUp"> 
                        <ul className="item-info">
                          <li>Auction ID : <span>BB28105</span></li>
                          <li>Price : <span>$8500.00</span></li>
                          <li>Shipping &amp; Processing Fees : <span>$50.00</span></li>
                          <li>Bid Reset Time : <span>20 Second</span></li>
                          <li>Credit used per bid : <span>10x</span></li>
                          <li>Auction Type : <span>$0.2</span></li>
                          <li>Delivered In : <span>8-10 days</span></li>
                        </ul>
                      </div>{/*~./ end tab pane ~*/}
                      {/*~~~~~ Start Tab Pane ~~~~~*/} 
                      <div className="tab-pane fade" id="auction_history" role="tabpanel"> 
                        <div className="table-responsive auction-history-table" data-animate="hg-fadeInUp">
                          <table className="table">
                            <thead>
                              <tr>
                                <th className="history-price">Price</th> 
                                <th className="history-time">Bid Time</th> 
                                <th className="history-user">User</th> 
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="history-price">$0.10</td>
                                <td className="history-time">22-01-2020 16:38:30</td>
                                <td className="history-user">KishuPatel</td>
                              </tr>
                              <tr>
                                <td className="history-price">$0.10</td>
                                <td className="history-time">22-01-2020 16:38:30</td>
                                <td className="history-user">KishuPatel</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>{/* /.auction-history-table */}
                      </div>{/*~./ end tab pane ~*/}
                    </div>{/* /.filter-pricing-tab-content */}
                  </div>
                </div>{/* /.auction-item-details */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="product-description pd-t-120">
                  <div className="product-des-header">
                    <h2 className="section-heading">product Overview</h2>
                  </div>
                  <div className="product-des-info">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis molestiae dolore, quaerat illo adipisci fugiat voluptatibus eligendi provident animi qui totam commodi a dolor saepe labore tempore. Consequuntur doloremque accusantium aspernatur illo labore quisquam consectetur tenetur temporibus, eos ad, fuga cumque suscipit quasi iure veniam, omnis in iste ipsa optio. Sint voluptates sed inventore saepe, obcaecati dolores rerum aliquid eaque.</p>
                    <div className="table-responsive product-info-table" data-animate="hg-fadeInUp">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="info-title">Sales Package</td>
                            <td className="info-dsc">Car Charger, Instruction Manual</td>
                          </tr>
                          <tr>
                            <td className="info-title">Model Name</td>
                            <td className="info-dsc">CP-CADM2/BC</td>
                          </tr>
                          <tr>
                            <td className="info-title">Fast Charge</td>
                            <td className="info-dsc">Yes</td>
                          </tr>
                          <tr>
                            <td className="info-title">USB Port</td>
                            <td className="info-dsc">2</td>
                          </tr>
                          <tr>
                            <td className="info-title">Width</td>
                            <td className="info-dsc">28.4 mm</td>
                          </tr>
                          <tr>
                            <td className="info-title">Height</td>
                            <td className="info-dsc">68.6 mm</td>
                          </tr>
                          <tr>
                            <td className="info-title">Other Features</td>
                            <td className="info-dsc">Over-Charge Current Protection, Short-circuit protection, Temperature Monitoring, Charge the Portable USB Devices</td>
                          </tr>
                          <tr>
                            <td className="info-title">Power Output</td>
                            <td className="info-dsc">4.8 amp</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/* /.auction-history-table */}
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>{/*~./ end product details ~*/}  
        </>
    )
}

export default Auction_details
