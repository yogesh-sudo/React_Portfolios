import React from 'react'

const NotFound = () => {
    return (
        <div>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Start Error Page Block
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="error-page-block">
        <div className="error-thumb">
          <img src="assets/images/others/error.png" alt="Thumbnail" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="error-page-content text-white">
                <div className="image-not-found">
                  <img src="assets/images/others/404.png" alt={404} />
                </div> 
                <p>Fusce nulla mus quam proin, eget vestibulum elementum potenti mus ipsum. Phasellus nulla inceptos. Et vivamus magna ac, amet quisque tortor. Integer lacus.</p>
                <a className="btn btn-default" href="index.html">Back To Home</a>
              </div>{/*/.error-page-content*/}
            </div>
          </div>
        </div>
      </div>{/*~~./ end error page block ~~*/}
        </div>
    )
}

export default NotFound
