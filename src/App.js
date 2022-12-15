import React, {useState} from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import TextForm from './components/TextForm'
import ColorChange from './components/ColorChange'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  // whether dark mode is enabled or not
  const [Mode, setMode] = useState("light");
  const [darkMode, setDarkMode] = useState("Enable");

  // function to toggle dark mode
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setDarkMode("Disable");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else {
      setMode("light");
      setDarkMode("Enable");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
    {/* Passing props  */}

    <BrowserRouter>
      <Header Name="Dhiraj" darkMode={darkMode} toggleMode={toggleMode}/>
      <Routes> 
        <Route path="/text-utils" element={<TextForm />}/>
        <Route path="/about" element={<About />} />
        <Route path="/color-change" element={<ColorChange />} />
      </Routes>
      <Footer Year="2022"/>
    </BrowserRouter>
      
    {/* <TextForm />
    <About /> */}

    
    </>
  )
}

export default App