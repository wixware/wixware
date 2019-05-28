import React from 'react';

import Helmet from 'react-helmet';


function CategoryDrivers() {
  return (
    <div className='container-fluid ml-5 mr-5 mt-5 text-center'>
      <Helmet>
        <title>Drivers - Wixware</title>
        <meta name='description' content="We've a handful of best drivers categorized just for you. Select any and start downloading for free." />
        <meta name='keywords' content='drivers, audio drivers, video drivers free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='row'>
        <div className='col-12 align-self-center'>
          <h4>Hi, we're working on a few things. Try again later.</h4>
        </div>
      </div>
    </div>
  );
}

export default CategoryDrivers;