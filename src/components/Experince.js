import React from 'react';

const Experience = () => {
  return (
    <div className="container-fluid experience-container  text-white" style={{ minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6 d-flex align-items-stretch mb-3 mb-sm-0">
          <div className="card mt-1 border-dark w-100 " >
            <div className="card-body">
              <h5 className="card-title">Internship as FrontEnd Developer</h5>
              <h6 className="card-text">DigiHub</h6>
              <p className="card-text">March 2021 - Oct 2021</p>
              <p className="card-text">
                In the summer break, I did an internship where I learned front-end development to gain some valuable experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 d-flex align-items-stretch">
          <div className="card mt-1  border-dark  w-100">
            <div className="card-body">
              <h5 className="card-title">Call Center</h5>
              <p className="card-text">USA & UK Campaigns</p>
              <p className="card-text">
                I joined a call center to support my expenses and enhance my communication skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
