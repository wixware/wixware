import React from 'react';

import ItemVLC from '../Components/Items/VLC';
import ItemCamtasia from '../Components/Items/Camtasia';
import ItemCCleaner from '../Components/Items/CCleaner';
import ItemInkscape from '../Components/Items/InkScape';
import ItemBlender from '../Components/Items/Blender';
import ItemVSCode from '../Components/Items/VSCode';
import ItemFirefox from '../Components/Items/Firefox';
import ItemCoreCAD from '../Components/Items/CorelCAD';
import ItemKLite from '../Components/Items/KLiteCodecPack';
import ItemAvast from '../Components/Items/Avast';
import ItemWinRAR from '../Components/Items/ItemWinRAR';
import ItemKMPlayer from '../Components/Items/KMPlayer';
import Item7Zip from '../Components/Items/7Zip';
import ItemAudacity from '../Components/Items/Audacity';
import ItemIDM from '../Components/Items/ItemIDM';
import ItemChrome from '../Components/Items/Chrome';
import ItemOBS from '../Components/Items/ItemOBS';

function Search(props) {

  function getKeywords() {
    const str = window.location.search;
    let keyword = str.replace('?keyword=', '');
    let keywords = keyword.replace(/[.*+?^${}()|[\]\\]/g, ' ');
    return keywords;
  }

  function getResults() {
    const str = window.location.search;
    let keyword = str.replace('?keyword=', '');
    let keywords = keyword.replace(/[.*+?^${}()|[\]\\]/g, ' ');

    // Temporarily using hardcoded data
    const inventory = {
      "ItemCCleaner": "ccleaner, c-cleaner, system cleaner, antivirus, anti virus, scanner, systemcleaner",
      "ItemVLC": "vlc media player, vlcmediaplayer, mediaplayer",
      "ItemBlender": "blender, video editor",
      "ItemAudacity": "audacity, audio editor, noise reducer, pitch",
      "ItemInkscape": "inkscape, illustrator, svg",
      "ItemAvast": "avast, antivirus, system protection",
      "ItemCamtasia": "camtasia, video editor, tech smith",
      "ItemChrome": "google chrome, internet, web, browser",
      "ItemKMPlayer": "kmplayer, km player, videoplayer, video, media codec",
      "ItemFirefox": "mozilla firefox, opensource, open source, internet, web, browser",
      "ItemIDM": "download, manager, idm, internet",
      "Item7Zip": "7zip, 7 zip, file extractor, compressor, archive",
      "ItemVSCode": "vscode, microsoft vs code, file, text, code, editor, developer, programmer, open source, opensource",
      "ItemWinRAR": "winrar, win rar,file extractor, compressor, archive",
      "ItemCorelCAD": "corecad, corel cad, 3d, graphics, blueprint",
      "ItemKLiteCodecPack": "klite, k lite, codec pack, video player, mediaplayer, media",
      "ItemOBS": "obs, open broadcaster software, open source, opensource",
    };

    // Temporarily using hardcoded search
    let checkForCCleaner = inventory['ItemCCleaner'].search(keywords);
    let checkForVLC = inventory['ItemVLC'].search(keywords);
    let checkForBlender = inventory['ItemBlender'].search(keywords);
    let checkForAudacity = inventory['ItemAudacity'].search(keywords);
    let checkForInkscape = inventory['ItemInkscape'].search(keywords);
    let checkForAvast = inventory['ItemAvast'].search(keywords);
    let checkForCamtasia = inventory['ItemCamtasia'].search(keywords);
    let checkForChrome = inventory['ItemChrome'].search(keywords);
    let checkForKMPlayer = inventory['ItemKMPlayer'].search(keywords);
    let checkForFirefox = inventory['ItemFirefox'].search(keywords);
    let checkForIDM = inventory['ItemIDM'].search(keywords);
    let checkFor7Zip = inventory['Item7Zip'].search(keywords);
    let checkForVSCode = inventory['ItemVSCode'].search(keywords);
    let checkForWinRAR = inventory['ItemWinRAR'].search(keywords);
    let checkForCorelCAD = inventory['ItemCorelCAD'].search(keywords);
    let checkForKLite = inventory['ItemKLiteCodecPack'].search(keywords);
    let checkForOBS = inventory['ItemOBS'].search(keywords);
    
    // AutoFinder()
    // let thisValue = Object.keys(inventory['ItemVLC']);
    // const items = Object.keys(inventory).length;
    // for(let i = 0; i < items; i++) {
    //   let checkForApp = inventory[i].search(keywords);
    //   if(checkForApp > -1) {
    //     let thisValue = Object.keys(inventory[i]);
    //     console.log(thisValue);
    //   }
    // }
    // console.log(thisValue);

    
    
    if(checkForCCleaner > -1) {
      return (<ItemCCleaner/>);
    }
    if(checkForVLC > -1) {
      return (<ItemVLC/>);
    }
    if(checkForBlender > -1) {
      return (<ItemBlender/>);
    }
    if(checkForAudacity > -1) {
      return (<ItemAudacity/>);
    }
    if(checkForInkscape > -1) {
      return (<ItemInkscape/>);
    }
    if(checkForAvast > -1) {
      return (<ItemAvast/>);
    }
    if(checkForCamtasia > -1) {
      return (<ItemCamtasia/>);
    }
    if(checkForChrome > -1) {
      return (<ItemChrome/>);
    }
    if(checkForKMPlayer > -1) {
      return (<ItemKMPlayer/>);
    }
    if(checkForBlender > -1) {
      return (<ItemBlender/>);
    }
    if(checkForFirefox > -1) {
      return (<ItemFirefox/>);
    }
    if(checkForIDM > -1) {
      return (<ItemIDM/>);
    }
    if(checkFor7Zip > -1) {
      return (<Item7Zip/>);
    }
    if(checkForVSCode > -1) {
      return (<ItemVSCode/>);
    }
    if(checkForWinRAR > -1) {
      return (<ItemWinRAR/>);
    }
    if(checkForCorelCAD > -1) {
      return (<ItemCoreCAD/>);
    }
    if(checkForKLite > -1) {
      return (<ItemKLite/>);
    }
    if(checkForOBS > -1) {
      return (<ItemOBS/>);
    }



  }

  return (
    <div className='container-fluid pl-5 mt-5 pr-5 pb-5'>
      <div className='row'>
        <div className='col-12 pl-5 pr-5 text-center'>
          <h1>Search results for "{getKeywords()}"</h1>
          <div className='row text-center mt-5'>
            {getResults()}
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12 text-center mt-5'>
          <small className='badge badge-warning'>Early Access Notice</small> <i className='small'>Currently, the search functionality is limited to the software name. We're expanding search paramaters and will let you know soon when it's ready.</i>
        </div>
      </div>
    </div>
  );
}

export default Search;