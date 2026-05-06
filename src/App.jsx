import { useRef, useEffect, useState } from 'react'
import './styles/global.scss';
import Home from './components/Home/Home'
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Career from './components/Career/Career';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const footerRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    if (!spacerRef.current || !footerRef.current) return;

    ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top 80%",
      toggleClass: {
        targets: footerRef.current,
        className: "in-view",
      },
    });
  }, []);

  const [introDone, setIntroDone] = useState(false);

  return (
    <div className={`main ${!introDone ? "intro" : ""}`}>
      {!introDone && <Intro onEnd={() => setIntroDone(true)}/>}
      <Home introDone={introDone}/>
      <About/>
      <Career/>
      <Project/>
      <Skills/>
      <div ref={spacerRef} className="footer_space"></div>
      <Footer ref={footerRef}/>
    </div>
  )
}

export default App
