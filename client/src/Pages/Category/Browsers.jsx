import React from 'react';

import Helmet from 'react-helmet';

import Filters from '../../Components/Filters';

import ItemChrome from '../../Components/Items/Chrome';
import ItemFirefox from '../../Components/Items/Firefox';

function CategoryBrowsers() {
  return (
    <div className='container-fluid pl-5 pr-5 mt-5'>
      <Helmet>
        <title>Internet Browsers - Wixware</title>
        <meta name='description' content="We've a handful of best internet browsers categorized just for you. Select any and start downloading for free." />
        <meta name='keywords' content='browser, internet browser, best internet browser free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <Filters/>
      <div className='row mt-5 pl-5 pr-5'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-globe-asia'></i> Internet Browsers</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>02</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemChrome />
            <ItemFirefox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBrowsers;