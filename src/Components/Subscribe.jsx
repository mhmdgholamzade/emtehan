import React, { useState, useEffect } from 'react';
function useSubscribeForm() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!consent) {
      setError('Please provide your consent.');
      return;
    }
    setSubmitted(true);
  };

  return {
    email,
    consent,
    submitted,
    error,
    handleEmailChange,
    handleConsentChange,
    handleSubmit,
  };
}

function Subscribe() {
  const {
    email,
    consent,
    submitted,
    error,
    handleEmailChange,
    handleConsentChange,
    handleSubmit,
  } = useSubscribeForm();

  useEffect(() => {
    if (submitted) {
      console.log('Form submitted successfully.');
    }
  }, [submitted]);

  return (
    <section className="subscribe text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="subs-container">
              <h2 className="heading-tertiary mb-3">Subscribe Now</h2>
              <p>
                Stay updated with our latest news and offers. Enter your email below to subscribe.
              </p>
              {error && <p className="text-danger">{error}</p>}
              {submitted ? (
                <p className="text-success">Thank you for subscribing!</p>
              ) : (
                <form className="form mt-3" onSubmit={handleSubmit}>
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={consent}
                        onChange={handleConsentChange}
                      />
                      <small>Yes, I would like to receive communications by email.</small>
                    </label>
                  </div>
                  <div className="input-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <button className="btn" type="submit">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
