import React from 'react'

function Subscribe() {
  return (
    <div>
      <section className="subscribe text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="subs-container">
                        <h2 className="heading-tertiary mb-3">Subscribe Now</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Id nobis
                            quas sunt suscipit aliquid.</p>
                        <form className="form mt-3">
                            <div className="form-check mb-3"> <label className="form-check-label"> <input type="checkbox"
                                        name="checkbox"/> <small>Yes, I would like to receive communications by email.
                                    </small></label>
                            </div>
                            <div className="input-group">
                                <input name="email" type="email" className="form-control" placeholder="Enter your email"
                                    required/>
                                <button className="btn" type="submit"><i className="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Subscribe
