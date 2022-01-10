import React from 'react'

const Contact = () => {
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
                  <h2 className="page-title">Contact Us</h2>
                </div>{/*~~./ page-header-caption ~~*/}
                <div className="breadcrumb-area">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                    <li className="breadcrumb-item active">contact</li>
                  </ol>
                </div>{/*~~./ breadcrumb-area ~~*/}
              </div>{/*~~./ page-header-content ~~*/}
            </div>
          </div>
        </div>{/*~~./ end container ~~*/}
      </div>{/*~~./ end page title area ~~*/}
   {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Contact Info Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="contact-info-block ptb-120">
        <div className="container ml-b-30">
          <div className="row">
            <div className="col-lg-4 col-md-6">  
              <div className="contact-info-item address" data-animate="hg-fadeInUp">
                <div className="shape-icon">
                  <span className="icon-map2" />
                </div>
                <div className="card-info">
                  <p>Mogrd Road 56B, Best Town 6593 MT, Wordwide Country </p>
                </div>{/* /.card-info */}
              </div>{/* /.contact-info-item */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6">  
              <div className="contact-info-item email" data-animate="hg-fadeInUp">
                <div className="shape-icon">
                  <span className="icon-email-1" />
                </div>
                <div className="card-info">
                  <p><a href="mailto:support@demomail.com">support@demomail.com</a></p>
                  <p><a href="mailto:support@demomail.com">support@demomail.com</a></p>
                </div>{/* /.card-info */}                           
              </div>{/* /.contact-info-item */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6">  
              <div className="contact-info-item" data-animate="hg-fadeInUp">
                <div className="shape-icon">
                  <span className="icon-wall-clock" />
                </div>
                <div className="card-info">
                  <p>Mon to Fri : 10am to 05 pm </p>
                  <p>Sunday Closed</p>
                </div>{/* /.card-info */}
              </div>{/* /.contact-info-item */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </div>{/*~~./ end contact info block ~~*/}
       {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Contact Form Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="contact-form-block pd-b-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-area">
                <div className="section-title">
                  <h2 className="title-main hg-fadeInUp animated" data-animate="hg-fadeInUp" style={{visibility: 'visible'}}>Get In <span>Touch</span></h2>{/* /.title-main */}
                </div>
                <form id="contact_form" className="contact-form" action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input className="form-controller" id="name" name="name" type="name" placeholder="Your Name" />
                      </div>
                    </div>{/*./ col-lg-6 */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input className="form-controller" id="email" name="email" type="email" placeholder="Your Email" />
                      </div>
                    </div>{/*./ col-lg-6 */}
                    <div className="col-12">
                      <div className="form-group">
                        <textarea id="message" name="message" className="form-controller" rows={4} cols={50} placeholder="Type Your Message" defaultValue={""} />
                      </div>
                    </div>{/* /.col-12 */}
                    <div className="col-12 mrt-5">
                      <button type="submit" className="btn btn-default">Submit now</button>
                    </div>{/*./ col-lg-6 */}
                  </div>{/* /.row */}
                </form>{/* /.contact-form */}
              </div>{/* /.contact-form-area */}
            </div>{/* /.col-lg-8 */}
            <div className="col-lg-4">
              <div className="contact-thumb md-mrt-60" data-animate="hg-fadeInLeft">
                <img src="assets/images/others/contact.png" alt="Thumbnail" />
              </div>
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </div>{/*~~./ end contact form block ~~*/}
    </div>
    )
}

export default Contact
