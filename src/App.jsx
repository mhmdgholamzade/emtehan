import Header from './Components/HEADER';
import About from './Components/About';
import Blog from './Components/Blog';
import ChooseUs from './Components/ChooseUs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navgition from './Components/Navgition';
import Portfolio from './Components/Portfolio';
import Preloader from './Components/Preloader';
import Prices from './Components/Prices';
import Process from './Components/Process';
import Scroll from './Components/Scroll';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Subscribe from './Components/Subscribe';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Map from './Components/Map';
function App() {
  return (
    <>
      <Preloader />
      <Navgition />
      <Header />
      <Scroll/>
      <ChooseUs />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Prices />
      <Process />
      <Blog />
      <Subscribe />
      <Contact />
      <Map/>
      <Footer />
      
      
    </>
  );
}

export default App;
