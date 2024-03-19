import React from 'react';
import Logo from '../Images/Logo.jpg';
import loginimg from '../Images/loginimg.jpg'
import logimg from '../Images/logimg.jpg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Login = () => {

  
  return (
    <div>
      <section className='flex flex-row overflow-hidden'>
        <div className="flex flex-col gap-4">
          <div class="flex flex-row gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-24" />
            <h1 className='text-4xl font-bold mt-4 drop-shadow-lg'>Welcome Back :)</h1>
          </div>
          <p className='ml-10 mt-6'>To keep connected with us please login with your personal information
            by username and password.
          </p>
          <form >
          <div className='flex flex-row gap-6 mt-9'>
                <label htmlFor='email' className='text-4xl'><i class="zmdi zmdi-account" ></i></label>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='USERNAME'
                // value={email} onChange={(e)=>setEmail(e.target.value)}
                required
                className='text-black border rounded-xl border-b border-gray-500 shadow-md outline-none  focus:outline-none items-center
                justify-center w-[80%] h-14 placeholder-black text-black font-bold pl-4 ml-6 ' />
                </div>

                <div className='flex flex-row gap-6 mt-12'>
                <label htmlFor='password' className='text-4xl'><i class="zmdi zmdi-lock" ></i></label>
                <input type="password" name='password' id='password' autoComplete='off' placeholder='PASSWORD'
                //  value={password} onChange={(e)=>setPassword(e.target.value)}
                 required
                 className='text-black border rounded-xl border-b border-gray-500 shadow-md outline-none  focus:outline-none items-center
                justify-center w-[80%] h-14 placeholder-black text-black font-bold pl-4 ml-6 ' />
                </div>

                <div className=" SignIn-link items-center justify-center pt-4 ml-[300px]  mt-6">
                    <p className="text-[#000]"> <NavLink to='' className="signUpBtn-link text-[#4b4242] 
                    font-semibold hover:underline ml-2 ">Forgot Password?</NavLink>
                        </p>
                </div>
                  
                
              {/* <!--------Submit Button---------> */}
                <button type="submit " className="relative w-[200px] h-[50px] ml-10
                 bg-blue-500 text-[16px] text-black hover:bg-blue-900 ml-24
                text-[#fff] cursor-pointer rounded-3xl mt-20 border border-black" >Login In</button>





{/* <div className=" SignIn-link items-center justify-center pt-4 px-7 ml-24 mt-6">
                    <p className="text-[#000]">Don't have an account? <NavLink to='/SignUp' className="signUpBtn-link text-[#f4157e] 
                    font-semibold hover:underline ">Sign Up</NavLink>
                        </p>

                       

                </div> */}

          </form>
          {/* side image */}
          
        </div>
        <img src={logimg} alt="Logo" className="w-[900px] " />
      </section>
    </div>
  );
};

export default Login;
