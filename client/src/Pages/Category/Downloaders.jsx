import React from 'react';

import Helmet from 'react-helmet';

import Filters from '../../Components/Filters';

import ItemIDM from '../../Components/Items/ItemIDM';

function CategoryDownloaders() {
  return (
    <div className='container-fluid pl-5 pr-5 mt-5'>
      <Helmet>
        <title>Downloaders - Wixware</title>
        <meta name='description' content="We've a handful of best downloaders categorized just for you. Select any and start downloading for free." />
        <meta name='keywords' content='downloader, free downloader, best downloader free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <Filters/>
      <div className='row mt-5 pl-5 pr-5'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-cloud-download-alt'></i> Download Managers</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>01</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemIDM />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDownloaders; 