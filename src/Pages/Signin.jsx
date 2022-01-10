import React from 'react'

const Signin = () => {
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
                    <h2 className="page-title">My Account</h2>
                  </div>{/*~~./ page-header-caption ~~*/}
                  <div className="breadcrumb-area">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>  
                      <li className="breadcrumb-item active">Sign In</li>
                    </ol>
                  </div>{/*~~./ breadcrumb-area ~~*/}
                </div>{/*~~./ page-header-content ~~*/}
              </div>
            </div>
          </div>{/*~~./ end container ~~*/}
        </div>{/*~~./ end page title area ~~*/} 
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            User Signin Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="user-signin-block ptb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="sing-in-mockup md-mrb-60">
                  <img src="assets/images/others/signin-mockup.png" alt="Mockup" />
                </div>
              </div>{/*/.col-lg-2*/}
              <div className="col-lg-6">
                <div className="user-register-area">
                  <div className="form-content">
                    <div className="form-header">
                      <h4 className="form-subheading">Sign in here</h4>
                      <h2 className="heading">Welcome To Biddo</h2>
                    </div>
                    <form className="default-form signin-form">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" className="form-controller" type="email" />
                      </div>{/*/.form-group*/}
                      <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input id="pass" name="password" className="form-controller" type="password" />
                      </div>{/*/.form-group*/}
                      <div className="remember-and-password">
                        <div className="login-form-remember"> 
                          <label><input id="remembermesignin" defaultValue type="checkbox" /><span>Keep me looged in</span></label>
                        </div>
                        <div className="forget-pass">
                          <a className="btn-password" href="#">Forget Password</a>
                        </div>
                      </div>{/*/.remember-and-password*/}
                      <div className="form-btn-group">
                        <div className="form-login-area">
                          <button type="submit" className="btn btn-default">
                            Sign In
                          </button>
                        </div>
                        <div className="login-form-register-now">
                          You have no account ? <a className="btn-register-now" href="#">Sign Up</a>
                        </div>
                      </div>
                      <div className="reg-others-media">
                        <div className="text">Or, User social media to sign in</div>
                        <div className="social-media-icons">
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                          <a href="#"><i className="fab fa-twitter" /></a><a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                      </div>
                    </form>  
                  </div>
                </div>{/*~./ end user register area ~*/} 
              </div>{/* /.col-lg-10 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/*~~./ end user signin block ~~*/}

        </>
    )
}

export default Signin
