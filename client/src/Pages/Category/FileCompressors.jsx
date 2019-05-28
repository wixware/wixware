import React from 'react';

import Helmet from 'react-helmet';

import ItemWinRAR from '../../Components/Items/ItemWinRAR';
import Item7Zip from '../../Components/Items/7Zip';

function CategoryFileCompressors() {
  return (
    <div className='container-fluid pl-5 pr-5 mt-5'>
      <Helmet>
        <title>File Compressors - Wixware</title>
        <meta name='description' content="We've a handful of best file compressors categorized just for you. Select any and start downloading for free." />
        <meta name='keywords' content='file compressor, free file compressor, best file compressor free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='row'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-file-archive'></i> File Compressors</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>02</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemWinRAR />
            <Item7Zip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryFileCompressors;