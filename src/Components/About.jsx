import React from 'react'

function About() {
  return (
    <div>
       <section className="about padding" id="about" data-scroll-index="1">
        <div className="container">
            <div className="row">

                
                <div className="col-lg-6 mt-lg-5">
                    <div className="img-background"></div>
                    <img src="img/about.jpg" className="about-img" alt="about-picture" />
                </div>
               
                <div className="col-lg-6 mt-md-5 mt-sm-5 mt-0 about-content">
                    <h2 className="heading-primary mb-5">
                        About Us
                    </h2>
                    <h3 className="heading-tertiary mt-3 mb-4">
                        Who We Are
                    </h3>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus
                        consequatur voluptas delectus, sapiente, explicabo nam quasi! Corporis ipsum quae repellendus
                        molestias.</p>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem suscipit ex quasi
                        in iure dolorem cupiditate corrupti ducimus ipsa.
                    </p>
                    <a href="#0" className="button btn-hover btn-fill mt-5">Read More &rarr;</a>

               
                    <div className="counts">

                        <div className="row">
                            
                            <div className="col-lg-4 col-md-4 col-sm-4 mx-auto">
                                <div className="counter text-center">
                                    <div className="counting-icon">
                                        <i className="fa fa-rocket fa-2x"></i>
                                    </div>
                                   
                                    <span className="count" data-from="0" data-to="500">10</span>
                                    
                                    <h4>Completed Projects</h4>
                                </div>
                            </div>
            
                            <div className="col-lg-4 col-md-4 col-sm-4 mx-auto">
                                <div className="counter text-center">
                                    <div className="counting-icon">
                                        <i className="fa fa-trophy fa-2x"></i>
                                    </div>
                                   
                                    <span className="count" data-from="0" data-to="250">20</span>
                                    
                                    <h4>Digital design Awards</h4>
                                </div>
                            </div>
                           
                            <div className="col-lg-4 col-md-4 col-sm-4 mx-auto">
                                <div className="counter text-center">
                                    <div className="counting-icon">
                                        <i className="fa fa-users fa-2x"></i>
                                    </div>
                                    
                                    <span className="count" data-from="0" data-to="980">50</span>
                                   
                                    <h4>Satisfied Customers</h4>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
               
            </div>
            

        </div>
    </section>
    </div>
  )
}

export default About
