import React from 'react';

import Helmet from 'react-helmet';

import Filters from '../../Components/Filters';


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
          <h4 className='text-dark'>Uh oh. Looks like there are no drivers added yet.</h4>
          <p>Let us know what you're looking for. We'll add it for you. <a href='https://www.facebook.com/wixware' target='_ublank'>Submit your request</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryDrivers;