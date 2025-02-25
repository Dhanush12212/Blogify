import React,{useState} from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate} from 'react-router-dom'; 
import Navbar from './Navbar';
import axios from 'axios';

function Register() {
  const navigate = useNavigate()
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(''); 

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/Auth/register', {
        username,
        email,
        password
      },
      { withCredentials: true }
      );
      console.log(response.data);
      // const token = response.data.token;   
      // localStorage.setItem('token', token);  
      navigate('/blog');
    }
    catch(error) {
      console.log(error); 
    }
  }

  return (
    <>  
      <div className='w-full h-screen relative RegisterPage'>

        <img className='absolute w-full h-screen' src={assets.LoginBackground} alt="Background" /> 
        
        <div className='absolute z-10'>
          <Navbar/>
        </div> 

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
        <div className='relative h-[500px] w-[440px] bg-transparent border-2 border-solid border-[rgba(255,255,255,.5)] rounded-3xl flex flex-col items-center text-blue-300 p-20 justify-center top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{backdropFilter: 'blur(20px)', boxShadow: '0 0 30px rgba(0,0,0,.5)'}}>
          <h1 className='text-4xl font-bold text-center mb-8'>Register</h1>

          {/* Username */} 
          <div className='input-box mb-4'>
            <span className='icon'><ion-icon name="person"></ion-icon></span>
            <input type='text' id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <label className='form-label' htmlFor="username">Username</label>
          </div>

          {/* Email */}
          <div className='input-box mb-4'>
            <span className='icon'><ion-icon name="mail"></ion-icon></span>
            <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label className='form-label' htmlFor="email">Email</label>
          </div>
          
          {/* Password */}
          <div className='input-box mb-4'>
            <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <label className='form-label' htmlFor="password">Password</label>
          </div> 

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center w-full mb-5">  
            <label htmlFor="remember"><input type="checkbox" id="remember" className='cursor-pointer'/> Agree terms & Condition</label> 
          </div>

          {/* Submit */}
          <button type='submit' className='mb-4 px-[20%] py-2 border bg-[#027ED1ff] text-white font-semibold rounded-full hover:bg-blue-700 transition duration-200 text-sm sm:text-base'>Register</button> 
          {/* Login Link */}
          <div>  
            <p>Don't have an account? <Link to="/login" ><span className='text-white hover:underline hover:font-semibold'>Login</span></Link></p>
          </div> 
        </div>
      </form>
      </div>
    </>
  );
}

export default Register;