import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Registration() {
  return (
    <div>
      <header className='navbar navbar-expand-lg'>
      <div className="container px-0">
       <a className="navbar-brand" href="../index.html"><img src="../assets/images/brand/logo/logo.svg" alt="" /></a>
        <div className="d-flex align-items-center order-lg-3 ms-lg-3">
            <div className="d-flex align-items-center">
                <div className="dropdown me-2">
                    <button
                    className="btn btn-light btn-icon rounded-circle d-flex align-items-center bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)">
                    <i className="bi theme-icon-active"></i>
                    <span className="visually-hidden bs-theme-text">Toggle theme</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                        <i className="bi theme-icon bi-sun-fill"></i>
                        <span className="ms-2">Light</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                        <i className="bi theme-icon bi-moon-stars-fill"></i>
                        <span className="ms-2">Dark</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center active"
                            data-bs-theme-value="auto"
                            aria-pressed="true">
                        <i className="bi theme-icon bi-circle-half"></i>
                        <span className="ms-2">Auto</span>
                        </button>
                    </li>
                    </ul>
                </div>
                <a href="https://themes.getbootstrap.com/product/geeks-academy-admin-template/" className="btn btn-outline-primary me-2">Sign in</a>
                <a href="https://themes.getbootstrap.com/product/geeks-academy-admin-template/" className="btn btn-primary d-none d-md-block">
                Sign up
                </a>
            </div>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-default5"
                aria-controls="navbar-default5"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
            </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-default5">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-display="static">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarDropdown">
                    <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="../pages/course-category.html">Action Link</a>
                            </li>
                            <li>
                                <a href="#!" className="dropdown-item">Anthor Action</a>
                            </li>
                            <li>
                                <a href="#!" className="dropdown-item">Something else here</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="dropdown-item">Action Link</a>
                    </li>
                    <li>
                        <a href="#!" className="dropdown-item">Anthor Action</a>
                    </li>
                    <li>
                        <a href="#!" className="dropdown-item">Something else here</a>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>
        </div>
      </header>
    </div>
  );
}

export default Registration;
