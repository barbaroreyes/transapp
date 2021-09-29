import React from 'react';
import Main from '../component/Main'
import Footer from '../component/Footer'
import Asside from '../component/Asside'

const Home = () => {
  return (
    <div className="home">
        <header className="Header">Header</header>
        <Asside/>
         <Main/>
        <Footer/>
    </div>
  );
}

export default Home;
