import React from 'react';
import { Link } from 'react-router-dom';

function ItemCCleaner() {
  return (
    <Link to='/download-ccleaner' className='no-decor col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12 mb-5 mt-auto pr-auto pl-auto mr-auto ml-auto box-alt'>
      <div className='row'>
        <div className='col-12'>
          <img src="https://cdn.appzaib.com/public/wixware/img/ccleaner.png" className='img-fluid pt-4 pl-4 pr-4' alt="Download C Cleaner" />
        </div>
        <div className='col-12 text-muted small mb-1 mt-2 text-center'>
          <strong className='bold'>C Cleaner</strong>
        </div>
        <div className='col-12 bg-primary text-white pt-1 pb-1'>
            <div className='row'>
              <div className='col-6'>
                <span className=''>Download</span>
              </div>
              <div className='col-6 text-right'>
                <span className='small'>v5.56</span>
              </div>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCCleaner;