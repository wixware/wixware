import React from 'react';

import Helmet from 'react-helmet';

import SearchBar from '../../Components/SearchBar';
import ItemVLC from '../../Components/Items/VLC';
import ItemKLiteCodecPack from '../../Components/Items/KLiteCodecPack';
import ItemKMPlayer from '../../Components/Items/KMPlayer';
import ItemAudacity from '../../Components/Items/Audacity';

function CategoryMediaPlayers() {
  return (
    <div className='container-fluid pl-5 pr-5'>
      <Helmet>
        <title>Media Players - Wixware</title>
        <meta name='description' content="We've a handful of best media players categorized just for you. Select any player and download for free." />
        <meta name='keywords' content='audio player, media player, free media player, best media player free download' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <SearchBar/>
      <div className='row'>
        <div className='col-10'>
          <h1 className='text-primary'> <i className='fas fa-play'></i> Media Players</h1>
        </div>
        <div className='col-2 text-right'>
          <h1 className='text-primary'>04</h1>
        </div>
        <div className='col-12 align-self-center text-center mt-5 mb-5 pt-5 pb-5'>
          <div className='row'>
            <ItemVLC />
            <ItemKLiteCodecPack />
            <ItemKMPlayer />
            <ItemAudacity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryMediaPlayers;