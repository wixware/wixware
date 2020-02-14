import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';


import SearchBar from './SearchBar';
import Filters from './Filters';

import ItemCamtasia from './Items/Camtasia';
import ItemCCleaner from './Items/CCleaner';
import ItemInkscape from './Items/InkScape';
import ItemVSCode from './Items/VSCode';
import ItemCoreCAD from './Items/CorelCAD';
import ItemKLite from './Items/KLiteCodecPack';
import ItemAvast from './Items/Avast';
import ItemWinRAR from './Items/ItemWinRAR';
import ItemKMPlayer from './Items/KMPlayer';
import Item7Zip from './Items/7Zip';
import ItemIDM from './Items/ItemIDM';
import ItemChrome from './Items/Chrome';
import AppCard from './Items/AppCard';

class Section extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  // componentDidMount() {
  //   fetch('https://api.wixware.com//app')
  //   .then((Response) => Response.json())
  //   .then((findResponse) => {
  //     this.setState({
  //       data:findResponse
  //     });
  //   });
  // }

  render() {
    return (
      <div>
      <SearchBar/>
      <Filters/>
      <Helmet>
        <title>Home - Download Free Software from Wixware</title>
        <meta name='description' content="We're building world's fastest web to serve you hundereds of software at no cost. Try Wixware - It's Free forever." />
        <meta name='keywords' content='best web for software, fastest website for software' />
      </Helmet>
      <div className='container-fluid pl-5 pr-5 mt-0'>
        <div className='row ml-2 text-left mt-5'>
          <div className='col-12'>
          <h3 className='text-primary'>New &amp; Updated</h3>
            <p><Link to='/featured' className='text-dark'>Browse all featured apps</Link></p>
          </div>
        </div>
        <div className='row'>
          <AppCard app='obs' />
          <ItemCCleaner />
          <AppCard app='vlc' />
          <AppCard app='blender' />
          <AppCard app='audacity' />
        </div>
        <div className='row ml-2 text-left mt-5'>
          <div className='col-12'>
            <h3 className='text-primary'>Trending Apps</h3>
            <p><Link to='/trending' className='text-dark'>See trending this week</Link></p>
          </div>
        </div>
        <div className='row'>
          <AppCard app='obs' />
          <ItemCCleaner />
          <AppCard app='vlc' />
          <AppCard app='blender' />
          <AppCard app='audacity' />
        </div>
        <div className='row'>
          <ItemInkscape />
          <ItemAvast />
          <ItemCamtasia />
          <ItemChrome />
          <ItemKMPlayer />
        </div>
        <div className='row'>
          <AppCard app='obs' />
          <ItemCCleaner />
          <AppCard app='vlc' />
          <AppCard app='blender' />
          <AppCard app='audacity' />
        </div>
        <div className='row ml-2 text-left'>
          <div className='col-12'>
            <h4 className='text-dark'>Recently added</h4>
            <p><Link to='/new' className='text-dark'>Browse recent apps</Link></p>
          </div>
        </div>
        <div className='row'>
          <AppCard app='firefox' />
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
}

export default Section;