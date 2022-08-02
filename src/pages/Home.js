import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import { BackgroundContainer , BgImg, PictureBg } from '../components/StatichomeElements'
import Img from '../image/bg.jpg'

const Home = () => {
  return (
    <>
      <BackgroundContainer>
        <PictureBg>
          <BgImg src={Img}></BgImg>
        </PictureBg>
        <Navbar></Navbar>
        <HeroSection />
      </BackgroundContainer>
    </>
  );
}

export default Home