import React from 'react';
import SearchBar from './SearchBar';

function Jumbotron() {
  return (
    <div className='container-fluid'>
        <div className='jumbotron bg-transparent text-white mb-auto mt-5 no-border-radius'>
          <div className='row'>
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12'>
              <div className='card bg-transparent'>
                <img className='mh-800 rounded' src="https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
              </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
              <div className='card bg-transparent'>
                <img className='mh-200 img-fluid rounded' src="https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
              </div>
              <div className='card bg-transparent'>
                <img className='mh-200 rounded' src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=862&q=80" alt=""/>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default Jumbotron;