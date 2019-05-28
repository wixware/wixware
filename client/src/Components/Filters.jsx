import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid'>
      <div className='row ml-auto mr-auto'>
        <a className='btn btn-sm col-2 align-self-center'>
          <span>Filter by Collections</span>
        </a>
        <a href='/' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>All</span>
        </a>
        <Link to='/category/media-players' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>MediaPlayers</span>
        </Link>
        <Link to='/category/antivirus' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>Antivirus</span>
        </Link>
        <Link to='/category/internet-browsers' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>Browsers</span>
        </Link>
        <Link to='/category/video-editors' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>VideoEditors</span>
        </Link>
        <Link to='/category/file-compressors' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>Compressors</span>
        </Link>
        <Link to='/category/downloaders' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>Downloaders</span>
        </Link>
        <Link to='/category/photo-editors' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>PhotoEditors</span>
        </Link>
        <Link to='/category/for-developers' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>Developers</span>
        </Link>
        <Link to='/category/drivers' className='btn btn-light btn-sm col-xl-1 col-lg-2 col-md-4 col-sm-4 col-xs-12'>
          <span>Drivers</span>
        </Link>
      </div>
    </div>
  );
}

export default Filters;