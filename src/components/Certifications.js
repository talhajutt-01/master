import React from 'react';

const Certifications = () => {
  return (
    <div className="container-fluid" style={{ height: '100vh' }}>
      <div className="row">
        <h1 className="text-center justify-content-center align-items-center">Certifications</h1>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hafiz-e-Quran</h5>
              <p className="card-text">Army Madrassa ~2010</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">LEGO Workshop</h5>
              <p className="card-text">Lahore Garrison University ~2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
