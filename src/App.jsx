/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import LandingPage from "./pages/LandingPage/landingPage"
import AddPage from "./pages/AddPage/addPage"
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
import Main from "./pages/Main/main"

function App() {
  

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route index element= {<LandingPage/>} />
            <Route path='/LandingPage' element={<LandingPage/>}/> 
            <Route path='/Login' element={<Login/>}/> 
            <Route path='/Register' element={<Register/>}/> 
            <Route path='/Main' element={<Main/>}/> 
            <Route path='/AddPage' element={<AddPage/>}/> 
          </Routes>      
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App
