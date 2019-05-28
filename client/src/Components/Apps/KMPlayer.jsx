import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import ItemVLC from '../Items/VLC';
import ItemKLiteCodecPack from '../Items/KLiteCodecPack';
import ItemVSCode from '../Items/VSCode';
import ItemIDM from '../Items/ItemIDM';
import ItemCCleaner from '../Items/CCleaner';

function KMPlayer() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/kmplayer/kmplayer-4.2.2.22-x86_64.zip');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/kmplayer/kmplayer-4.2.2.22-x86_64.zip');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '87%'
  };
  let progressBarTwo = {
    width: '91%'
  };


  return (
    <div>
      <Helmet>
        <title>Download KM Player - Wixware</title>
        <meta name='description' content="Download KM Player and/or more software from wixware.com" />
        <meta name='keywords' content='km player, kmplayer, download km player, free download km player, video player' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download KM Player</h1>
            <h5 className='text-muted'>By <a href='//www.kmplayer.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>KM Player</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v4.2</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 50 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>K-Multimedia Player is a media player for Windows which can play a large number of formats including VCD, DVD, AVI, MKV, Ogg, OGM, 3GP, MPEG-1/2/4, AAC, WMA 7, 8, WMV, RealMedia, FLV and QuickTime.</p>
            <p>The player handles a wide range of audio, video and subtitle formats and allows one to capture audio, video and screenshots. It provides both internal and external filters with a fully controlled environment of connections to other splitters, decoders, audio/video transform filters and renderers without grappling with the DirectShow merit system (a system of selecting and prioritizing codecs across the entire Windows operating system). Internal filters are not registered into the system's registry in order to prevent the operating system from confusing system filters with K-Multimedia Player's filters.</p>
            <h3 className='text-primary pt-5'>Available for Windows</h3>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-windows'></i> &nbsp;&nbsp; Get it for Windows</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows32App}>Download 32bit App</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows64App}>Download 64bit App</button>
              </div>
            </div>
            {/* <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-apple'></i> &nbsp;&nbsp; Get it for Apple</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadMac}>Download For Mac OS X</button>
              </div>
            </div>
            <small className='text-muted'>
              The v1.15 is the latest version for Max OS X.
              For older versions <a href='/archive/blender'>click here</a>.
            </small> */}
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/kmplayer.png' className='mt-5 img-fluid' alt='Download KM Player' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 23 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/blender'>Looking for older version?</a></span> */}
              </div>
              <div className='col-12 box mt-5 pb-5'>
                <div className='col-12 mt-4 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                <h6 className='mb-5 text-muted'>Wixware Performance Test</h6>
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 8.7/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 9.1/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-5 pl-5 pr-5 mt-4'>
        <h3 className='text-primary mt-5 mb-3 ml-1'>Others you may like</h3>
        <div className='row text-center'>
          <ItemVLC />
          <ItemKLiteCodecPack />
          <ItemIDM />
          <ItemCCleaner />
          <ItemVSCode />
        </div>
      </div>
    </div>
  );
}

export default KMPlayer;