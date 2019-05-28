import React from 'react';
import { Helmet } from 'react-helmet';

import SearchBar from '../SearchBar';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';
import ItemCamtasia from '../Items/Camtasia';
import ItemVSCode from '../Items/VSCode';
import ItemWinRAR from '../Items/ItemWinRAR';

function IDM() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/idm/6.33-849697747988268528435958365487822745489393/wixware.com-idm-6.33-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/idm/6.33-332294475642636775877536662329334636875767/wixware.com-idm-6.33-x86.exe');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '70%'
  };
  let progressBarTwo = {
    width: '71%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Internet Download Manager - Wixware</title>
        <meta name='description' content="Download IDM (Internet Download Manager) and/or more software from wixware.com" />
        <meta name='keywords' content='idm, download idm, free idm, latest idm, downloader, download manager' />
      </Helmet>
      <SearchBar/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download Internet Download Manager</h1>
            <h5 className='text-muted'>By <a href='https://www.internetdownloadmanager.com/?ref_by=wixware.com' target='_ublank' className='text-primary'>Tonec</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free trial</span> <a href='https://secure.internetdownloadmanager.com/buy_idm.html?ref_by=wixware.com' target='_ublank' className='small'>Purchase License</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v6.33</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 7 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Internet Download Manager is a shareware download manager. It is only available for the Microsoft Windows operating system. Internet download manager is a tool to manage and schedule downloads. It can use full bandwidth.</p>
            <p>Internet Download Manager (IDM) is a tool to increase download speeds by up to 5 times, resume and schedule downloads. Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic user interface makes IDM user friendly and easy to use.Internet Download Manager has a smart download logic accelerator that features intelligent dynamic file segmentation and safe multipart downloading technology to accelerate your downloads. Unlike other download managers and accelerators Internet Download Manager segments downloaded files dynamically during download process and reuses available connections without additional connect and login stages to achieve best acceleration performance.</p>
            <p>Internet Download Manager supports proxy servers, ftp and http protocols, firewalls, redirects, cookies, authorization, audio and video content processing. IDM integrates seamlessly into Microsoft Internet Explorer, Netscape, MSN Explorer, AOL, Opera, Mozilla, Mozilla Firefox, Mozilla Firebird, Avant Browser, MyIE2, and all other popular browsers to automatically handle your downloads. You can also drag and drop files, or use Internet Download Manager from command line. Internet Download Manager can dial your modem at the set time, download the files you want, then hang up or even shut down your computer when it's done. </p>
            <p>Other features include multilingual support, zip preview, download categories, scheduler pro, sounds on different events, HTTPS support, queue processor, html help and tutorial, enhanced virus protection on download completion, progressive downloading with quotas (useful for connections that use some kind of fair access policy or FAP like Direcway, Direct PC, Hughes, etc.), built-in download accelerator, and many others.</p>
            <h3 className='text-primary pt-5'>Available for Windows</h3>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-windows'></i> &nbsp;&nbsp; Get it for Windows</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows32App}>Download 32bit App</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows64App}>Download 64bit App</button>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/idm.png' className='mt-5 img-fluid' alt='Download IDM' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 74 Downloads</span>
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
                      <span className='small'>WPS 7.0/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 7.1/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="71" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemCamtasia />
          <ItemCCleaner />
          <Item7Zip />
          <ItemVSCode />
          <ItemWinRAR />
        </div>
      </div>
    </div>
  );
}

export default IDM;