import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid hide-on-mobile'>
      <div className='row'>
        <div className='col-12 ml-5 mr-5'>
          <h4 className='text-dark'>Filter by Collections / Categories</h4>
        </div>
      </div>
      <div className='row ml-auto mr-auto'>
        <a href='/' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>All</Link>
        </a>
        <Link to='/category/media-players' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>MediaPlayers</Link>
        </Link>
        <Link to='/category/antivirus' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>Antivirus</Link>
        </Link>
        <Link to='/category/internet-browsers' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>Browsers</Link>
        </Link>
        <Link to='/category/video-editors' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>VideoEditors</Link>
        </Link>
        <Link to='/category/file-compressors' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>Compressors</Link>
        </Link>
        <Link to='/category/downloaders' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>Downloaders</Link>
        </Link>
        <Link to='/category/photo-editors' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>PhotoEditors</Link>
        </Link>
        <Link to='/category/for-developers' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>Developers</Link>
        </Link>
        <Link to='/category/drivers' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 pr-2 pl-2'>
          <Link>Drivers</Link>
        </Link>
      </div>
    </div>
  );
}

export default Filters;