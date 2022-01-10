import React from 'react'

const Categories = () => {
    return (
        <div>
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Page Title Area
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="page-title-area bg-white-smoke">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content text-center">
                  <div className="page-header-caption">
                    <h2 className="page-title">Auction Categories</h2>
                  </div>{/*~~./ page-header-caption ~~*/}
                  <div className="breadcrumb-area">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                      <li className="breadcrumb-item active">Categories</li>
                    </ol>
                  </div>{/*~~./ breadcrumb-area ~~*/}
                </div>{/*~~./ page-header-content ~~*/}
              </div>
            </div>
          </div>{/*~~./ end container ~~*/}
        </div>{/*~~./ end page title area ~~*/} 
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Auction Product Categories
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="auction-product-categories ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="sidebar-items">
                  <div className="product-cat-menu-area">
                    <ul className="product-cat-menu">
                      <li><a href="#">Farm &amp; Agriculture <span>05</span></a></li>
                      <li><a href="#">Decorative Art <span>22</span></a></li>
                      <li><a href="#">Dolls, Bears &amp; Toys <span>15</span></a></li>
                      <li><a href="#">Fine Art <span>10</span></a></li>
                      <li><a href="#">Jewelry <span>35</span></a></li>
                      <li><a href="#">Vehicles, Marine <span>22</span></a></li>
                      <li><a href="#">Industrial Machinery <span>50</span></a></li>
                      <li><a href="#">Real Estate <span>12</span></a></li>
                    </ul>
                  </div>{/* /.product-cat-menu-area */}
                </div>{/* /.sidebar-items */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-8 auction-items-list md-mrt-60">
                <div className="auction-item auction-list">
                  <div className="item-img">
                    <a href="#">
                      <img src="assets/images/auction/grid/product1.jpg" alt="Thumbnail" />
                      <img className="prod2" src="assets/images/auction/grid/product2.jpg" alt="Thumbnail" />
                    </a>
                    <div className="bid-max">3 x <span className="icon-user-1" /></div>
                    <div className="item-price">Price: $339</div>
                  </div>{/* /.item-img */}
                  <div className="auction-info">
                    <h3 className="heading"><a href="#">JBL GO Digital Drone</a></h3>
                    <div className="auction-id">Auction ID: BB28111</div>
                    <div className="item-footer">
                      <div className="item-footer-top">
                        <div className="bid-price">$0.08</div>
                        <div className="bid-timer-area">
                          <div id="bid_counter1" className="bid-timer" />
                          <p>Waiting For Bid</p>
                        </div>
                      </div>
                      <div className="bid-button">
                        <a className="btn btn-default" href="#">Bid Now</a>
                      </div>
                    </div>{/* /.item-footer */}
                  </div>{/* /.auction-info */}
                </div>{/* /.auction-item */}
                <div className="auction-item auction-list">
                  <div className="item-img">
                    <a href="#">
                      <img src="assets/images/auction/grid/product4.jpg" alt="Thumbnail" />
                      <img className="prod2" src="assets/images/auction/grid/product3.jpg" alt="Thumbnail" />
                    </a>
                    <div className="bid-max">3 x <span className="icon-user-1" /></div>
                    <div className="item-price">Price: $339</div>
                  </div>{/* /.item-img */}
                  <div className="auction-info">
                    <h3 className="heading"><a href="#">BBB Bluetooth Headphone</a></h3>
                    <div className="auction-id">Auction ID: BB28111</div>
                    <div className="item-footer">
                      <div className="item-footer-top">
                        <div className="bid-price">$0.66</div>
                        <div className="bid-timer-area">
                          <div id="bid_counter2" className="bid-timer" />
                          <p>Waiting For Bid</p>
                        </div>
                      </div>
                      <div className="bid-button">
                        <a className="btn btn-default" href="#">Bid Now</a>
                      </div>
                    </div>{/* /.item-footer */}
                  </div>{/* /.auction-info */}
                </div>{/* /.auction-item */}
                <div className="auction-item auction-list">
                  <div className="item-img">
                    <a href="#">
                      <img src="assets/images/auction/grid/product5.jpg" alt="Thumbnail" />
                      <img className="prod2" src="assets/images/auction/grid/product6.jpg" alt="Thumbnail" />
                    </a>
                    <div className="bid-max">3 x <span className="icon-user-1" /></div>
                    <div className="item-price">Price: $339</div>
                  </div>{/* /.item-img */}
                  <div className="auction-info">
                    <h3 className="heading"><a href="#">Android Mobile Phone</a></h3>
                    <div className="auction-id">Auction ID: BB28111</div>
                    <div className="item-footer">
                      <div className="item-footer-top">
                        <div className="bid-price">$0.55</div>
                        <div className="bid-timer-area">
                          <div id="bid_counter3" className="bid-timer" />
                          <p>Waiting For Bid</p>
                        </div>
                      </div>
                      <div className="bid-button">
                        <a className="btn btn-default" href="#">Bid Now</a>
                      </div>
                    </div>{/* /.item-footer */}
                  </div>{/* /.auction-info */}
                </div>{/* /.auction-item */}
                <div className="auction-item auction-list">
                  <div className="item-img">
                    <a href="#">
                      <img src="assets/images/auction/grid/product3.jpg" alt="Thumbnail" />
                      <img className="prod2" src="assets/images/auction/grid/product4.jpg" alt="Thumbnail" />
                    </a>
                    <div className="bid-max">3 x <span className="icon-user-1" /></div>
                    <div className="item-price">Price: $339</div>
                  </div>{/* /.item-img */}
                  <div className="auction-info">
                    <h3 className="heading"><a href="#">Digital Headphone</a></h3>
                    <div className="auction-id">Auction ID: BB28111</div>
                    <div className="item-footer">
                      <div className="item-footer-top">
                        <div className="bid-price">$0.15</div>
                        <div className="bid-timer-area">
                          <div id="bid_counter4" className="bid-timer" />
                          <p>Waiting For Bid</p>
                        </div>
                      </div>
                      <div className="bid-button">
                        <a className="btn btn-default" href="#">Bid Now</a>
                      </div>
                    </div>{/* /.item-footer */}
                  </div>{/* /.auction-info */}
                </div>{/* /.auction-item */}
                <div className="auction-item auction-list">
                  <div className="item-img">
                    <a href="#">
                      <img src="assets/images/auction/grid/product7.jpg" alt="Thumbnail" />
                      <img className="prod2" src="assets/images/auction/grid/product8.jpg" alt="Thumbnail" />
                    </a>
                    <div className="bid-max">3 x <span className="icon-user-1" /></div>
                    <div className="item-price">Price: $339</div>
                  </div>{/* /.item-img */}
                  <div className="auction-info">
                    <h3 className="heading"><a href="#">Realistic Watche</a></h3>
                    <div className="auction-id">Auction ID: BB28111</div>
                    <div className="item-footer">
                      <div className="item-footer-top">
                        <div className="bid-price">$0.15</div>
                        <div className="bid-timer-area">
                          <div id="bid_counter5" className="bid-timer" />
                          <p>Waiting For Bid</p>
                        </div>
                      </div>
                      <div className="bid-button">
                        <a className="btn btn-default" href="#">Bid Now</a>
                      </div>
                    </div>{/* /.item-footer */}
                  </div>{/* /.auction-info */}
                </div>{/* /.auction-item */}
                <div className="auction-item auction-list">
                  <div className="item-img">
                    <a href="#">
                      <img src="assets/images/auction/grid/product2.jpg" alt="Thumbnail" />
                      <img className="prod2" src="assets/images/auction/grid/product1.jpg" alt="Thumbnail" />
                    </a>
                    <div className="bid-max">3 x <span className="icon-user-1" /></div>
                    <div className="item-price">Price: $339</div>
                  </div>{/* /.item-img */}
                  <div className="auction-info">
                    <h3 className="heading"><a href="#">JBL GO White Drone</a></h3>
                    <div className="auction-id">Auction ID: BB28111</div>
                    <div className="item-footer">
                      <div className="item-footer-top">
                        <div className="bid-price">$0.33</div>
                        <div className="bid-timer-area">
                          <div id="bid_counter6" className="bid-timer" />
                          <p>Waiting For Bid</p>
                        </div>
                      </div>
                      <div className="bid-button">
                        <a className="btn btn-default" href="#">Bid Now</a>
                      </div>
                    </div>{/* /.item-footer */}
                  </div>{/* /.auction-info */}
                </div>{/* /.auction-item */}
              </div>{/* /.col-lg-8 */}
            </div>{/* /.row */}
            <div className="row">
              <div className="col-12">
                {/*~~~~~ Start Paging Navigation ~~~~~*/}
                <nav className="paging-navigation paging-center pd-t-60">
                  <ul className="nav-links">                                   
                    <li><a href="#">01</a></li>
                    <li className="active"><a href="#" className="page-numbers">02</a></li>
                    <li><a href="#" className="page-numbers">03</a></li>
                    <li className="nav-next">
                      <a href="#"><span className="icon-next1" /></a>
                    </li>  
                  </ul>
                </nav>{/*~./ end paging navigation ~*/}
              </div>
            </div>
          </div>    
        </div>{/*~./ end auction product categories ~*/}
      </div>
    )
}

export default Categories
