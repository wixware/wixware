import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

import Filters from '../Filters';

import ItemCamtasia from '../Items/Camtasia';
import Item7Zip from '../Items/7Zip';
import ItemCCleaner from '../Items/CCleaner';
import ItemIDM from '../Items/ItemIDM';
import ItemKMPlayer from '../Items/KMPlayer';
import { stringify } from 'querystring';

function downloadWindows64App () {
  window.open('https://cdn.appzaib.com/media/wixware/apps/vlc/3.0.6-683993258935243227979873999866792448443987/wixware.com-vlc-3.0.6-win64.exe');
}
function downloadWindows32App () {
  window.open('https://cdn.appzaib.com/media/wixware/apps/vlc/3.0.6-683993258935243227979873999866792448443987/wixware.com-vlc-3.0.6-win32.exe');
}
function downloadMac() {
  window.open('https://cdn.appzaib.com/media/wixware/apps/vlc/3.0.6-683993258935243227979873999866792448443987/wixware.com-vlc-3.0.6.dmg');
}
function downloadAndroid32App () {
  window.open('https://cdn.appzaib.com/media/wixware/apps/vlc/3.1.1-537868753683253246286365626682667379283645/wixware.com-vlc-android-3.1.1-x86.apk');
}
function downloadAndroid64App () {
  window.open('https://cdn.appzaib.com/media/wixware/apps/vlc/3.1.1-537868753683253246286365626682667379283645/wixware.com-vlc-android-3.1.1-x86_64.apk');
}

let URLParam = '?ref=wixware';

let progressBarStyles = {
  height: '5px'
};
let progressBarOne = {
  width: '82%'
};
let progressBarTwo = {
  width: '89%'
};

class VLCMediaPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }


  componentDidMount() {
    fetch('https://api.wixware.com//app/vlc')
      .then((Response) => Response.json())
      .then((findResponse) => {
        this.setState({
          Name:findResponse.Name,
          Slug:findResponse.Slug,
          Developer:findResponse.Developer,
          DeveloperSite:findResponse.DeveloperSite,
          License:findResponse.License,
          LicenseType:findResponse.LicenseType,
          LicenseURL:findResponse.LicenseURL,
          LatestVersion:findResponse.LatestVersion,
          Description:findResponse.Description,
          ImageURL:findResponse.ImageURL,
        });
      });
  }

  

  render() {

    const App = this.state;

    return (
      <div>
      <Helmet>
        <title>{'Download '+App.Name+' - Wixware'}</title>
        <meta name='description' content={'Download '+App.Name+' and/or more software from wixware.com'} />
        <meta name='keywords' content='vlc, media player, free software, download free software, high speed software server' />
      </Helmet>
      <Filters/>
      <div className='container-fluid mt-5 pl-5 pr-5'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 box pl-5 pr-5 pt-5 pb-5'>
          <h1>Download {App.Name}</h1>
            <h5 className='text-muted'>By <span className='text-primary'><a href={App.DeveloperSite+URLParam} target='_ublank'>{App.Developer}</a></span></h5>
            <div className='row'>
             <div className='col-4'>
                <span className='text-muted'><span className='badge badge-success' data-toggle='tooltip' title={App.LicenseType}>{App.License}</span> <a className='small' href={App.LicenseURL} target='_ublank'>Learn more</a></span>
              </div>
              <div className='col-4 text-center'>
                <span className='text-muted'><span className='badge badge-primary'>v{App.LatestVersion}</span></span>
              </div>
              <div className='col-4 text-right'>
                <span className='text-muted'><span className='badge badge-warning'>File Size 40 MB</span></span>
              </div>
            </div>
            <h4 className='mt-5'>Description</h4>
            {App.Description}
            <h3 className='text-primary pt-5'>Download for other platforms</h3>
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
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadMac}>iOS</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadMac}>Apple TV</button>
              </div>
            </div>
            <div className='download-group mt-5'>
              <div className='btn-group'>
                <button rel='nofollow' disabled className='input-group-text'><i className='fab fa-android'></i> &nbsp;&nbsp; Get it for Android</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadAndroid32App}>Download x86.apk</button>
                <button rel='nofollow' className='btn btn-primary btn-md' data-toggle='tooltip' title="Start download" onClick={downloadAndroid64App}>Download x86_64.apk</button>
              </div>
            </div>
              <small className='text-muted'>
              The v3.1.1 is the latest version for Android.
              {/* For older versions <a href='/archive/vlc'>click here</a>. */}
              </small>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center ml-auto'>
            <div className='row'>
              <div className='col-12 box'>
                <img src={App.ImageURL} className='mt-5 img-fluid' alt={App.Name} />
                <br/>
                <br/>
                <span className='text-muted'><i className='fa fa-download'></i> 451 Downloads</span>
                <br/>
                <br/>
                {/* <span className='small'><a href='/archives/vlc'>Looking for older version?</a></span> */}
              </div>
              <button className='col-12 bg-primary text-white pt-3 pb-3 btn btn-lg' onClick={downloadWindows64App}>Download</button>
              <div className='col-12 box mt-5 pb-5'>
                <div className='col-12 mt-4 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                <h6 className='mb-5 text-muted'>Wixware Performance Test</h6>
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows8.png" alt="Windows 8"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 8.2/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarOne} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-12 pointer' data-toggle='tooltip' title="Wixware Performance Score">
                  <div className='row mt-4'>
                    <div className='col-8'>
                      <img className='' src="https://cdn.appzaib.com/public/wixware/img/windows10.png" alt="Windows 10"/>
                    </div>
                    <div className='col-4 text-right'>
                      <span className='small'>WPS 8.9/10</span>
                    </div>
                  </div>
                  <div className="progress pointer mt-3" style={progressBarStyles}>
                    <div className="progress-bar" role="progressbar" style={progressBarTwo} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
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
          <ItemIDM />
          <ItemKMPlayer />
          <ItemCCleaner />
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
                  sudo dnf install vlc
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
                  sudo apt-get install vlc
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
}

export default VLCMediaPlayer;