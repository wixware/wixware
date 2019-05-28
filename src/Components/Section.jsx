import React from 'react';
import { Helmet } from 'react-helmet';


import SearchBar from './SearchBar';

import ItemVLC from './Items/VLC';
import ItemCamtasia from './Items/Camtasia';
import ItemCCleaner from './Items/CCleaner';
import ItemInkscape from './Items/InkScape';
import ItemBlender from './Items/Blender';
import ItemVSCode from './Items/VSCode';
import ItemFirefox from './Items/Firefox';
import ItemCoreCAD from './Items/CorelCAD';
import ItemKLite from './Items/KLiteCodecPack';
import ItemAvast from './Items/Avast';
import ItemWinRAR from './Items/ItemWinRAR';
import ItemKMPlayer from './Items/KMPlayer';
import Item7Zip from './Items/7Zip';
import ItemAudacity from './Items/Audacity';
import ItemIDM from './Items/ItemIDM';
import ItemChrome from './Items/Chrome';
import ItemOBS from './Items/ItemOBS';

function Section() {

  return (
    <div>
      <Helmet>
        <title>Home - Download Free Software from Wixware</title>
        <meta name='description' content="We're building world's fastest web to serve you hundereds of software at no cost. Try Wixware - It's Free forever." />
        <meta name='keywords' content='best web for software, fastest website for software' />
      </Helmet>
      <div className='container-fluid pl-5 pr-5 mt-5 text-center'>
      <SearchBar/>
        <div className='row'>
          <ItemOBS />
          <ItemCCleaner />
          <ItemVLC />
          <ItemBlender />
          <ItemAudacity />
        </div>
        <div className='row'>
          <ItemInkscape />
          <ItemAvast />
          <ItemCamtasia />
          <ItemChrome />
          <ItemKMPlayer />
        </div>
        <div className='row'>
          <ItemFirefox />
          <ItemIDM />
          <Item7Zip />
          <ItemVSCode />
          <ItemWinRAR />
        </div>
        <div className='row'>
          <ItemCoreCAD />
          <ItemKLite />
        </div>
      </div>
    </div>
  );
}

export default Section;