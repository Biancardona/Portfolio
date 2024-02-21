import { useEffect, useRef, useState } from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Faqs from './sections/faqs/Faqs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floatingNav/FloatingNav';
import Theme from './theme/Theme';
import useThemeContext from './hooks/useThemeContext';

const App = () => {
  const { state } = useThemeContext();
  const ref = useRef();
  const [floatingNav, setFloatingNav] = useState(true);
  const [Yposition, setYposition] = useState(0);

  const showFoatinNav = () => {
    setFloatingNav(true);
  };
  const hideFoatinNav = () => {
    setFloatingNav(false);
  };

  //Check if floatin nav is hown or hidden
  const floatingNavToggle = () => {
    //check if is scrolled up or down at least 20 px
    //compare the stateYPosition with the currentYPosition
    if (
      Yposition < ref?.current?.getBoundingClientRect().y - 20 ||
      Yposition > ref?.current?.getBoundingClientRect().y + 20
    ) {
      showFoatinNav();
    } else {
      hideFoatinNav();
    }
    setYposition(ref?.current?.getBoundingClientRect().y);
  };
  //setInterval and run this function every two seconds
  useEffect(() => {
    const checkYposition = setInterval(floatingNavToggle, 2000);
    //clean up function
    return () => clearInterval(checkYposition);
  }, [Yposition]);

  return (
    //Pasar las clases que se crearon en useReducer al tag main para hacerlas visibles y accesibles
    <main className={`${state.primary} ${state.background}`} ref={ref}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <Theme />
      {floatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
