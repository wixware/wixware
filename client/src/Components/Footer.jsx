import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row mb-4 mt-5 pt-3 pb-3 ml-5 mr-5'>
          <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 pt-2'>
            <div className='footer-menu small'>
              <span className='badge pointer' data-toggle='tooltip' title="You're browsing Wixware Beta">Early Access</span>
              <Link to="/about" className='text-muted'>About</Link>
              <a href="https://news.wixware.com?utm_source=wixware" target='_ublank' className='text-muted'>News</a>
              <Link to="/contact" className='text-muted'>Contact</Link>
              <Link to="/terms" className='text-muted'>Terms</Link>
              <Link to="/privacy" className='text-muted'>Privacy</Link>
              <Link to="/disclaimer" className='text-muted'>Disclaimer</Link>
              <a href="https://api.wixware.com/?utm_source=wixware" target='_ublank' className='text-muted'>Learn about APIs</a>
            </div>
          </div>
          <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 text-right pt-1'>
            <span className='small text-muted'>&copy; 2019 Wixware Open Media Group, by <a href='https://www.appzaib.com' target='_ublank'>Appzaib</a>.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;