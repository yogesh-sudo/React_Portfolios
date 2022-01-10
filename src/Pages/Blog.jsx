import React from 'react'

const Blog = () => {
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
                    <h2 className="page-title">Announcement</h2>
                  </div>{/*~~./ page-header-caption ~~*/}
                  <div className="breadcrumb-area">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                      <li className="breadcrumb-item active">Announcement</li>
                    </ol>
                  </div>{/*~~./ breadcrumb-area ~~*/}
                </div>{/*~~./ page-header-content ~~*/}
              </div>
            </div>
          </div>{/*~~./ end container ~~*/}
        </div>{/*~~./ end page title area ~~*/} 
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Blog Page Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="blog-page-block ptb-120">
          <div className="container">
            {/* Content Row */}
            <div className="row">
              <div className="col-lg-8">
                {/* Blog Items */}
                <div className="blog-latest-items">
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/1.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">Jar contains a certain number of lollies</a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/2.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">Winner of auction auction will get gift</a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/3.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">You are bidding for the money</a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/4.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">No minimum bid price was set</a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/1.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">Has been broadly broadly successful</a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/2.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">Suffered a little from lack of competition</a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                  <article className="post post-list">
                    <div className="post-thumb-area">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="assets/images/blog/post/grid/5.jpg" alt="Blog Image" />
                        </a>
                      </figure>{/* /.post-thumb */}
                    </div>{/* /.post-thumb-area */}
                    <div className="post-details">  
                      <div className="entry-header">
                        <div className="entry-meta-content">
                          <div className="entry-author">By - <a href="#">Max Jusin</a></div>
                          <div className="entry-date">On  <span>August 25,2019</span></div>
                        </div>{/* /.entry-meta-content */}
                        <h2 className="entry-title"><a href="blog-single.html">Amet pulvinar varius phare trasem tristique </a></h2>{/* /.entry-title */}
                      </div>{/* /.entry-header */}
                      <div className="entry-title-area">
                        <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id.</p>
                        <a className="read-more" href="blog-single.html">Read More</a>
                      </div>{/* /.entry-title-area */}
                    </div>{/* /.post-details */}
                  </article>{/* /.post */}
                </div>{/*  /.blog-latest-items */}
                {/*~~~~~ Start Paging Navigation ~~~~~*/}
                <nav className="paging-navigation pd-t-100">
                  <ul className="nav-links">                                   
                    <li><a href="#">01</a></li>
                    <li className="active"><a href="#" className="page-numbers">02</a></li>
                    <li><a href="#" className="page-numbers">03</a></li>
                    <li className="nav-next">
                      <a href="#"><span className="icon-next1" /></a>
                    </li>  
                  </ul>
                </nav>{/*~./ end paging navigation ~*/}
              </div>{/*  /.col-lg-8 */}
              <div className="col-lg-4">
                {/* Sidebar Items */}
                <div className="sidebar-items">
                  {/*~~~~~ Start Search Widget ~~~~~*/}
                  <aside className="widget widget_search">
                    <h4 className="widget-title">search in here</h4>{/* /.widget-title */}
                    <form className="search-form" name="search">
                      <div className="input-group">
                        <input className="form-controller" placeholder="Search Keyword.." />
                        <button className="btn-search"><i className="fa fa-search" /></button>
                      </div>{/* /.input-group */}
                    </form>{/* /.search-form */}
                  </aside>{/*~./ end search widget ~*/}
                  {/*~~~~~ Start Categories Widget ~~~~~*/}
                  <aside className="widget widget_categories">
                    <h4 className="widget-title">news categories</h4>{/* /.widget-title */}
                    <div className="widget-content">
                      <ul>
                        <li><a href="#">vas content</a></li>
                        <li><a href="#">internet &amp; Data connectivity</a></li>
                        <li><a href="#">data center</a></li>
                        <li><a href="#">dfn tracker</a></li>
                        <li><a href="#">network setup</a></li>
                      </ul>
                    </div>{/* /.widget-content */}
                  </aside>{/*~./ end categories widget ~*/}
                  {/*~~~~~ Start Post List Widget~~~~~*/}
                  <aside className="widget widget-post-list">
                    <h4 className="widget-title">recent post</h4>{/* /.widget-title */}
                    <div className="widget-content">
                      <article className="post">
                        <div className="post-thumb">
                          <img src="assets/images/widget/post/wp_1.jpg" alt="Thumbnail" />
                        </div>
                        <div className="post-details">
                          <h3 className="entry-title">
                            <a href="single-post.html">France Prepares to Stake Its Place in World</a>
                          </h3>{/*./ entry-title */}
                          <div className="entry-meta-content">
                            <div className="entry-date">
                              <span className="icon-clock1" />
                              25 May 2019
                            </div>{/*./ entry-date */}
                          </div>{/*./ entry-meta-content */}
                        </div>
                      </article>{/*./ end post */}
                      <article className="post">
                        <div className="post-thumb">
                          <img src="assets/images/widget/post/wp_2.jpg" alt="Thumbnail" />
                        </div>
                        <div className="post-details">
                          <h3 className="entry-title">
                            <a href="single-post.html">Security Council Diplomats to Have Lunch With Trump</a>
                          </h3>{/*./ entry-title */}
                          <div className="entry-meta-content">
                            <div className="entry-date">
                              <span className="icon-clock1" />
                              25 May 2019
                            </div>{/*./ entry-date */}
                          </div>{/*./ entry-meta-content */}
                        </div>
                      </article>{/*./ end post */}
                      <article className="post">
                        <div className="post-thumb">
                          <img src="assets/images/widget/post/wp_3.jpg" alt="Thumbnail" />
                        </div>
                        <div className="post-details">
                          <h3 className="entry-title">
                            <a href="single-post.html">Genocide’s Legacy: Ation Village in Rwanda</a>
                          </h3>{/*./ entry-title */}
                          <div className="entry-meta-content">
                            <div className="entry-date">
                              <span className="icon-clock1" />
                              25 May 2019
                            </div>{/*./ entry-date */}
                          </div>{/*./ entry-meta-content */}
                        </div>
                      </article>{/*./ end post */}
                      <article className="post">
                        <div className="post-thumb">
                          <img src="assets/images/widget/post/wp_4.jpg" alt="Thumbnail" />
                        </div>
                        <div className="post-details">
                          <h3 className="entry-title">
                            <a href="single-post.html">How Can My Business Win Awards?</a>
                          </h3>{/*./ entry-title */}
                          <div className="entry-meta-content">
                            <div className="entry-date">
                              <span className="icon-clock1" />
                              25 May 2019
                            </div>{/*./ entry-date */}
                          </div>{/*./ entry-meta-content */}
                        </div>
                      </article>{/*./ end post */}
                    </div>
                  </aside>{/*~./ end post list widget ~*/}
                  {/*~~~~~ Start Archive Widget ~~~~~*/}
                  <aside className="widget widget_archive">
                    <h4 className="widget-title">Our Achives</h4>{/* /.widget-title */}
                    <div className="widget-content">
                      <ul> 
                        <li><a href="#">January <span>2010</span></a></li>
                        <li><a href="#">February <span>2011</span></a></li>
                        <li><a href="#">March <span>2012</span></a></li>
                        <li><a href="#">Jun <span>2018</span></a></li>
                        <li><a href="#">May <span>2018</span></a></li>
                        <li><a href="#">January <span>2019</span></a></li>
                      </ul>
                    </div>{/* /.widget-content */}
                  </aside>{/*~./ end archive widget ~*/}
                  {/*~~~~~ Start Archive Widget ~~~~~*/}
                  <aside className="widget widget_tagcloud">
                    <h4 className="widget-title">news tag</h4>{/* /.widget-title */}
                    <div className="widget-content tagcloud">
                      <a href="#">survey</a>
                      <a href="#">Data Center</a>
                      <a href="#">VAS</a>
                      <a href="#">setup</a>
                      <a href="#">research</a>
                      <a href="#">Customer</a>
                    </div>{/* /.widget-content */}
                  </aside>{/*~./ end archive widget ~*/}
                </div>{/*  /.sidebar-items */}
              </div>{/* /.col-lg-4 */}
            </div>{/*  /.row */}
          </div>{/*  /.container */}
        </div>{/*~~./ end blog page ~~*/}  
        </div>
    )
}

export default Blog
