import AboutUs from './partials/AboutUs'
import HeroSection from './partials/heroSection'
import Navbar from './partials/navbar'
import SubMenu from './partials/SubMenu'
import Testimonials from './partials/Testimonials'
import Reservation from './partials/Reservation'
import MainMenu from './partials/MainMenu'
import Footer from './partials/Footer'
import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
//imported the things required


function App() {
  return (
    <Router>
      <AppS/>
      {/* here we did the master rendering */}
    </Router>
  )
}

function AppS() {
  //declaration of all the local state variables
  const[theme, setTheme] = useState('light'); //this is for the dark and light theme
  const [menuItem, setMenuItem] = useState('All Items')
  const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const reserveRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const menuRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const navigate = useNavigate();

  //created the functions of redirection
  const scrollToAbout = () => {
    navigate('/')
    setTimeout(() => {
      if (aboutRef.current) {
        //aboutRef.current checks if there is anything like <div ref={aboutRef}> or not
        (aboutRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    },0) //here we did put time 0 so that it executes at the same time
    //so set timeout is used so that the page loads properly and then 0milliseconds tells to immediately find the thing
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

  //now we will define the the prop types for the homepage and menu

  type HomepageProps = {
    scrollToReserve: () => void;
    scrollToAbout: () => void;
    setTheme: (theme:string) => void; //void after the function means you are not rendering anything after the function execution and your taking in the var theme
    scrollToMenu: () => void;
    theme: string;
    aboutRef: React.RefObject<HTMLDivElement>;
    menuRef: React.RefObject<HTMLDivElement>;
    reserveRef: React.RefObject<HTMLDivElement>; //this the refObject
    menuItem: string;
    setMenuItem: (menuItem:string) => void;
  };

  //here i created a separate component so that i dont get problem while passing so many props at once in router.
  //then React.Fc tells that its a functional component and having checked by HomePage interface
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
  //here be careful as you have to consider both props what are you passing in component what you have made and what are you passing
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
      <Route path="/" element={<Homepage scrollToAbout={scrollToAbout} scrollToReserve={scrollToReserve} scrollToMenu={scrollToMenu} menuRef={menuRef} aboutRef={aboutRef} reserveRef={reserveRef} setTheme={setTheme} theme={theme} menuItem={menuItem} setMenuItem={setMenuItem}/>} />
      <Route path="/menu" element={<Menu scrollToAbout={scrollToAbout} scrollToReserve={scrollToReserve} theme={theme} setTheme={setTheme} scrollToMenu={scrollToMenu} menuItem={menuItem} setMenuItem={setMenuItem}/>} />
      </Routes>
      </>
  )
}

export default App
