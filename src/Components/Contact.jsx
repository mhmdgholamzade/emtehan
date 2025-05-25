import React from 'react';

function Contact() {
  return (
    <div>
      <section className="contact padding" id="contact" data-scroll-index="7">
        <div className="container">

          {/* START CONTACT SECTION TITLE */}
          <div className="text-center">
            <h2 className="heading-primary mb-5">
              <span> Get In <span>Touch</span></span>
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              aperiam consectetur rem odit in natus.
            </p>
          </div>
          {/* END CONTACT SECTION TITLE */}

          {/* START INFO */}
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-sm-8 mx-auto">
              <div className="contact-info">
                <i className="fa fa-map fa-fw"></i>
                <h5><span>Address:</span></h5>
                <p>2885 Walt Nuzum Farm Road, New York</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-8 mx-auto">
              <div className="contact-info">
                <i className="fa fa-phone fa-fw"></i>
                <h5><span>Mobile:</span></h5>
                <p>+516-892-6997, <br />+585-457-5267</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-8 mx-auto">
              <div className="contact-info">
                <i className="fa fa-envelope fa-fw"></i>
                <h5><span>Email:</span></h5>
                <p>info@example.com <br />support@example.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-8 mx-auto">
              <div className="contact-info">
                <i className="fa fa-refresh fa-fw"></i>
                <h5><span>Timing:</span></h5>
                <p>Mon-Fri - 9:00 AM to 5:00 PM <br />sat - 10:00 AM to 1:00 PM</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="contact-form offset-lg-2 col-lg-8 offset-lg-2 text-center">
              <form className="form" id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="controls">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name *"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email *"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="button">Send Message</button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
