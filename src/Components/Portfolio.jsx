import React from 'react'

function Portfolio() {
  return (
    <>

      <section className="portfolio padding" id="portfolio" data-scroll-index="3">
        <div className="container-fluid">

          {/* START PORTFOLIO SECTION TITLE */}
          <div className="port-title text-center">
            <h2 className="heading-primary mb-5">Recent Works</h2>
            <p className="mb-5">
              We provide high standard clean website for your business solutions
            </p>
          </div>
          {/* END PORTFOLIO SECTION TITLE */}

          {/* START PORTFOLIO FILTER BUTTONS */}
          <nav>
            <ul className="simplefilter filter-port">
              <li className="active button" data-filter="all">All</li>
              <li className="button" data-filter="1">Brand</li>
              <li className="button" data-filter="2">Photoshop</li>
              <li className="button" data-filter="3">Web Design</li>
              <li className="button" data-filter="4">Graphics</li>
            </ul>
          </nav>
          {/* END PORTFOLIO FILTER BUTTONS */}

          <div className="row">
            {/* START PORTFOLIO CONTENT */}
            <div className="filtr-container">

              {/* PORTFOLIO FILTER ITEM */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                <div className="port-caption">
                  <img src="img/portfolio/portfolio-01.jpg" alt="portfolio-01" />
                  <div className="overlay">
                    <div className="view-more">
                      <a className="modal-image" href="img/portfolio/portfolio-01.jpg">
                        <i className="fa fa-search fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PORTFOLIO FILTER ITEM */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="3">
                <div className="port-caption">
                  <img src="img/portfolio/portfolio-02.jpg" alt="portfolio-02" />
                  <div className="overlay">
                    <div className="view-more">
                      <a className="modal-image" href="img/portfolio/portfolio-02.jpg">
                        <i className="fa fa-search fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PORTFOLIO FILTER ITEM */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                <div className="port-caption">
                  <img src="img/portfolio/portfolio-03.jpg" alt="portfolio-03" />
                  <div className="overlay">
                    <div className="view-more">
                      <a className="modal-image" href="img/portfolio/portfolio-03.jpg">
                        <i className="fa fa-search fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PORTFOLIO FILTER ITEM */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="2">
                <div className="port-caption">
                  <img src="img/portfolio/portfolio-04.jpg" alt="portfolio-04" />
                  <div className="overlay">
                    <div className="view-more">
                      <a className="modal-image" href="img/portfolio/portfolio-04.jpg">
                        <i className="fa fa-search fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PORTFOLIO FILTER ITEM */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="3">
                <div className="port-caption">
                  <img src="img/portfolio/portfolio-05.jpg" alt="portfolio-05" />
                  <div className="overlay">
                    <div className="view-more">
                      <a className="modal-image" href="img/portfolio/portfolio-05.jpg">
                        <i className="fa fa-search fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PORTFOLIO FILTER ITEM */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="4">
                <div className="port-caption text-center">
                  <img src="img/portfolio/portfolio-06.jpg" alt="portfolio-06" />
                  <div className="overlay">
                    <div className="view-more">
                      <a className="modal-image" href="img/portfolio/portfolio-06.jpg">
                        <i className="fa fa-search fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <a href="#0" className="button btn-hover btn-fill mt-5">Explore More &rarr;</a>
          </div>
        </div>
      </section>
    
export default Portfolio;

    </>
  )
}

export default Portfolio
