import React from 'react';
import { Link } from 'react-router-dom';

function ItemKLite() {
  return (
    <Link to='/download-k-lite-codec-pack' className='no-decor col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12 mb-5 mt-auto pr-auto pl-auto mr-auto ml-auto box-alt'>
      <div className='row'>
        <div className='col-12'>
          <img src="https://cdn.appzaib.com/public/wixware/img/klite.png" className='img-fluid pt-4 pl-4 pr-4' alt="Download K Lite Codec Pack" />
        </div>
        <div className='col-12 text-muted small mb-1 mt-2 text-center'>
          <strong className='bold'>K Lite Codec Pack</strong>
        </div>
        <div className='col-12 bg-primary text-white pt-1 pb-1'>
            <div className='row text-white'>
              <div className='col-6'>
                <span className=''>Download</span>
              </div>
              <div className='col-6 text-right'>
                <span className='small'>v14.9.5</span>
              </div>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemKLite;