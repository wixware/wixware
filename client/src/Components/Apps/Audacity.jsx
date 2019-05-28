import React from 'react';
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import ItemVLC from '../Items/VLC';
import Item7Zip from '../Items/7Zip';
import ItemVSCode from '../Items/VSCode';
import ItemWinRAR from '../Items/ItemWinRAR';
import ItemCCleaner from '../Items/CCleaner';

function Audacity() {

  function downloadWindows64App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/audacity/2.3.1-556658428256858279385252463677676976638555/wixware.com-audacity-2.3.1-x64.exe');
  }
  function downloadWindows32App () {
    window.open('https://cdn.appzaib.com/media/wixware/apps/audacity/2.3.1-742264529928936288527787868268546947687246/wixware.com-audacity-2.3.1-x86.exe');
  }
  function downloadMac() {
    window.open('https://cdn.appzaib.com/media/wixware/apps/audacity/2.3.1-635973972392444986878587959549399345695937/wixware.com-audacity-2.3.1.dmg');
  }
  
  let progressBarStyles = {
    height: '5px'
  };
  let progressBarOne = {
    width: '96%'
  };
  let progressBarTwo = {
    width: '96%'
  };


  return (
    <div>
      <Helmet>
        <title>Download Audacity - Wixware</title>
        <meta name='description' content="Download Audacity and/or more software from wixware.com" />
        <meta name='keywords' content='audacity, download audacity, free audacity, latest audacity, sound editor' />
      </Helmet>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
            <h1>Download Audacity</h1>
            <h5 className='text-muted'>By <a href='https://www.audacityteam.org/?ref_by=wixware.com' target='_ublank' className='text-primary'>Team Audacity</a> <i className='fa fa-check-circle text-primary'></i></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success'>Free &amp; Open Source</span></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v2.3.1</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 25 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            <p>Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, Mac OS X, GNU/Linux and other operating systems. Developed by a group of volunteers as open source.</p>
            <p>Audacity can record live audio through a microphone or mixer, or digitize recordings from other media.</p>
            <p>Import, edit, and combine sound files. Export your recordings in many different file formats, including multiple files at once.</p>
            <p>Easy editing with Cut, Copy, Paste and Delete. Also unlimited sequential Undo (and Redo) in the session to go back any number of steps.</p>
            <p>Spectrogram view mode for visualizing and selecting frequencies. Plot Spectrum window for detailed frequency analysis.</p>
            <h3 className='text-primary pt-5'>Available for All Platforms</h3>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-windows'></i> &nbsp;&nbsp; Get it for Windows</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows32App}>Download 32bit App</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadWindows64App}>Download 64bit App</button>
              </div>
            </div>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-linux'></i> &nbsp;&nbsp; Get it for Linux</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle="modal" data-target="#ubuntuModal" title="Install on Ubuntu"><i className='fab fa-ubuntu'></i> Ubuntu</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle="modal" data-target="#fedoraModal" title="Install on Fedora"><i className='fab fa-fedora'></i> Fedora</button>
              </div>
            </div>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-apple'></i> &nbsp;&nbsp; Get it for Apple</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadMac}>Download For Mac OS X</button>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src='https://cdn.appzaib.com/public/wixware/img/audacity.png' className='mt-5 img-fluid' alt='Download Audacity' />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 07 Downloads</span>
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
                      <span className='small'>WPS 9.6/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemWinRAR />
          <ItemVSCode />
          <Item7Zip />
        </div>
      </div>
      {/* Fedora Installation Modal */}
      <div className="modal fade" id="fedoraModal" tabindex="-1" role="dialog" aria-labelledby="fedoraModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="fedoraModalTitle">Install on Fedora via DNF</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Open up your terminal and run
              <div className='mt-4 bg-dark text-white pt-1 pb-1'>
                <code className='ml-3 disable-select text-secondary'>
                  $
                </code>
                <code className='ml-3 text-warning'>
                  sudo dnf install audacity
                </code>
              </div>
              <small>* Replace "<span className='text-danger'>dnf</span>" with "<span className='text-danger'>yum</span>" if you're using CentOS or RedHat Enterprise Linux.</small>
            </div>
          </div>
        </div>
      </div>
      {/* Ubuntu Installation Modal */}
      <div className="modal fade" id="ubuntuModal" tabindex="-1" role="dialog" aria-labelledby="ubuntuModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ubuntuModalTitle">Install on Ubuntu via APT</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Open up your terminal and run
              <div className='mt-4 bg-dark text-white pt-1 pb-1'>
                <code className='ml-3 disable-select text-secondary'>
                  $
                </code>
                <code className='ml-3 text-warning'>
                  sudo apt-get install audacity
                </code>
              </div>
              <small>* The steps are similar for any other debian-based linux distro.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audacity;