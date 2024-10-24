import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from './components/Education';
import Particles from "react-tsparticles";
import particlesConfig from "./components/particlesConfig";



function App() {
  return (
    <div className="App">
      <Particles id="tsparticles" options={particlesConfig} />
      <NavBar/>
      <Banner/>
      <Tech/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;