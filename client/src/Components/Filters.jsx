import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid ml-5 mr-5'>
      <div className='row'>
        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12'>
          <Link to='/category/media-players' className='btn btn-light'>Media Players</Link>
        </div>
        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12'>
          <Link to='/category/antivirus' className='btn btn-light'>Antivirus</Link>
        </div>
        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12'>
          <Link to='/category/internet-browsers' className='btn btn-light'>Browsers</Link>
        </div>
      </div>
    </div>
  );
}

export default Filters;