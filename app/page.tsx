import Nav from './components/Nav';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Missions from './components/Missions';
import StormSecurity from './components/StormSecurity';
import Homelab from './components/Homelab';
import Talks from './components/Talks';
import Writing from './components/Writing';
import Skills from './components/Skills';
import Formation from './components/Formation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Missions />
        <StormSecurity />
        <Homelab />
        <Talks />
        <Writing />
        <Skills />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
