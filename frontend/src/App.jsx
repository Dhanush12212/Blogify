import React from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Components/Login'
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/' element={ <LandingPage/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/> 
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App