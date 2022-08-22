import { useContext } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? "black" : "",
        color : darkMode? "white" : ""
      }}    
    >
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
