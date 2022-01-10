import React from 'react'

const Blog_single = () => {
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
                    <h2 className="page-title">Announcement Details</h2>
                  </div>{/*~~./ page-header-caption ~~*/}
                  <div className="breadcrumb-area">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                      <li className="breadcrumb-item active">Details</li>
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
            <div className="row justify-content-center">
              <div className="col-lg-9">
                {/* Blog Items */}
                <div className="blog-latest-items blog-single-page">
                  <article className="post single-post"> 
                    <h2 className="entry-title">A brand for a company is like a reputation for a person. You earn reputation by trying</h2>{/* /.entry-title */}
                    <div className="entry-header">
                      <div className="entry-user">
                        <div className="thumb">
                          <img src="assets/images/author/4.png" alt="Thumb" />
                        </div>
                        <div className="info">
                          <div className="author-name"><a href="#">Hera Bro
                            </a></div>
                          <div className="entry-time">25 dec . 9 m read</div>{/*./ entry-time */}
                        </div>
                      </div>  
                      <div className="social-share-area">
                        <div className="share-btn">
                          <span>share</span>
                          <div className="social-media">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                          </div>
                        </div>{/*/.share-btn*/}
                      </div>{/*/.social-share-area*/}
                    </div>{/* /.entry-header */}
                    <div className="post-details"> 
                      <figure className="thumb">
                        <img src="assets/images/blog/post/single1.jpg" alt="Img" />
                      </figure>
                      <div className="entry-content">
                        <p>Sed vivamus ut ut vestibulum mollis id, dictumst scelerisque blandit urna quam arcu, bibendum sed semper sapien. Et orci quia suspendisse aliquam per sit, dis quis nunc urna lectus luctus. </p>
                        <p>Vitae ultricies justo, ornare sudisse Sociis est tincidunt magnis, donec pellentesque, cum vivamusNec imperdiet, id nunc, pede nibh nisl mattis et non sit, semper in sociis auctor. Erat condimentum, risus tortor consequat ligula ut, lobortis nec dolor quam odio, vestibulum donec erat congue non libero sed, fermentum at. Nam phasellus, interdum cras vel risus mus mollis nulla, adipisicing rhoncus ac praesent mollis. Felis mauris proin amet tellus mauris, tempor a odio eu eros sit mus, ac neque phasellus tellus tellus morbi elit, nunc sit, sodales eu lobortis purus leo ultricies. Congue vivamus eleifend, magnis nec senectus. Felis sed ac facilisis in vestibulum</p>
                        <blockquote>
                          <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>
                        </blockquote>
                        <p>Magna venenatis, sed sed, amet lectus, bibendum mauris in neque enim ultrices senectus. Nisl neque. Velit eu pharetra etiam dictum tempor, sed consequat molestie maecenas et, et fermentum viverra nunc amet. Rerum elementum odio aliquam lectus sapien commodo mi mattis, ut sed commodo proin. Torquent sodales in elementum libero, elit etiam, eget fringilla nec hymenaeos ac eros, a tempor erat in penatibus <a href="#">Click Here</a></p>
                        <p>Dolor lorem turpis orci, nunc suscipit tortor, habitasse et in sed sed amet duis, consectetuer eleifend nec in congue vivamus in, sodales imperdiet in commodo ipsum eu. Erat magna cursus pellentesque wisi, placerat lectus sollicitudin mattis wisi, nonummy suscipit, dolor dolor sem urna tellus sagittis fringilla, duis ut justo tellus semper malesuada eros. Dolor lorem turpis orci, nunc suscipit tortor, habitasse et in sed sed amet duis, consectetuer eleifend nec in congue vivamus in, <a href="#">sodales imperdiet</a> in commodo ipsum eu. Erat magna cursus pellentesque wisi, placerat lectus sollicitudin mattis wisi, nonummy suscipit, dolor dolor sem urna tellus sagittis fringilla, duis ut justo tellus semper malesuada eros. <a href="#">Vestibulum iaculis</a> mauris integer euismod erat. </p>
                        <div className="row image-group">
                          <div className="col-lg-5 col-md-5">
                            <figure className="thumb">
                              <img src="assets/images/blog/post/single2.jpg" alt="Img" />
                            </figure>
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <figure className="thumb">
                              <img src="assets/images/blog/post/single3.jpg" alt="Img" />
                            </figure>
                          </div>
                        </div>
                        <p>Sed vivamus ut ut vestibulum mollis id, dictumst scelerisque blandit urna quam arcu, bibendum sed semper sapien. Et orci quia suspendisse aliquam per sit, dis quis nunc urna lectus luctus. </p>
                        <p>Vitae ultricies justo, ornare sudisse Sociis est tincidunt magnis, donec pellentesque, cum vivamusNec imperdiet, id nunc, pede nibh nisl mattis et non sit, semper in sociis auctor. Erat condimentum, risus tortor consequat ligula ut, lobortis nec dolor quam odio, vestibulum donec erat congue non libero sed, fermentum at. Nam phasellus, interdum cras vel risus mus mollis nulla, adipisicing rhoncus ac praesent mollis. Felis mauris proin amet tellus mauris, tempor a odio eu eros sit mus, ac neque phasellus tellus tellus morbi elit, nunc sit, sodales eu lobortis purus leo ultricies. Congue vivamus eleifend, magnis nec senectus. Felis sed ac facilisis in vestibulum</p>
                      </div>{/* /.entry-content */}
                    </div>{/* /.post-details */}
                    <div className="entry-footer">
                      <div className="entry-tag">
                        <strong><i className="fas fa-tag" /> </strong>
                        <div className="tags">
                          <a href="#" rel="tag">Bid</a>
                          <a href="#" rel="tag">Auction</a>
                          <a href="#" rel="tag">Win</a>
                          <a href="#" rel="tag">product</a>
                        </div>
                      </div>{/*/.entry-tag*/}
                    </div>{/*/.entry-footer*/}
                  </article>{/* /.post */}
                  <div id="comments" className="comments-area">
                    <div className="comments-main-content">
                      <div className="row">
                        <div className="col-md-12">
                          <h3 className="comments-title">Comments ( 03 )</h3>{/*/.comments-title*/}
                        </div>{/*/.col-md-12*/}
                      </div>{/*/.row*/}
                      <div className="row">
                        <div className="col-md-12">
                          <ol className="comment-list">
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <div className="comment-author vcard">
                                    <div className="author-img">
                                      <img alt="" src="assets/images/blog/comments/1.png" className="avatar photo" />
                                    </div>
                                  </div>{/*/.comment-author*/}
                                  <div className="comment-metadata"><b className="author">Joan Michael</b>
                                    <span className="date"><i className="fas fa-clock" /> 1 day ago</span>
                                  </div>{/*/.comment-metadata*/}
                                </div>{/*/.comment-meta*/}
                                <div className="comment-details">
                                  <div className="comment-content">
                                    <p>magnis nisl lectus velit parturient vitae, suspendisse fusce in variultusetvitae aenean. Hac metus dui facilisis.</p>
                                  </div>{/*/.comment-content*/}
                                  <a href="#" className="comment-reply-link">Reply</a>
                                </div>{/* /.comment-details*/}
                              </div>{/*/.comment-body*/}
                              <ol className="children">
                                <li className="comment">
                                  <div className="comment-body">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <div className="author-img">
                                          <img alt="" src="assets/images/blog/comments/2.png" className="avatar photo" />
                                        </div>
                                      </div>{/*/.comment-author*/}
                                      <div className="comment-metadata"><b className="author">Hera Rahamn</b>
                                        <span className="date"><i className="fas fa-clock" /> 2 day ago</span>
                                      </div>{/*/.comment-metadata*/}
                                    </div>{/*/.comment-meta*/}
                                    <div className="comment-details">
                                      <div className="comment-content">
                                        <p>Volutpat ut, est sed et tincidunt neque, ipsum consectetulandieros. Vestibulum diam nec. Ridiculus justo volutpat dictum eget odio in. Ridiculus gravida arcu </p>
                                      </div>{/*/.comment-content*/}
                                      <a href="#" className="comment-reply-link">Reply </a>
                                    </div>{/* /.comment-details*/}
                                  </div>{/*/.comment-body*/}
                                </li>{/*/.comment*/}
                              </ol>{/*/.children*/}
                            </li>{/*/.comment-body*/}
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <div className="comment-author vcard">
                                    <div className="author-img">
                                      <img alt="" src="assets/images/blog/comments/3.png" className="avatar photo" />
                                    </div>
                                  </div>{/*/.comment-author*/}
                                  <div className="comment-metadata"><b className="author">Mahfuz Ali</b>
                                    <span className="date"><i className="fas fa-clock" /> 3 day ago</span>
                                  </div>{/*/.comment-metadata*/}
                                </div>{/*/.comment-meta*/}
                                <div className="comment-details">
                                  <div className="comment-content">
                                    <p>Neque tellus lorem tortor egestas ipsum a, sodales condimen dbunonummy nec etiam magna, dui lacinia ligula pulvinar </p>
                                  </div>{/*/.comment-content*/}
                                  <a href="#" className="comment-reply-link">Reply </a>
                                </div>{/* /.comment-details*/}
                              </div>{/*/.comment-body*/}
                            </li>{/*/.comment-body*/}
                          </ol>{/*/.comment-list*/}
                        </div>{/*/.col-md-12*/}
                      </div>{/*/.row*/}
                    </div>{/* /.comments-main-content */}
                  </div>{/* /.comments-area */}
                  <div className="comment-respond">
                    <form action="#" className="comment-form">
                      <h3 className="comment-reply-title">Leave A Reply</h3>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <label htmlFor="u_name">Your Name</label>
                          <input id="u_name" type="text" className="form-controller" />
                        </div>{/* /.col-lg-6 */}
                        <div className="col-lg-6 col-md-6">
                          <label htmlFor="u_email">Your Email</label>
                          <input id="u_email" type="email" className="form-controller" />
                        </div>{/* /.col-lg-6 */}
                        <div className="col-12">
                          <label htmlFor="u_message">Your Comment</label>
                          <textarea id="u_message" className="form-controller" rows={4} cols={50} defaultValue={""} />
                        </div>{/* /.col-12 */}
                        <div className="form-submit clearfix">
                          <button className="btn btn-default">Post A Comment</button>
                        </div>{/* /.subimt */}
                      </div>{/* /.row */}
                    </form>
                  </div>
                </div>{/*  /.blog-latest-items */}
              </div>{/* /.col-lg-9 */}
            </div>{/* /.row */}
          </div>{/*  /.container */}
        </div>{/*~~./ end blog page ~~*/}
        </div>
    )
}

export default Blog_single
