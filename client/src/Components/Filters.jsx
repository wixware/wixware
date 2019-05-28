import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid ml-auto mr-auto'>
      <div className='row'>
        <Link to='/category/media-players' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Media Players</span>
        </Link>
        <Link to='/category/antivirus' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Antivirus</span>
        </Link>
        <Link to='/category/internet-browsers' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Browsers</span>
        </Link>
        <Link to='/category/video-editors' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Video Editors</span>
        </Link>
        <Link to='/category/file-compressors' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>File Compressors</span>
        </Link>
        <Link to='/category/downloaders' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Downloaders</span>
        </Link>
        <Link to='/category/photo-editors' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Photo Editors</span>
        </Link>
        <Link to='/category/for-developers' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>For Developers</span>
        </Link>
        <Link to='/category/cd-dvd' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>CD &amp; DVD</span>
        </Link>
        <Link to='/category/drivers' className='btn btn-light col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-12'>
          <span>Drivers</span>
        </Link>
      </div>
    </div>
  );
}

export default Filters;