import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand btn btn-outline-success me-2" to="/">
            Talha's Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a btn btn-sm btn-outline-secondary me-2" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a btn btn-sm btn-outline-secondary me-2" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a btn btn-sm btn-outline-secondary me-2" to="/skill">
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a btn btn-sm btn-outline-secondary me-2" to="/experience">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a btn btn-sm btn-outline-secondary me-2" to="/certifications">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
