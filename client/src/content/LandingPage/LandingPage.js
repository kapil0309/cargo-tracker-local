import React from 'react';

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">
            Blue Cargo - Shipping Experts
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
            <div className="bx--row landing-page__tab-content">
              <div className="bx--col-md-4 bx--col-lg-7">
                <h2 className="landing-page__subheading">
                  Blue Cargo
                </h2>
                <p className="landing-page__p">
                  Cargo Shipping Application: Set of microservices working together providing booking, 
                  tracking, routing and handling activities with a message queue and one database per
                  microservice with full CI/CD functionality.
                </p>
              </div>
              <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                <img
                  className="landing-page__illo"
                  src={`${process.env.PUBLIC_URL}/cargo.jpg`}
                  alt="Cargo illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
