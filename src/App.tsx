import AboutUs from './partials/AboutUs'
import HeroSection from './partials/heroSection'
import Navbar from './partials/navbar'
import SubMenu from './partials/SubMenu'
import Testimonials from './partials/Testimonials'
import Reservation from './partials/Reservation'
import Footer from './partials/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <HeroSection />
      <AboutUs />
      <Testimonials /> 
      <SubMenu/>
      <Reservation />
      <Footer />
    </>
  )
}

export default App
