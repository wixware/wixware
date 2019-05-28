import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import ItemVLC from '../Items/VLC';
import ItemIDM from '../Items/ItemIDM';
import ItemFirefox from '../Items/Firefox';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';

function WinRAR() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/winrar/5.71-846366874845867288467458374394963624458672/wixware.com-winrar-5.71-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/winrar/5.71-982957833325758939329383798324956662743289/wixware.com-winrar-5.71-x86.exe');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '94%'
  };
  let progressBarTwo = {
    width: '95%'
  };


  return (
    <div>
      <Helmet>
        <title>Download WinRAR - Wixware</title>
        <meta name='description' content="Download WinRAR and/or more software from wixware.com" />
        <meta name='keywords' content='rar, winrar, download winrar, free download winrar, file extractor' />
      </Helmet>
      <Filters/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download WinRAR File Extractor</h1>
            <h5 className='text-muted'>By <a href='https://www.win-rar.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>RAR Lab</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v5.71</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 3 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>WinRAR is a powerful compression tool with many integrated additional functions to help you organize your compressed archives.</p>
            <p>WinRAR puts you ahead of the crowd when it comes to compression. By consistently creating smaller archives, WinRAR is often faster than the competition. This will save you disk space, transmission costs AND valuable working time as well.</p>
            <p>WinRAR supports all popular compression formats (RAR, ZIP, CAB, ARJ, LZH, TAR, GZip, UUE, ISO, BZIP2, Z and 7-Zip).</p>
            <p>WinRAR is ideal for multimedia files. WinRAR automatically recognizes and selects the best compression method. The special compression algorithm compresses multimedia files, executables and object libraries particularly well.</p>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/winrar.png' className='mt-5 img-fluid' alt='Download WinRAR' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 25 Downloads</span>
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
                      <span className='small'>WPS 9.4/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 9.5/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
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
          <Item7Zip />
          <ItemCCleaner />
          <ItemVLC />
          <ItemIDM />
          <ItemFirefox />
        </div>
      </div>
    </div>
  );
}

export default WinRAR;