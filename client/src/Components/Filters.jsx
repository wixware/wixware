import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (
    <div className='container-fluid hide-on-mobile'>
      <div className='row'>
        <div className='col-12 ml-5 mr-5'>
          <h4 className='text-dark'>Filter by Collections / Categories</h4>
        </div>
      </div>
      <div className='row text-center mt-4 ml-auto mr-auto filters'>
        <div className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 mr-5 ml-5 pt-2 pb-2 box-alt'>
          <a href='/'>
            <span className=''>All</span>
          </a>
        </div>
        <div className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 mr-5 ml-5 pt-2 pb-2 box-alt'>
          <Link to='/category/media-players'>
            <span>MediaPlayers</span>
          </Link>
        </div>
        <Link to='/category/antivirus' className='col-xl-1 col-lg-2 col-md-4 col-4 col-xs-12 mr-5 ml-5 pt-2 pb-2 box-alt'>
            Antivirus
        </Link>
      </div>
    </div>
  );
}

export default Filters;