import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';

class ItemVLC extends Component {

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
          Permalink:findResponse.Permalink,
          LatestVersion:findResponse.LatestVersion,
          ImageURL:findResponse.ImageURL,
        });
      });
  }

  render () {

    const App = this.state;

    return (
      <Link to={'download-'+App.Permalink} className='no-decor col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12 mb-5 mt-auto pr-auto pl-auto mr-auto ml-auto box-alt'>
        <div className='row'>
          <div className='col-12'>
            <img src={App.ImageURL} className='img-fluid pt-4 pl-4 pr-4' alt={App.Name} />
          </div>
          <div className='col-12 text-muted small mb-1 mt-2 text-center'>
            <strong className='bold'>{App.Name}</strong>
          </div>
          <div className='col-12 bg-primary text-white pt-1 pb-1'>
              <div className='row text-white'>
                <div className='col-6'>
                  <span className=''>Download</span>
                </div>
                <div className='col-6 text-right'>
                  <span className='small'>v{App.LatestVersion}</span>
                </div>
              </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ItemVLC;