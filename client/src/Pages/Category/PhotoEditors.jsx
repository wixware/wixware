import React from 'react';

import Helmet from 'react-helmet';

import ItemInkscape from '../../Components/Items/InkScape';

function CategoryPhotoEditors() {
  return (
    <div className='container-fluid pl-5 pr-5 mt-5'>
      <Helmet>
        <title>Photo Editors - Wixware</title>
        <meta name='description' content="We've a handful of best photo editors categorized just for you. Select any editor and download for free." />
        <meta name='keywords' content='photo editors, free photo editors, best photo editors free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='row'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-images'></i> Photo Editors</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>01</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemInkscape />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPhotoEditors;