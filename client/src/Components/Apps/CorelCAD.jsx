import React from 'react';
import { Helmet } from 'react-helmet';

import ItemVLC from '../Items/VLC';
import ItemIDM from '../Items/ItemIDM';
import ItemVSCode from '../Items/VSCode';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';

function CorelCAD() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/CorelCAD/2019-832298698557329999758376553923495664967658/wixware.com-corelcad-2019-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/CorelCAD/2019-389528394682265664837265247927559989479746/wixware.com-corelcad-2019-x86.exe');
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
        <title>Download Corel CAD - Wixware</title>
        <meta name='description' content="Download Corel CAD and/or more software from wixware.com" />
        <meta name='keywords' content='corel cad, download corel cad, corel draw, free download corel draw, corel cad editor' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download CorelCAD Software</h1>
            <h5 className='text-muted'>By <a href='https://www.coreldraw.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>Corel Draw</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free trial</span> <a href='https://www.coreldraw.com/en/product/corel-cad/?ref_by=wixware.com' target='_ublank' className='small'>Purchase License</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v2019</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 300 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Empower yourself with CorelCAD, an incredibly robust set of design tools developed expressly for design professionals. Conceptualize, plan, draft, layout, and edit with the assistance of the leading computer aided design software on the market. With an expansive feature set, your 2D drawings will come together expertly.</p>
            <p>Arm yourself with advanced CAD tools and features to design 3D computer graphics, effortlessly. Easily transform 2D designs into three-dimensional graphics in just a few clicks. Feel confident that you’ll achieve results fast with CorelCAD; delivering to specifications and to project parameters for an amazing outcome every time.</p>
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
                <img src='https://cdn.appzaib.com/public/wixware/img/corelcad-2019.jpg' className='mt-5 img-fluid' alt='Download CorelCAD 2019' />
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
          <ItemVSCode />
          <Item7Zip />
          <ItemIDM />
        </div>
      </div>
    </div>
  );
}

export default CorelCAD;