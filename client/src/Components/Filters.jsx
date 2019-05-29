import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid ml-auto mr-auto hide-on-mobile'>
      <div className='row ml-5'>
        <div className='col-12'>
          <h4 className='text-dark'>Filter by Collections / Categories</h4>
        </div>
      </div>
      <div className='row text-center ml-5 mt-4 filters'>
        <a href='/' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            All
        </a>
        <Link to='/category/media-players' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Media Players
        </Link>
        <Link to='/category/antivirus' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Antivirus
        </Link>
        <Link to='/category/internet-browsers' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Browsers
        </Link>
        <Link to='/category/video-editors' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Video Editors
        </Link>
        <Link to='/category/file-compressors' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Compressors
        </Link>
        <Link to='/category/downloaders' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Downloaders
        </Link>
        <Link to='/category/photo-editors' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Photo Editors
        </Link>
        <Link to='/category/for-developers' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Developers
        </Link>
        <Link to='/category/drivers' className='col-xl-2 col-lg-3 col-md-4 col-xs-12 mr-4 ml-4 pt-2 pb-2 box-alt-2 mb-4'>
            Drivers
        </Link>
      </div>
    </div>
  );
}

export default Filters;