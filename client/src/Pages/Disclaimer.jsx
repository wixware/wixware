import React from 'react';
import { Helmet } from 'react-helmet';

function Disclaimer () {
  return (
    <div className='mt-5'>
      <Helmet>
        <title>Disclaimer - Wixware</title>
        <meta name='description' content="Learn about wixware disclaimer." />
        <meta name='keywords' content='wixware discalimer, wixware license' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='mb-4'>
        <div className='container box pl-5 pr-5 pt-5 pb-5'>
          <h1>Disclaimer</h1>
          <p><small>Last updated on May 24, 2019</small></p>
          <div className='docs mt-5'>
            <p>The software listed here are not Wixware's property and Wixware has no direct or indirect connection with the developers. The site only serves as a media downloader and gathers content from publicly available information on the internet.</p>
            <p>Most of the text you'll see in software's description is either taken from the developer's website or from <a href='//www.wikipedia.org' target='_ublank'>Wikipedia</a>.</p>
            <p>If you're a developer of the software listed on our website, and want it to be removed. Please <a href='/contact' target='_ublank'>contact us</a>, and we'll take down that content from our website and servers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;