import React from 'react';

import Helmet from 'react-helmet';

import SearchBar from '../../Components/SearchBar';
import ItemAvast from '../../Components/Items/Avast';
import ItemCCleaner from '../../Components/Items/CCleaner';

function CategoryAntivirus() {
  return (
    <div className='container-fluid pl-5 pr-5'>
      <Helmet>
        <title>Antivirus - Wixware</title>
        <meta name='description' content="We've a handful of best antivirus software categorized just for you. Select any and start downloading for free." />
        <meta name='keywords' content='antivirus, malware removal, best antivirus free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='row'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-shield-alt'></i> Antivirus</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>02</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemAvast />
            <ItemCCleaner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryAntivirus;