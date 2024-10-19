import React from 'react'
import Header from './header'
import Home from './home'
import About from './about'
import Services from './services'
import Guards from './guards'
import Contectus from './contactus'
import Demo from './demo'
import Footer from './footer'
import Client from './client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/about' element= {<About/>}></Route>
    <Route path='/services' element= {<Services/>}></Route>
    <Route path='/guards' element= {<Guards/>}></Route>
    <Route path='/contactus' element= {<Contectus/>}></Route>
   <Route path='/demo' element={<Demo/>}></Route>
    <Route path='/client' element={<Client/>}></Route>
    
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App