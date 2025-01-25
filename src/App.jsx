import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Projects from './components/project/Projects'
import ArProject from './components/project/arProject/ArProject'
import WebProject from './components/project/webProject/WebProject'
import JavaProjects from './components/project/javaProject/JavaProject'
import GameProjects from './components/project/arProject/gameProject/GameProjects'
import IotProject from './components/project/iotProject/IotProject'
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter basename='/portfolio'>
   <Navbar/>
   <Main/>
   <WebProject/>
   <JavaProjects/>
   <ArProject/>
   <GameProjects/>
   <IotProject/>
   <Footer/>
   </BrowserRouter>
  )
}

export default App