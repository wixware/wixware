import React from 'react';

import Helmet from 'react-helmet';

import SearchBar from '../../Components/SearchBar';

function CategoryCDDVD() {
  return (
    <div className='container text-center'>
      <Helmet>
        <title>CD & DVD - Wixware</title>
        <meta name='description' content="We've a handful of best cd & dvd rom software categorized just for you. Select any and start downloading for free." />
        <meta name='keywords' content='cd burner, dvd burner, dvd software free download' />
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

export default CategoryCDDVD;