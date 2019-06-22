import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid ml-auto mr-auto hide-on-mobile'>
      <div className='row pl-5 pr-5'>
        <div className='col-12 text-left'>
          <h4 className='small'><button className='btn btn-primary btn-sm' data-toggle="collapse" data-target="#demo">Filter by Collections / Categories</button></h4>
        </div>
      </div>
      <div id="demo" className='collapse row text-center pl-5 pr-5 mt-4 filters'>
        <a href='/' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-infinity'></i>
          <br/>
          <br/>
            All
        </a>
        <Link to='/category/media-players' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-play'></i>
          <br/>
          <br/>
            Media Players
        </Link>
        <Link to='/category/antivirus' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-shield-alt'></i>
          <br/>
          <br/>
            Antivirus
        </Link>
        <Link to='/category/internet-browsers' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-globe'></i>
          <br/>
          <br/>
            Browsers
        </Link>
        <Link to='/category/video-editors' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-video'></i>
          <br/>
          <br/>
            Video Editors
        </Link>
        <Link to='/category/file-compressors' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-compress'></i>
          <br/>
          <br/>
            Compressors
        </Link>
        <Link to='/category/downloaders' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-download'></i>
          <br/>
          <br/>
            Downloaders
        </Link>
        <Link to='/category/photo-editors' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-images'></i>
          <br/>
          <br/>
            Photo Editors
        </Link>
        <Link to='/category/for-developers' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-code'></i>
          <br/>
          <br/>
            Developers
        </Link>
        <Link to='/category/drivers' className='col-xl-2 col-lg-2 col-md-2 col-xs-12 pt-5 pb-5 box-alt-2 mb-4'>
          <i className='display-4 fa fa-wrench'></i>
          <br/>
          <br/>
            Drivers
        </Link>
      </div>
    </div>
  );
}

export default Filters;