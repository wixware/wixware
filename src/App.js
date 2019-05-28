import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Section from './Components/Section';
import Jumbotron from './Components/Jumbotron';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Disclaimer from './Pages/Disclaimer';

import VLCMediaPlayer from './Components/Apps/VLCMediaPlayer';
import Camtasia from './Components/Apps/Camtasia';
import CCleaner from './Components/Apps/CCleaner';
import Inkscape from './Components/Apps/Inkscape';
import Blender from './Components/Apps/Blender';
import VSCode from './Components/Apps/VSCode';
import Firefox from './Components/Apps/Firefox';
import CorelCAD from './Components/Apps/CorelCAD';
import KLiteCodecPack from './Components/Apps/KLiteCodecPack';
import WinRAR from './Components/Apps/WinRAR';
import KMPlayer from './Components/Apps/KMPlayer';
import Avast from './Components/Apps/Avast';
import The7Zip from './Components/Apps/7Zip';
import ScrollToTop from './Components/ScrollToTop';
import Audacity from './Components/Apps/Audacity';
import IDM from './Components/Apps/IDM';
import Chrome from './Components/Apps/Chrome';
import Search from './Pages/Search';
import TopMenu from './Components/TopMenu';
import CategoryDownloaders from './Pages/Category/Downloaders';
import CategoryAntivirus from './Pages/Category/Antivirus';
import CategoryForDevelopers from './Pages/Category/ForDevelopers';
import CategoryMediaPlayers from './Pages/Category/MediaPlayers';
import CategoryBrowsers from './Pages/Category/Browsers';
import CategoryVideoEditors from './Pages/Category/VideoEditors';
import CategoryPhotoEditors from './Pages/Category/PhotoEditors';
import CategoryCDDVD from './Pages/Category/CDDVD';
import CategoryFileCompressors from './Pages/Category/FileCompressors';
import CategoryDrivers from './Pages/Category/Drivers';
import OBS from './Components/Apps/OBS';

function Home() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Jumbotron />
        <Header/>
        {/* <TopMenu /> */}
        <Route path='/' exact component={Section} />
        <Route path='/category/downloaders' component={CategoryDownloaders} />
        <Route path='/category/antivirus' component={CategoryAntivirus} />
        <Route path='/category/for-developers' component={CategoryForDevelopers} />
        <Route path='/category/media-players' component={CategoryMediaPlayers} />
        <Route path='/category/internet-browsers' component={CategoryBrowsers} />
        <Route path='/category/video-editors' component={CategoryVideoEditors} />
        <Route path='/category/photo-editors' component={CategoryPhotoEditors} />
        <Route path='/category/cd-dvd' component={CategoryCDDVD} />
        <Route path='/category/file-compressors' component={CategoryFileCompressors} />
        <Route path='/category/drivers' component={CategoryDrivers} />
        <Route path='/download-vlc-media-player' component={VLCMediaPlayer} />
        <Route path='/download-camtasia-studio' component={Camtasia} />
        <Route path='/download-ccleaner' component={CCleaner} />
        <Route path='/download-inkscape' component={Inkscape} />
        <Route path='/download-blender' component={Blender} />
        <Route path='/download-vs-code' component={VSCode} />
        <Route path='/download-mozilla-firefox' component={Firefox} />
        <Route path='/download-corel-cad' component={CorelCAD} />
        <Route path='/download-k-lite-codec-pack' component={KLiteCodecPack} />
        <Route path='/download-winrar' component={WinRAR} />
        <Route path='/download-km-player' component={KMPlayer} />
        <Route path='/download-avast-antivirus' component={Avast} />
        <Route path='/download-7zip' component={The7Zip} />
        <Route path='/download-audacity' component={Audacity} />
        <Route path='/download-idm' component={IDM} />
        <Route path='/download-google-chrome' component={Chrome} />
        <Route path='/download-obs' component={OBS} />
        <Route path='/search' component={Search} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/terms' component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/disclaimer' component={Disclaimer} />
        <Footer />
      </Router>
    </div>
  );
}

export default Home;