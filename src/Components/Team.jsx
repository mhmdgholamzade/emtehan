import React from 'react'

function Team() {
  return (
    <div>
       <section className="team padding" id="team" data-scroll-index="4">
        <div className="container">

         
            <div className="text-center">
                <h2 className="heading-primary mb-5">Our Team </h2>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam nihil dolores
                    maxime aspernatur saepe.</p>
            </div>


            <div className="row mt-30">

                
                <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div className="team-info">
                        <img src="public/img/team/team-02.jpg" alt="team-photo" />
                        <div className="view-content">
                            <h3 className="title">Sophia</h3>
                            <ul className="icon">
                                <li><a href="#0"><i className="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#0"><i className="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#0"><i className="fa fa-instagram fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div className="team-info">
                        <img src="public/img/team/team-01.jpg" alt="team-photo" />
                        <div className="view-content">
                            <h3 className="title">Alex Smith</h3>
                            <ul className="icon">
                                <li><a href="#0"><i className="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#0"><i className="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#0"><i className="fa fa-instagram fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div className="team-info">
                        <img src="public/img/team/team-03.jpg" alt="team-photo" />
                        <div className="view-content">
                            <h3 className="title">Emily</h3>
                            <ul className="icon">
                                <li><a href="#0"><i className="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#0"><i className="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#0"><i className="fa fa-instagram fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Team
