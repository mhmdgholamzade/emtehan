import React from 'react'

function Testimonials() {
  return (
    <div>
      <section className="test padding">
        <div className="container">
            <div className="row">

                
                <div className="test-title text-center">
                    <h2 className="heading-primary mb-5">What Our Clients Say</h2>
                    <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, doloremque minus.
                        Harum, voluptatum ad maiores in quaerat veritatis iste consequatur atque.Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.</p>
                </div>
             

                <div className=" offset-md-2 col-md-8 col-1g-12 offset-md-2 mx-auto">
                    <div className="testimonials text-center">
                        <div className="owl-carousel owl-theme">

                            <div className="testimo">
                                <div className="client-area">
                                    <div className="img">
                                        <div className="author">
                                            <img src="img/testimonial/test-01.jpg" alt="testimonial-picture" />
                                        </div>
                                    </div>
                                    <h6>Emily</h6>
                                    <span>Envato Customer</span>
                                </div>
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis
                                    assumenda nulla ullam ad quibusdam voluptatum, exercitationem autem sequi
                                    excepturi. "</p>
                            </div>
                           
                            <div className="testimo">
                                <div className="client-area">
                                    <div className="img">
                                        <div className="author">
                                            <img src="img/testimonial/test-02.jpg" alt="testimonial-picture" />
                                        </div>
                                    </div>
                                    <h6>James Smith</h6>
                                    <span>Envato Customer</span>
                                </div>
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis
                                    assumenda nulla ullam ad quibusdam voluptatum, exercitationem autem sequi
                                    excepturi. "</p>
                            </div>
                            
                            <div className="testimo">
                                <div className="client-area">
                                    <div className="img">
                                        <div className="author">
                                            <img src="img/testimonial/test-03.jpg" alt="testimonial-picture" />
                                        </div>
                                    </div>
                                    <h6>Sophia</h6>
                                    <span>Envato Customer</span>
                                </div>
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis
                                    assumenda nulla ullam ad quibusdam voluptatum, exercitationem autem sequi
                                    excepturi. "</p>
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

export default Testimonials
