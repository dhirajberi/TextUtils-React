import React, {userState} from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import TextForm from './components/TextForm'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
    {/* Passing props  */}

    <BrowserRouter>
      <Header Name="Dhiraj"/>
      <Routes> 
        <Route path="/" element={<TextForm />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer Year="2022"/>
    </BrowserRouter>
      
    {/* <TextForm />
    <About /> */}

    
    </>
  )
}

export default App