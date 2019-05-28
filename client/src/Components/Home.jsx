import React from 'react';
import Jumbotron from './Jumbotron';
import Section from './Section';
import Footer from './Footer';

function Home() {
  return (
    <div className='Home'>
      <Jumbotron />
      <Section />
      <Footer />
    </div>
  );
}

export default Home;