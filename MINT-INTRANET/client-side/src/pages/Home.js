import React, { useEffect } from 'react'
import About from '../components/About';
import Banner from '../components/Banner';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody'
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

function Home() {

  useEffect(()=>{
    document.title='Home'
  }, [])

  return (
    <div>
      <Header />
      <Banner />
      <HomeBody />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
