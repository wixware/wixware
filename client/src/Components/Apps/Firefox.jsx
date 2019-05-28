import React from 'react';
import { Helmet } from 'react-helmet';

import SearchBar from '../SearchBar';
import ItemVLC from '../Items/VLC';
import ItemIDM from '../Items/ItemIDM';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';
import ItemVSCode from '../Items/VSCode';

function Firefox() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/firefox/66-292336772429388686646687897729448986256626/wixware.com-firefox-66-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/firefox/66-548762863656776969574859792626766486867394/wixware.com-firefox-66-x86.exe');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '84%'
  };
  let progressBarTwo = {
    width: '89%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Mozilla Firefox - Wixware</title>
        <meta name='description' content="Download Mozilla Firefox and/or more software from wixware.com" />
        <meta name='keywords' content='firefox, download firefox, mozilla firefox, internet browser, free browser download' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download Mozilla Firefox</h1>
            <h5 className='text-muted'>By <a href='https://www.mozilla.org/?ref_by=wixware.com' target='_ublank' className='text-primary'>Mozilla Corporation</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free &amp; Open Source</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v66</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 45 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Mozilla Firefox is a free and open-source web browser developed by The Mozilla Foundation and its subsidiary, Mozilla Corporation. Firefox is available for Microsoft Windows, macOS, Linux, BSD, illumos and Solaris operating systems. Its sibling, Firefox for Android, is also available.</p>
            <p>Firefox was created in 2002 under the codename "Phoenix" by the Mozilla community members who desired a standalone browser, rather than the Mozilla Application Suite bundle. During its beta phase, Firefox proved to be popular with its testers and was praised for its speed, security, and add-ons compared to Microsoft's then-dominant Internet Explorer 6. Firefox was released on November 9, 2004.</p>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/firefox.png' className='mt-5 img-fluid' alt='Download Mozilla Firefox' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 47 Downloads</span>
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
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 8.4/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
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
          <ItemVLC />
          <ItemVSCode />
          <Item7Zip />
          <ItemIDM />
        </div>
      </div>
    </div>
  );
}

export default Firefox;