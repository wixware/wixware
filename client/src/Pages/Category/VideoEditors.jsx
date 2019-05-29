import React from 'react';

import Helmet from 'react-helmet';

import Filters from '../../Components/Filters';

import ItemCamtasia from '../../Components/Items/Camtasia';
import ItemBlender from '../../Components/Items/Blender';
import ItemOBS from '../../Components/Items/ItemOBS';

function CategoryVideoEditors() {
  return (
    <div className='container-fluid pl-5 pr-5 mt-5'>
      <Helmet>
        <title>Video Editors - Wixware</title>
        <meta name='description' content="We've a handful of best video editors categorized just for you. Select any editor and download for free." />
        <meta name='keywords' content='video editors, free video editors, best video editors free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <Filters/>
      <div className='row pl-5 pr-5 mt-5'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-video'></i> Video Editors</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>03</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemCamtasia />
            <ItemBlender />
            <ItemOBS />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryVideoEditors;