import React from 'react';
// import logo from '../logo.png';

import { Link } from 'react-router-dom';

function Header() {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="nav-content">   
        <ul className="navbar-nav ml-auto mr-auto" id='top-menu'>
          <li className="nav-item active">
            <a href='/' className='nav-link'> <i className='fa fa-infinity'></i></a>
          </li>
          <li className="nav-item active">
            <Link to='/category/media-players' data-toggle='tooltip' title='Media Players' className='nav-link'> <i className='fa fa-play'></i></Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/antivirus' data-toggle='tooltip' title='Antivirus &amp; System Cleaners' className='nav-link'> <i className='fa fa-shield-alt'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/internet-browsers' data-toggle='tooltip' title='Web Browsers' className='nav-link'> <i className='fa fa-globe-asia'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/video-editors' data-toggle='tooltip' title='Video Editors' className='nav-link'> <i className='fa fa-video'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/file-compressors' data-toggle='tooltip' title='File Compressors' className='nav-link'> <i className='fa fa-file-archive'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/downloaders' data-toggle='tooltip' title='Download Managers' className='nav-link'> <i className='fa fa-cloud-download-alt'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/photo-editors' data-toggle='tooltip' title='Photo Editors' className='nav-link'> <i className='fa fa-images'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/for-developers' data-toggle='tooltip' title='For Developers' className='nav-link'> <i className='fa fa-laptop-code'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/cd-dvd' data-toggle='tooltip' title='CD &amp; DVD' className='nav-link'> <i className='fas fa-compact-disc'></i> </Link>
          </li>
          <li className="nav-item active">
            <Link to='/category/drivers' data-toggle='tooltip' title='System Drivers' className='nav-link'> <i className='fas fa-screwdriver'></i> </Link>
          </li>
          {/* <li className="nav-item dropdown sm-menu">
            <Link className="nav-link" to="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about">About us</Link>
              <Link className="dropdown-item" to="/contact">Contact us</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/terms">The Terms</Link>
              <Link className="dropdown-item" to="/privacy">Privacy Policy</Link>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;