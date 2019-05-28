import React from 'react';

function SearchBar() {
  return (
    <div className='container text-center mt-5 mb-5'>
      <h3 className='display-3 mt-5 mb-5'>Looking for something?</h3>
      <form action='/search' method='get' className='mt-4'>
        <div className='form-group'>
          <input type="search" name="keyword" id='keyword' className='searchbar pt-4 pb-4 form-control' placeholder='Type something and press Enter to search' autoComplete='off' />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;