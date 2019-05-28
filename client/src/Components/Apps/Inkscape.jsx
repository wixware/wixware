import React from 'react';
import { Helmet } from 'react-helmet';

import SearchBar from '../SearchBar';
import ItemVLC from '../Items/VLC';
import Item7Zip from '../Items/7Zip';
import ItemAudacity from '../Items/Audacity';
import ItemCCleaner from '../Items/CCleaner';
import ItemVSCode from '../Items/VSCode';

function Inkscape() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/inkscape/0.92.4-224786766629765996733425295548472453997736/wixware.com-inkscape-0.92.4-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/inkscape/0.92.4-284872836553563898523285429435993485366325/wixware.com-inkscape-0.92.4-x86.exe');
  }
  // function downloadMac() {
  //   window.open('https://cdn.appzaib.com/media/wixware/apps/ccleaner/1.15-497463435536839593868445559278324972538966/wixware.com-ccleaner-1.15.dmg');
  // }

  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '92%'
  };
  let progressBarTwo = {
    width: '96%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Inkscape - Wixware</title>
        <meta name='description' content="Download Inkscape and/or more software from wixware.com" />
        <meta name='keywords' content='inkscape, download inkscape, free inkscape, latest inkscape, inkscape editor' />
      </Helmet>
      <SearchBar/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download Inkscape</h1>
            <h5 className='text-muted'>By <a href='https://inkscape.org/?ref_by=wixware.com' target='_ublank' className='text-primary'>Inkscape.org</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free &amp; Open Source</span> <a className='small' href='https://inkscape.org/support-us/?ref_by=wixware.com' target='_ublank'>Support</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v0.92.4</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 64 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Inkscape is a free and open-source vector graphics editor. This software can be used to create or edit vector graphics such as illustrations, diagrams, line arts, charts, logos and complex paintings.</p>
            <p className=''>Whether you are an illustrator, designer, web designer or just someone who needs to create some vector imagery, Inkscape is for you!</p>
            <p>Inkscape is a professional vector graphics editor for Windows, Mac OS X and Linux. It's free and open source.</p>
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
              For older versions <a href='/archive/inkscape'>click here</a>.
            </small> */}
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/inkscape.png' className='mt-5 img-fluid' alt='Download Inkscape' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 55 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/inkscape'>Looking for older version?</a></span> */}
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
                      <span className='small'>WPS 9.2/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 9.6/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemAudacity />
          <Item7Zip />
          <ItemVSCode />
        </div>
      </div>
    </div>
  );
}

export default Inkscape;