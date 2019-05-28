import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import ItemIDM from '../Items/ItemIDM';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';
import ItemVSCode from '../Items/VSCode';
import ItemFirefox from '../Items/Firefox';

function Chrome() {

  function downloadWindowsApp () {
    window.open('https://www.google.com/chrome/?ref_by=wixware.com');
  }
  function downloadUbuntuApp() {
    window.open('https://cdn.appzaib.com/media/wixware/apps/chrome/74-782836846777638266297856337934374733226932/wixware.com-chrome-74-x64.deb');
  }
  function downloadFedoraApp() {
    window.open('https://cdn.appzaib.com/media/wixware/apps/chrome/74-773266873654436339245838328634728555942746/wixware.com-chrome-74-x64.rpm');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '90%'
  };
  let progressBarTwo = {
    width: '92%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Google Chrome - Wixware</title>
        <meta name='description' content="Download Google Chrome and/or more software from wixware.com" />
        <meta name='keywords' content='chrome, download chrome, mozilla chrome, internet browser, free browser download' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download Google Chrome</h1>
            <h5 className='text-muted'>By <a href='https://www.google.com/chrome/?ref_by=wixware.com' target='_ublank' className='text-primary'>Google</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v74</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 55 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, and was later ported to Linux, macOS, iOS, and Android. The browser is also the main component of Chrome OS, where it serves as the platform for web apps.</p>
            <p>When you’re on the web, you’re on a mission. Big or small, work or play – Chrome has the smarts and speed you need to do, create, and explore online.</p>
            <p>Chrome has everything you need to make the most of the web, like quick answers in your address bar, one-click translation, and personalized articles for you on your phone.</p>
            <h3 className='text-primary pt-5'>Available for both Windows &amp; Linux</h3>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-windows'></i> &nbsp;&nbsp; Get it for Windows</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Download from Google Chrome's official website" onClick={downloadWindowsApp}>Download from Google Chrome Official site</button>
              </div>
            </div>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-linux'></i> &nbsp;&nbsp; Get it for Linux</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadUbuntuApp}><i className='fab fa-ubuntu'></i> Ubuntu</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadFedoraApp}><i className='fab fa-fedora'></i> Fedora</button>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/chrome.png' className='mt-5 img-fluid' alt='Download Google Chrome' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 84 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/blender'>Looking for older version?</a></span> */}
                <p className='mb-2 text-primary' data-toggle='tooltip' title='Wixware Loves Google'><i className='fa fa-heart'></i> <small className=''>Wixware Favorite</small></p>
              </div>
              <div className='col-12 box mt-5 pb-5'>
                <div className='col-12 mt-4 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                <h6 className='mb-5 text-muted'>Wixware Performance Test</h6>
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 9.0/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 9.2/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemFirefox />
          <ItemCCleaner />
          <ItemVSCode />
          <Item7Zip />
          <ItemIDM />
        </div>
      </div>
    </div>
  );
}

export default Chrome;