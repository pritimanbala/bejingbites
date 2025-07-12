import AboutUs from './partials/AboutUs'
import HeroSection from './partials/heroSection'
import Navbar from './partials/navbar'
import SubMenu from './partials/SubMenu'
import Testimonials from './partials/Testimonials'
import Reservation from './partials/Reservation'
import MainMenu from './partials/MainMenu'
import Footer from './partials/Footer'
import Loader from './partials/Loader'
import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <AppS/>
    </Router>
  )
}

function AppS() {
  const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const reserveRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const navigate = useNavigate();

  const scrollToAbout = () => {
    navigate('/')
    setTimeout(() => {

      if (aboutRef.current) {
        (aboutRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    },0)
  }
  const scrollToReserve = () => {
    navigate('/')
    setTimeout(() => {

      if (reserveRef.current) {
        reserveRef.current.scrollIntoView({behavior: 'smooth'})
      }
    },0)
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  type HomepageProps = {
    scrollToReserve: () => void;
    scrollToAbout: () => void;
    aboutRef: React.RefObject<HTMLDivElement>;
    reserveRef: React.RefObject<HTMLDivElement>;
  };

  const Homepage: React.FC<HomepageProps> = ({scrollToReserve, scrollToAbout, aboutRef, reserveRef}) => (
    <>
      <Navbar onClickAbout={scrollToAbout} onClickReserve={scrollToReserve} />
      <HeroSection />
      <AboutUs aboutRef={aboutRef} />
      <Testimonials />
      <SubMenu />
      <Reservation reserveRef={reserveRef} />
      <Footer />
    </>
  )

  type MenuProps = {
    scrollToReserve: () => void;
    scrollToAbout: () => void;
  };

  const Menu: React.FC<MenuProps> = ({scrollToReserve, scrollToAbout}) => (
    <>
      <Navbar onClickAbout={scrollToAbout} onClickReserve={scrollToReserve} />
      <MainMenu />
      <Footer />
    </>
  )

  return (
    <>
    <Routes>
      <Route path="/" element={loading ? (<Loader />) : <Homepage scrollToAbout={scrollToAbout} scrollToReserve={scrollToReserve} aboutRef={aboutRef} reserveRef={reserveRef}/>} />
      {/* //for main menu */}
      <Route path="/menu" element={<Menu scrollToAbout={scrollToAbout} scrollToReserve={scrollToReserve}/>} />
      </Routes>
      </>
  )
}

export default App
