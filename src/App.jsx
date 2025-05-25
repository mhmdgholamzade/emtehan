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
import './Css/bootstrap.min.css';
import './Css/magnific-popup.css';
import './Css/main.css';
import './Css/owl.carousel.min.css';
import './Css/owl.theme.default.css';

function App() {
  return (
    <>
      <Preloader />
      <Navgition />
      <Header />
      <About />
      <Services />
      <ChooseUs />
      <Portfolio />
      <Prices />
      <Process />
      <Skills />
      <Team />
      <Testimonials />
      <Blog />
      <Subscribe />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
