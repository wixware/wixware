import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import AppCard from '../Items/AppCard';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';
import ItemIDM from '../Items/ItemIDM';

function Avast() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/avast/avast-19.3.2369-x86_64.zip');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/avast/avast-19.3.2369-x86_64.zip');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '62%'
  };
  let progressBarTwo = {
    width: '65%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Avast Antivirus - Wixware</title>
        <meta name='description' content="Download Avast Antivirus and/or more software from wixware.com" />
        <meta name='keywords' content='avast, avast antivirus, download avast, free download avast antivirus, antivirus software' />
      </Helmet>
      <Filters/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5 mr-auto'>
            <h1>Download Avast Antivirus</h1>
            <h5 className='text-muted'>By <a href='//www.avast.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>Avast</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v19.3</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 1 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Avast Antivirus is a family of internet security applications developed by Avast for Microsoft Windows, macOS, Android and iOS. The Avast Antivirus products include free and proprietary versions that provide computer security, browser security, antivirus software, firewall, anti-phishing, antispyware, and anti-spam among other services.</p>
            <p>In a February 2018 test of various antimalware products by AV-TEST, Avast Free Antivirus has earned 6 out of 6 points in "Protection" category, detecting 100% of malware samples used in this test and earning an "AV-TEST Certified" seal. Avast's Mobile Security &amp; Antivirus app has also performed well and detected 100% of malware samples in January 2018 test of Android malware by AV-Comparatives.</p>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/avast.png' className='mt-5 img-fluid' alt='Download Avast Antivirus' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 17 Downloads</span>
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
                      <span className='small'>WPS 6.5/10</span>
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
      <div className='container-fluid mt-5 pl-5 pr-5 mt-4'>
        <h3 className='text-primary mt-5 mb-3 ml-1'>Others you may like</h3>
        <div className='row text-center'>
          <ItemCCleaner />
          <AppCard app='vlc'/>
          <AppCard app='audacity'/>
          <Item7Zip />
          <ItemIDM />
        </div>
      </div>
    </div>
  );
}

export default Avast;