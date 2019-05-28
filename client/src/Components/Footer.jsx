import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row box mb-4 mt-5 pt-3 pb-3'>
          <div className='col-2'>
            <Link to='/' className='no-decor'><img src="https://cdn.appzaib.com/public/wixware/img/logo-185x50.png" height='30' alt="Wixware LOGO" className='pointer' /></Link>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-2'>
            <div className='footer-menu small'>
              <Link to="/about" className='text-muted'>About</Link>
              <a href="https://news.wixware.com?utm_source=wixware" className='text-muted'>News</a>
              <Link to="/contact" className='text-muted'>Contact</Link>
              <Link to="/terms" className='text-muted'>Terms</Link>
              <Link to="/privacy" className='text-muted'>Privacy</Link>
              <Link to="/disclaimer" className='text-muted'>Disclaimer</Link>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 text-right pt-1'>
            <span className='small text-muted'>Copyright &copy; 2019 Wixware &amp; AN7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;