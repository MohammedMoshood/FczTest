import React , {useState}from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import { BackgroundContainer } from '../components/StatichomeElements'
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
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <BackgroundContainer>
        

       
        <Navbar toggle={toggle}></Navbar>
        <HeroSection />
      </BackgroundContainer>
      <Card></Card>
      <InfoSection></InfoSection>
    </>
  );
}

export default Home