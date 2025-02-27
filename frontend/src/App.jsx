import React from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Components/Login'
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogHome from './Pages/BlogHome';
import MyBlog from './Pages/MyBlogs';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/' element={ <LandingPage/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/> 
          <Route path='/blog' element={<BlogHome/>}/>
          <Route path='/myBlogs' element={<MyBlog/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App