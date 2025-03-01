import React,{useState} from 'react'; 
import {Link, useNavigate} from 'react-router-dom';  
import { assets } from '../assets/assets';
import Navbar from './Navbar';
import axios from 'axios';

function Login() {
  const navigate=useNavigate();
  const [user,setUser]=useState('');
  const [password,setPassword]=useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://blogify-8a16.onrender.com/api/Auth/login', { 
        email: user, 
        password
      },
      { withCredentials: true }
    );  
      console.log("Login successful:", response.data);
      console.log(response.data );
      // const token = res.data.token;  
      // localStorage.setItem('token', token);  
      navigate('/blog');
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  
   
  return (
    <>  
      <div className='w-full h-screen relative LoginPage'>

        <img className='absolute w-full h-screen' src={assets.LoginBackground} alt="Background" /> 

        <div className='absolute  z-10'>
          <Navbar/>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
        <div className='LoginForm absolute h-[500px] w-[440px] bg-transparent border-2 border-solid border-[rgba(255,255,255,.5)] rounded-3xl flex flex-col items-center text-blue-300 p-20 justify-center top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{backdropFilter: 'blur(20px)', boxShadow: '0 0 30px rgba(0,0,0,.5)'}}>
          <h1 className='text-4xl font-bold text-center mb-8'>Login</h1>
 
          {/* Email */}

          <div className='input-box mb-4'>
            <span className='icon'><ion-icon name="mail"></ion-icon></span>
            <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} id="email" required/>
            <label className='form-label' htmlFor="email">Email</label>
          </div>
          
          {/* Password */}
          <div className='input-box mb-4'>
            <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" required/>
            <label className='form-label' htmlFor="password">Password</label>
          </div> 

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center w-full mb-5">  
            <label htmlFor="remember"><input type="checkbox" id="remember" className='cursor-pointer'/> Remember me</label>
            <a href="#"><span  className="text-blue-300 hover:text-blue-200">Forgot Password?</span></a>
          </div>

          {/* Submit */}
          <button type='submit' className='mb-4 px-[20%] py-2 border bg-[#027ED1ff] text-white font-semibold rounded-full hover:bg-blue-500 transition duration-200 text-sm sm:text-base' >Login</button>
          
          {/* Register Link */}
          <div>  
            <p>Don't have an account? <Link to="/register"><span className='text-white hover:underline hover:font-semibold'>Register</span></Link></p>
          </div> 
        </div>
        </form>
      </div>
    </>
  );
}

export default Login;