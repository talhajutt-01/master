import React from 'react';


const Skill = () => {
  

  return (
    <>
          <div className="resume-section-content mx-5 mt-2 min-vh-100">
            <h2 className="mb-3">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5">html5</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt">css3</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js">js</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react">react</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js">node-js</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-mdb">mdb</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress">wordpress</i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm">npm</i>
              </li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Version Control (Github, Git)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        
    </>
  );
};

export default Skill;