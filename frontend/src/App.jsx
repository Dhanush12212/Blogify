import React from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Components/Login'
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/' element={ <LandingPage/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App