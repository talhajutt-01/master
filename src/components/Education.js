import React from 'react';

const Education = () => {
  return (
    <section className=" py-5 vh-100" id="education">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5">Education</h2>
        </div>

        <div className="mb-5">
          <div className="d-md-flex justify-content-center">
            <div className="flex-grow-1  text-md-left">
              <h3 className="mb-0  ">Lahore Garrison University</h3>
              <div className="subheading mb-3  ">Bachelor of Science</div>
              <div className=' '>Computer Science</div>
              <p className=' '>GPA: 2.9</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">OCT 2019 - JULY 2023</span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="d-md-flex justify-content-center">
            <div className="flex-grow-1  text-md-left">
              <h3 className="mb-0  ">Garrission College For Boys Lahore Cantt</h3>
              <div className="subheading mb-3  ">ICS (Computer, Physics)</div>
              <p className=' '>Percentage: 59%</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary ">AUGUST 2017 - MAY 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
