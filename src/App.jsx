import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import Works from "./Components/works/Works";
import Contact from "./Components/contact/Contact";
import Testimonials from "./Components/testimonials/Testimonials";
import './app.scss';
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import Portfolio from "./Components/portfolio/Portfolio";


function App() {
  
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
