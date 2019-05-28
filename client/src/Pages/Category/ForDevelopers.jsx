import React from 'react';

import Helmet from 'react-helmet';

import ItemVSCode from '../../Components/Items/VSCode';

function CategoryForDevelopers() {
  return (
    <div className='container-fluid pl-5 pr-5 mt-5'>
      <Helmet>
        <title>For Developers - Wixware</title>
        <meta name='description' content="We've a handful of best developer software and tools categorized just for you. Select any and download for free." />
        <meta name='keywords' content='developer software, free developer software, best developer software free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='row'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-laptop-code'></i> For Developers</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>01</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemVSCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryForDevelopers;