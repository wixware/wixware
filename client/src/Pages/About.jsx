import React from 'react';
import { Helmet } from 'react-helmet';

function About () {
  return (
    <div>
      <Helmet>
        <title>About - Wixware</title>
        <meta name='description' content="Learn more about our mission at wixware.com" />
        <meta name='keywords' content='about wixware, about wixware mission, about appzaib better sites' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='mb-4'>
        <div className='container box pl-5 pr-5 pt-5 pb-5'>
          <h1>About</h1>
          <p>Our mission is to serve software downloads at high speed without compromising the user experience. To make sure you don't get frustrated from browsing our site, we're using Facebook's Open Source framework <a href='https://reactjs.org/' target='_ublank'>React JS</a> which makes it easy for you to browse our site more effeciently. To serve downloads we've chosen <a href='https://cloud.google.com/cdn/' target='_ublank'>Google Cloud CDN</a> which provides you content from the servers nearest to your location.</p>
          <h4 className='mt-5 mb-4'>We're quite social</h4>
          <p>
            <a className='btn btn-primary'  href='https://www.facebook.com/wixware' target='_ublank'>Like us on Facebook</a>
          </p>
          <p>
            <a className='btn btn-primary' href='https://twitter.com/wixware' target='_ublank'>Follow us on Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;