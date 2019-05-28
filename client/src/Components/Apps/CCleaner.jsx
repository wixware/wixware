import React from 'react';
import { Helmet } from 'react-helmet';

import SearchBar from '../SearchBar';
import ItemVLC from '../Items/VLC';
import ItemFirefox from '../Items/Firefox';
import ItemCorelCAD from '../Items/CorelCAD';
import ItemInkscape from '../Items/InkScape';
import ItemIDM from '../Items/ItemIDM';

function CCleaner() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/ccleaner/5.56-873559643357334996622495473468535943363729/wixware.com-ccleaner-5.56.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/ccleaner/5.56-873559643357334996622495473468535943363729/wixware.com-ccleaner-5.56.exe');
  }
  function downloadMac() {
    window.open('https://cdn.appzaib.com/media/wixware/apps/ccleaner/1.15-497463435536839593868445559278324972538966/wixware.com-ccleaner-1.15.dmg');
  }

  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '65%'
  };
  let progressBarTwo = {
    width: '73%'
  };


  return (
    <div>
      <Helmet>
        <title>Download C Cleaner - Wixware</title>
        <meta name='description' content="Download C Cleaner and/or more software from wixware.com" />
        <meta name='keywords' content='ccleaner, download c cleaner, free c cleaner, latest c cleaner, c cleaner for windows' />
      </Helmet>
      <SearchBar/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download C Cleaner</h1>
            <h5 className='text-muted'>By <a href='https://www.ccleaner.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>C Cleaner</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free</span> <a className='small' href='https://www.ccleaner.com/?ref_by=wixware.com' target='_ublank'>Get Pro Version</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v5.56</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 21 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p className=''>CCleaner, developed by Piriform, a company acquired by Avast in 2017, is a computer utility program used to clean potentially unwanted files and invalid Windows Registry entries from a computer, originally supporting Microsoft Windows only. It is one of the longest-established system cleaners, first launched in 2004.</p>
            <p>CCleaner is the number-one tool for cleaning your PC. It protects your privacy and makes your computer faster and more secure!</p>
            <p>Trusted by millions and critically acclaimed, there’s a reason why CCleaner is the world’s favorite PC optimization tool! Easy to use, one click cleaning so beginners can optimize their computers in seconds. Plus, it's packed with advanced features for power users. <br/> <a className='small' href='https://www.ccleaner.com/?ref_by=wixware.com' target='_ublank'>Get Pro Version</a></p>
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
            <small className='text-muted'>
              The v1.15 is the latest version for Max OS X.
              {/* For older versions <a href='/archive/ccleaner'>click here</a>. */}
            </small>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/ccleaner.png' className='mt-5 img-fluid' alt='Download C Cleaner' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 105 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/ccleaner'>Looking for older version?</a></span> */}
              </div>
              <div className='col-12 box mt-5 pb-5'>
                <div className='col-12 mt-4 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                <h6 className='mb-5 text-muted'>Wixware Performance Test</h6>
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 6.5/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 7.3/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemInkscape />
          <ItemVLC />
          <ItemIDM />
          <ItemCorelCAD />
        </div>
      </div>
    </div>
  );
}

export default CCleaner;