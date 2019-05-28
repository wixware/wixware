import React from 'react';
import { Link } from 'react-router-dom';

function ItemFirefox() {
  return (
    <Link to='/download-mozilla-firefox' className='no-decor col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12 mb-5 mt-auto pr-auto pl-auto mr-auto ml-auto box-alt'>
      <div className='row'>
        <div className='col-12'>
          <img src="https://cdn.appzaib.com/public/wixware/img/firefox.png" className='img-fluid pt-3 pl-4 pr-4' alt="Download Mozilla Firefox" />
        </div>
        <div className='col-12 text-muted small mb-1 mt-2 text-center'>
          <strong className='bold'>Mozilla Firefox</strong>
        </div>
        <div className='col-12 bg-primary text-white pt-1 pb-1'>
            <div className='row text-white'>
              <div className='col-6'>
                <span className=''>Download</span>
              </div>
              <div className='col-6 text-right'>
                <span className='small'>v66</span>
              </div>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemFirefox;