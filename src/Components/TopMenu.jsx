import React from 'react';

import {Link} from 'react-router-dom';


function TopMenu() {
  
  function markActive() {
    let div = document.getElementById('topMenu');
    for (let i = 0; i < div.children.length; i++) {
      let childItem = div.children[i];
      childItem.classList.remove('active');
    }
    document.activeElement.classList.add('active');
  }

  return (
    <nav className='bg-primary mb-5 hide-on-mobile mt-auto'>
      <ul className='top-menu text-center' id='topMenu'>
          <Link to='/' className='btn btn-sm btn-primary active pt-2' onClick={markActive}> <i className='fas fa-infinity'></i> All</Link>
          <Link to='/category/media-players' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-play'></i> Media Players</Link>
          <Link to='/category/antivirus' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-shield-alt'></i> Antivirus</Link>
          <Link to='/category/internet-browsers' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-globe-asia'></i> Browsers</Link>
          <Link to='/category/video-editors' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-video'></i> Video Editors</Link>
          <Link to='/category/file-compressors' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-file-archive'></i> File Compressors</Link>
          <Link to='/category/downloaders' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-cloud-download-alt'></i> Downloaders</Link>
          <Link to='/category/for-developers' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-laptop-code'></i> For Developers</Link>
          <Link to='/category/photo-editors' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fa fa-images'></i> Photo Editors</Link>
          <Link to='/category/cd-dvd' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fas fa-compact-disc'></i> CD / DVD</Link>
          <Link to='/category/drivers' className='btn btn-sm btn-primary pt-2' onClick={markActive}> <i className='fas fa-screwdriver'></i> Drivers</Link>
        </ul>
    </nav>
  );
}

export default TopMenu;