import { useState, createContext } from 'react'
import "bootstrap/dist/css/bootstrap.css" // updated
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login/login"
import Signup from "./components/Signup/signup"
import Profile from "./components/Profile/profile"
import Events from "./components/Events/events"
import Home from "./components/home.jsx"
import Resources from "./components/Resources/resources.jsx"
import PostEvents from "./components/PostEvent/postevent"
import PetShop from "./components/petShop.jsx"

export const UserContext = createContext("none")

function App() {
  const [u, setU] = useState("none")

  return (
    <BrowserRouter>
      <UserContext.Provider value={{u, setU}}>    
        <Routes>
          <Route path='/login' element={<Login/>} > </Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/resources' element={<Resources/>}></Route>
          <Route path='/postevent' element={<PostEvents/>}></Route>
          <Route path='/petShop' element={<PetShop/>}></Route>
          
        </Routes>        
      </UserContext.Provider>

    </BrowserRouter> 
  )
}

export default App
