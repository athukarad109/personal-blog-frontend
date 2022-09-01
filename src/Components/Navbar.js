import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/addnew' className="nav-link" >
                Add blog
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
