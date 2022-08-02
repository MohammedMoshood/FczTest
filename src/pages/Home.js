import React , {useState}from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import { BackgroundContainer , BgImg, PictureBg } from '../components/StatichomeElements'
import Img from '../image/bg.jpg'
import Card from '../components/Card/Card'
import InfoSection from '../components/InfoSection/InfoSection'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <BackgroundContainer>
        <PictureBg>
          <BgImg src={Img}></BgImg>
        </PictureBg>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <HeroSection />
      </BackgroundContainer>
      <Card></Card>
      <InfoSection></InfoSection>
    </>
  );
}

export default Home