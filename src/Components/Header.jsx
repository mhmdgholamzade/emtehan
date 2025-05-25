import React from 'react'

function Header() {
  return (
    <div>
       <header className="home" id="home" data-scroll-index="0">

        <div className="container">
            <div className="row">

                <div className="offset-lg-1 col-lg-10 offset-lg-1 home-content text-center mt-md-5 mt-sm-5">
                    <h3 className="heading-tertiary mb-3">
                        Digital Agency
                    </h3>
                    <h1 className="heading-primary mb-3">
                        Best <span>Creative Agency</span> For your Needs
                    </h1>

                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus
                        consequatur voluptas delectus, sapiente.</p>

                    <a href="#0" className="button btn-hover btn-fill mt-5">More About &rarr;</a>
                    <a href="#0" className="button video-btn mt-5"><i className="fa fa-play"></i></a>
                </div>


            </div>
        </div>
        <svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave">
            <title>Wave</title>
            <defs></defs>
            <path id="feel-the-wave" d="" />
        </svg>

        <svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave">
            <title>Wave</title>
            <defs></defs>
            <path id="feel-the-wave-two" d="" />
        </svg>

    </header>
    </div>
  )
}

export default Header
