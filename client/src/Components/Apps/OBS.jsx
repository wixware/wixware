import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import AppCard from '../Items/AppCard';
import ItemBlender from '../Items/Blender';
import ItemIDM from '../Items/ItemIDM';
import ItemCCleaner from '../Items/CCleaner';
import ItemWinRAR from '../Items/ItemWinRAR';

function OBS() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/obs/23.1-629424458373772446284336624588272563267326/wixware.com-obs-23.1-x64.exe');
  }
  function downloadMac() {
    window.open('https://cdn.appzaib.com/media/wixware/apps/obs/23.1-777882396738224544535684559462359334784648/wixware.com-obs-23.1.pkg');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '88%'
  };
  let progressBarTwo = {
    width: '89%'
  };


  return (
    <div>
      <Helmet>
        <title>Download OBS (Open Broadcaster Software) - Wixware</title>
        <meta name='description' content="OBS is a free and open source software for video recording and live streaming. Download and start streaming quickly and easily on Windows, Mac or Linux." />
        <meta name='keywords' content='obs, download obs studio, best free broadcasting software, video editors' />
      </Helmet>
      <Filters/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download OBS (Open Broadcaster Software)</h1>
            <h5 className='text-muted'>By <a href='https://obsproject.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>OBS Project</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free &amp; Open Source</span> <a className='small' href='https://obsproject.com/contribute?ref_by=wixware.com' target='_ublank'>Contribute</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v23.1</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 67 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>OBS Studio is equipped with a powerful API, enabling plugins and scripts to provide further customization and functionality specific to your needs. Utilize native plugins for high performance integrations or scripts written with Lua or Python that interface with existing sources. Work with developers in the streaming community to get the features you need with endless possibilities.</p>
            <p>High performance real time video/audio capturing and mixing. Create scenes made up of multiple sources including window captures, images, text, browser windows, webcams, capture cards and more.</p>
            <p>Set up an unlimited number of scenes you can switch between seamlessly via custom transitions.</p>
            <p>Intuitive audio mixer with per-source filters such as noise gate, noise suppression, and gain. Take full control with VST plugin support.</p>
            <p>Powerful and easy to use configuration options. Add new Sources, duplicate existing ones, and adjust their properties effortlessly.</p>
            <p>Streamlined Settings panel gives you access to a wide array of configuration options to tweak every aspect of your broadcast or recording.</p>
            <p>Modular 'Dock' UI allows you to rearrange the layout exactly as you like. You can even pop out each individual Dock to its own window.</p>
            <p>Choose from a number of different and customizable transitions for when you switch between your scenes or add your own stinger video files.</p>
            <p>Set hotkeys for nearly every sort of action, such as switching between scenes, starting/stopping streams or recordings, muting audio sources, push to talk, and more.</p>

            <h3 className='text-primary pt-5'>Available for Windows &amp; MAC</h3>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-windows'></i> &nbsp;&nbsp; Get it for Windows</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' disabled title="Sorry, no luck.">Download 32bit App</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows64App}>Download 64bit App</button>
              </div>
            </div>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-apple'></i> &nbsp;&nbsp; Get it for Apple</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadMac}>Download For Mac OS X</button>
              </div>
            </div>
            <small className='text-muted'>
              The installer size for OS X is 110MB. Good for OS X 10.11+.
            </small>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/obs.png' className='mt-5 img-fluid' alt='Download VS Code' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 06 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/blender'>Looking for older version?</a></span> */}
                <p className='mb-2 text-primary' data-toggle='tooltip' title='Wixware Loves Open Source'><i className='fa fa-heart'></i> <small className=''>Wixware Favorite</small></p>
              </div>
              <div className='col-12 box mt-5 pb-5'>
                <div className='col-12 mt-4 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                <h6 className='mb-5 text-muted'>Wixware Performance Test</h6>
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='float-left' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 8.8/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='float-left' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 8.9/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemCCleaner />
          <AppCard app='vlc'/>
          <ItemIDM />
          <ItemWinRAR />
          <ItemBlender />
        </div>
      </div>
    </div>
  );
}

export default OBS;