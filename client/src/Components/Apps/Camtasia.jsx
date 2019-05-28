import React from 'react';
import { Helmet } from 'react-helmet';

import ItemVLC from '../Items/VLC';
import ItemIDM from '../Items/ItemIDM';
import ItemBlender from '../Items/Blender';
import ItemCCleaner from '../Items/CCleaner';
import ItemVSCode from '../Items/VSCode';

function Camtasia() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/camtasia/2019-465859977285895289987428562697554976676328/wixware.com-camtasia-2019.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/camtasia/2019-465859977285895289987428562697554976676328/wixware.com-camtasia-2019.exe');
  }
  function downloadMac() {
    window.open('https://cdn.appzaib.com/media/wixware/apps/camtasia/2019-238522837436573458695863422844342364836665/wixware.com-camtasia-2019.dmg');
  }

  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '62%'
  };
  let progressBarTwo = {
    width: '70%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Camtasia Video Editor - Wixware</title>
        <meta name='description' content="Download Camtasia Video Editor and/or more software from wixware.com" />
        <meta name='keywords' content='camtasia, camtasia editor, free camtasia, latest camtasia, camtasia video editor' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download Camtasia Video Editor</h1>
            <h5 className='text-muted'>By <a href='https://www.techsmith.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>Tech Smith</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free trial</span> <a className='small' href='https://www.techsmith.com/store/camtasia?ref_by=wixware.com' target='_ublank'>Purchase License</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v2019</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 490 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p className=''>Camtasia is a software suite, created and published by <a href='https://www.techsmith.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>Tech Smith</a>, for creating video tutorials and presentations directly via screencast, or via a direct recording plug-in to Microsoft PowerPoint.</p>
            <p>Camtasia is quick to learn. You don’t need a big budget or fancy video editing skills. Simply record your screen and add a few effects.</p>
            <p>Whether you have experience or this is your first time making a video, we’ll give you everything you need to make a high-quality video.</p>
            <p>Create content your viewers actually watch. A video will give you more interaction and help your audience to learn more than with text alone.</p>
            <h3 className='text-primary pt-5'>Now Available for both Windows &amp; Mac</h3>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-windows'></i> &nbsp;&nbsp; Get it for Windows</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows32App}>Download 32bit App</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows64App}>Download 64bit App</button>
              </div>
            </div>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-apple'></i> &nbsp;&nbsp; Get it for Apple</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadMac}>Download For Mac OS X</button>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/camtasia.png' className='mt-5 img-fluid' alt='Download Camtasia Video Editor' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 221 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/camtasia'>Looking for older version?</a></span> */}
              </div>
              <div className='col-12 box mt-5 pb-5'>
                <div className='col-12 mt-4 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                <h6 className='mb-5 text-muted'>Wixware Performance Test</h6>
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 6.2/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 7/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemBlender />
          <ItemVSCode />
          <ItemVLC />
          <ItemIDM />
          <ItemCCleaner />
        </div>
      </div>
    </div>
  );
}

export default Camtasia;