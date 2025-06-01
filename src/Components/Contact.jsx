import React from 'react';
import ContactInfoBox from './ContactInfoBox';

function Contact() {
  return (
    <section className="contact padding" id="contact" data-scroll-index="7">
      <div className="container">

        <div className="text-center">
          <h2 className="heading-primary mb-5">
            <span>Get In <span>Touch</span></span>
          </h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aperiam consectetur rem odit in natus.
          </p>
        </div>

        <div className="row text-center">
          <ContactInfoBox icon="fa-map" title="Address">
            2885 Walt Nuzum Farm Road, New York
          </ContactInfoBox>
          <ContactInfoBox icon="fa-phone" title="Mobile">
            +516-892-6997<br />+585-457-5267
          </ContactInfoBox>
          <ContactInfoBox icon="fa-envelope" title="Email">
            info@example.com<br />support@example.com
          </ContactInfoBox>
          <ContactInfoBox icon="fa-refresh" title="Timing">
            Mon-Fri - 9:00 AM to 5:00 PM<br />Sat - 10:00 AM to 1:00 PM
          </ContactInfoBox>
        </div>

        <div className="row">
          <div className="contact-form offset-lg-2 col-lg-8 offset-lg-2 text-center">
            <form className="form" id="contact-form" method="post" action="contact.php">
              <div className="messages"></div>
              <div className="controls">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Name *" required />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email *" required />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Message" rows="4" required></textarea>
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
  );
}

export default Contact;
