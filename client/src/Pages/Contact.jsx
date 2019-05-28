import React from 'react';
import { Helmet } from 'react-helmet';

function Contact () {
  return (
    <div className='mt-5'>
      <Helmet>
        <title>Contact - Wixware</title>
        <meta name='description' content="Learn how you can contact wixware to request new software or write some suggestion at wixware" />
        <meta name='keywords' content='contact wixware, request new software wixware, message wixware, reach wixware team, contact wixware team' />
        <meta name='author' content='Wixware Team' />
      </Helmet>
      <div className='mb-4'>
        <div className='container box pl-5 pr-5 pt-5 pb-5'>
          <h1>Contact</h1>
          <div className='row'>
            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12'>
              <h3>Leave a message</h3>
              <div className='row'>
                <form action="/contact" method='post' className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-5'>
                  <div className='form-group'>
                    <input type='text' name='Name' placeholder='Your name' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <input type='email' name='Email' placeholder='Email address' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <textarea name='message' rows='7' placeholder='Enter your message here' className='form-control'></textarea>
                  </div>
                  <div className='form-group'>
                    <input type="submit" value="Send Message" className='btn btn-primary'/>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
              <h3>Or write me at</h3>
              <h4><i className='fa fa-envelope'></i> iam@ranajahanzaib.com</h4>
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
      </div>
    </div>
  );
}

export default Contact;