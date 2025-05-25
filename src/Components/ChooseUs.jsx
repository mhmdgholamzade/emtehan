import React from 'react'

function ChooseUs() {
  return (
    <div>
      <section className="choose-us padding">
        <div className="container">
            <div className="row">

               
                <div className="choose-us_title text-center">
                    <h2 className="heading-primary mb-5">What We Do</h2>
                    <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and type setting
                        industry when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book It has survived not only five centuries.</p>
                </div>
              
                <div className="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div className="choose">
                        <img src="img/choose-01.jpg" alt="graphics-picture" />
                        <div className="text-center">
                            <i className="icon fa fa-paint-brush fa-2x"></i>
                            <h5>Graphic Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa dicta.
                            </p>
                        </div>
                    </div>
                </div>
              
                <div className="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div className="choose">
                        <img src="img/choose-02.jpg" alt="design-picture" />
                        <div className="text-center">
                            <i className="icon fa fa-desktop fa-2x"></i>
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula viverra.
                            </p>
                        </div>
                    </div>
                </div>
               
                <div className="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div className="choose">
                        <img src="img/choose-03.jpg" alt="development-picture" />
                        <div className="text-center">
                            <i className="icon fa fa-diamond fa-2x"></i>
                            <h5>Web Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquet quam.
                            </p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
    </div>
  )
}

export default ChooseUs
