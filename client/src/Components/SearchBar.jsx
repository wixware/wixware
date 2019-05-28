import React from 'react';

function SearchBar() {
  return (
    <div className='container text-center mt-5 mb-5'>
      <h3 className='display-4 mt-5 mb-5'>Get the tools you need!</h3>
      <form action='/search' method='get' className='mt-4'>
        <div className='form-group'>
          <input type="search" name="keyword" id='keyword' className='searchbar pt-4 pb-4 form-control' placeholder='Search Wixware' autoComplete='off' />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;