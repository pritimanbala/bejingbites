import AboutUs from './partials/AboutUs'
import HeroSection from './partials/heroSection'
import Navbar from './partials/navbar'
import SubMenu from './partials/SubMenu'
import Testimonials from './partials/Testimonials'
import Reservation from './partials/Reservation'
import MainMenu from './partials/MainMenu'
import Footer from './partials/Footer'
import Loader from './partials/Loader'
import React, { useEffect, useRef, useState } from 'react'
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
  const [menuItem, setMenuItem] = useState('All Items')

  const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const reserveRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const menuRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
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
  const scrollToMenu = () => {
    navigate('/')
    setTimeout(() => {
      if(menuRef.current){
        menuRef.current.scrollIntoView({behavior: 'smooth'})
      }
    })
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const[theme, setTheme] = useState('light');

  type HomepageProps = {
    scrollToReserve: () => void;
    scrollToAbout: () => void;
    setTheme: (theme:string) => void;
    scrollToMenu: () => void;
    theme: string;
    aboutRef: React.RefObject<HTMLDivElement>;
    menuRef: React.RefObject<HTMLDivElement>;
    reserveRef: React.RefObject<HTMLDivElement>;
    menuItem: string;
    setMenuItem: (menuItem:string) => void;
  };

  const Homepage: React.FC<HomepageProps> = ({scrollToReserve, scrollToAbout, aboutRef, reserveRef , setTheme, theme, menuRef, scrollToMenu, setMenuItem, menuItem}) => (
    <>
      <Navbar onClickAbout={scrollToAbout} onClickReserve={scrollToReserve} setTheme={setTheme} onClickMenu={scrollToMenu}/>
      <HeroSection onClickMenu={scrollToMenu}/> 
      <AboutUs aboutRef={aboutRef} theme={theme}/>
      <Testimonials menuRef={menuRef}/>
      <SubMenu theme={theme} setMenuItem={setMenuItem} menuItem={menuItem}/>
      <Reservation reserveRef={reserveRef} />
      <Footer />
    </>
  )

  type MenuProps = {
    scrollToReserve: () => void;
    scrollToAbout: () => void;
    setTheme: (theme:string) => void;
    scrollToMenu: () => void;
    theme: string;
    menuItem: string;
    setMenuItem: (menuItem : string) => void;
  };

  const Menu: React.FC<MenuProps> = ({scrollToReserve, scrollToAbout, theme, scrollToMenu, setMenuItem, menuItem}) => (
    <>
      <Navbar onClickAbout={scrollToAbout} onClickReserve={scrollToReserve} setTheme={setTheme} onClickMenu={scrollToMenu}/>
      <MainMenu theme={theme} setMenuItem={setMenuItem} menuItem={menuItem} />
      <Footer />
    </>
  )

  return (
    <>
    <Routes>
      <Route path="/" element={loading ? (<Loader />) : <Homepage scrollToAbout={scrollToAbout} scrollToReserve={scrollToReserve} scrollToMenu={scrollToMenu} menuRef={menuRef} aboutRef={aboutRef} reserveRef={reserveRef} setTheme={setTheme} theme={theme} menuItem={menuItem} setMenuItem={setMenuItem}/>} />
      <Route path="/menu" element={<Menu scrollToAbout={scrollToAbout} scrollToReserve={scrollToReserve} theme={theme} setTheme={setTheme} scrollToMenu={scrollToMenu} menuItem={menuItem} setMenuItem={setMenuItem}/>} />
      </Routes>
      </>
  )
}

export default App
