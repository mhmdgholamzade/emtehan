// components/Prices.js
import React from 'react';

const pricingPlans = [
  {
    title: 'Basic',
    price: 2,
    features: ['2 GB Disk Space', '1 Domain Name', '2 Email Addresses', 'Enhanced Security', 'Unlimited Support'],
  },
  {
    title: 'Standard',
    price: 10,
    features: ['8 GB Disk Space', '10 Domain Names', '4 Email Addresses', 'Enhanced Security', 'Unlimited Support'],
  },
  {
    title: 'Premium',
    price: 30,
    features: ['20 GB Disk Space', '15 Domain Names', '10 Email Addresses', 'Enhanced Security', 'Unlimited Support'],
  },
  {
    title: 'Platinum',
    price: 80,
    features: ['50 GB Disk Space', '30 Domain Names', '20 Email Addresses', 'Enhanced Security', 'Unlimited Support'],
  },
];

function Prices() {
  return (
    <section className="price padding" id="price" data-scroll-index="5">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-primary mb-5">Pricing Table</h2>
          <p className="mb-5">Choose the plan that best fits your needs.</p>
        </div>
        <div className="pricing-tables text-center">
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-10 mx-auto">
                <div className="item mb-md50">
                  <div className="type">
                    <h4>{plan.title}</h4>
                  </div>
                  <div className="value">
                    <h3>
                      <span>$</span>
                      {plan.price}
                    </h3>
                    <span className="per">/ Month</span>
                  </div>
                  <div className="features">
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="order">
                    <a href="#0" className="button btn-hover btn-fill">
                      <span>Order Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
