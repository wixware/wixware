import React from 'react';
import { Helmet } from 'react-helmet';

import SearchBar from '../SearchBar';

import ItemVLC from '../Items/VLC';
import ItemCCleaner from '../Items/CCleaner';
import ItemCamtasia from '../Items/Camtasia';
import ItemFirefox from '../Items/Firefox';
import ItemKMPlayer from '../Items/KMPlayer';

function The7Zip() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/7zip/7z-19.00-x64.zip');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/7zip/7z-19.00-x86.zip');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '80%'
  };
  let progressBarTwo = {
    width: '80%'
  };


  return (
    <div>
      <Helmet>
        <title>Download 7 Zip Software - Wixware</title>
        <meta name='description' content="Download 7 Zip Software and/or more software from wixware.com" />
        <meta name='keywords' content='7zip, 7zip file extractor, download zip software, free download unzip software, file compressor, file extractor' />
      </Helmet>
      <SearchBar/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download 7 Zip</h1>
            <h5 className='text-muted'>By <a href='https://www.7-zip.org/?ref_by=wixware.com' target='_ublank' className='text-primary'>7 Zip</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v19.0</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 2 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Description7-Zip is a free and open-source file archiver, a utility used to place groups of files within compressed containers known as "archives". It is developed by Igor Pavlov and was first released in 1999. 7-Zip uses its own 7z archive format, but can read and write several other archive formats.</p>
            <p>7-Zip comes with a file manager along with the standard archiver tools. The file manager has a toolbar with options to create an archive, extract an archive, test an archive to detect errors, copy, move, and delete files, and open a file properties menu exclusive to 7-Zip. The file manager, by default, displays hidden files because it does not follow Windows Explorer's policies. The tabs show name, modification time, original and compressed sizes, attributes, and comments (4DOS descript.ion format).</p>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/7zip.png' className='mt-5 img-fluid' alt='Download 7 Zip' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 24 Downloads</span>
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
                      <span className='small'>WPS 8.0/10</span>
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
                      <span className='small'>WPS 8.0/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid pl-5 pr-5 mt-4'>
        <h3 className='text-primary mt-5 mb-3 ml-1'>Others you may like</h3>
        <div className='row text-center'>
          <ItemCCleaner />
          <ItemVLC />
          <ItemFirefox />
          <ItemKMPlayer />
          <ItemCamtasia />
        </div>
      </div>
    </div>
  );
}

export default The7Zip;