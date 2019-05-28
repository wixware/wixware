import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import ItemVLC from '../Items/VLC';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';
import ItemVSCode from '../Items/VSCode';
import ItemFirefox from '../Items/Firefox';

function KLiteCodecPack() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/klite/14.9.5-398472659669736978557297328676564846275552/wixware.com-klite-14.9.5-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/klite/14.9.5-398472659669736978557297328676564846275552/wixware.com-klite-14.9.5-x86.exe');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '74%'
  };
  let progressBarTwo = {
    width: '75%'
  };


  return (
    <div>
      <Helmet>
        <title>Download K Lite Codec Pack - Wixware</title>
        <meta name='description' content="Download K Lite Codec Pack and/or more software from wixware.com" />
        <meta name='keywords' content='klite, klite codec, download klite, free download k lite codec pack, codec player' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download K Lite Codec Pack</h1>
            <h5 className='text-muted'>By <a href='https://www.codecguide.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>Codec Guide</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free &amp; Open Source</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v14.9.5</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 45 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>The K-Lite Codec Pack is a collection of audio and video codecs for Microsoft Windows that enables an operating system and its software to play various audio and video formats generally not supported by the operating system itself.</p>
            <p>As of 27 October 2009, CNET reported a total of 1,074,578 downloads for K-Lite Mega Codec Pack 5.2 since its release date of 12 October 2009. User ratings gave it an average of 4.5 out of 5 stars, but it received only 87 reviews. Meanwhile, CNET reported only 122,552 downloads for K-Lite Codec Pack Full Edition 5.2 (released on the same date); however, it also received an average user rating of 4.5 out of 5 stars, albeit from only seven reviewers. No CNET editors had reviewed these products up until this time.</p>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/klite.png' className='mt-5 img-fluid' alt='Download K Lite Codec Pack' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 12 Downloads</span>
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
                      <span className='small'>WPS 7.4/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 7.5/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemFirefox />
          <ItemVSCode />
          <Item7Zip />
        </div>
      </div>
    </div>
  );
}

export default KLiteCodecPack;