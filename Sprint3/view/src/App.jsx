//import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css" // updated
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login/login"
import Signup from "./components/Signup/signup"
import Profile from "./components/Profile/profile"
import Events from "./components/Events/events"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} > </Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
