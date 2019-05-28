import React from 'react';
// import logo from '../logo.png';

import { Link } from 'react-router-dom';

function Header() {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top mr-0">
  <a class="navbar-brand" href="/"><img src="https://cdn.appzaib.com/public/wixware/img/logo-185x50.png" height='30px' alt="Wixware Logo"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/about">
          About
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Header;