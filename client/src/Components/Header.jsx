import React from 'react';
// import logo from '../logo.png';

import { Link } from 'react-router-dom';

function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <a className="navbar-brand" href="/"><img src="https://cdn.appzaib.com/public/wixware/img/logo-185x50.png" height='30px' alt="Wixware Logo"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className='nav-link active disabled'>Find apps for</li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <big className='text-primary'><i className='fab fa-windows'></i></big>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <big className='text-primary'><i className='fab fa-linux'></i></big>
          </a>
        </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
            <big className='text-primary'><i className='fab fa-android'></i></big>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
            <big className='text-primary'><i className='fab fa-apple'></i></big>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;