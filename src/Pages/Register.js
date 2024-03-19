import React, { useState } from 'react';
import Logo from '../Images/Logo.jpg';
import RegisterSide from '../Images/RegisterSide.jpg';
import { NavLink } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [batchYear, setBatchYear] = useState('');
  const [company, setCompany] = useState('');
  const currentYear = new Date().getFullYear();

  const handleBatchYearChange = (e) => {
    setBatchYear(e.target.value);
    // If current year is filled, disable company field
    if (parseInt(e.target.value) === currentYear) {
      setCompany('');
    }
  };

  return (
    <div>
      <section className='flex flex-row overflow-hidden gap-44'>
        <div className="flex flex-col gap-10 ml-8">
          <div className="flex flex-row gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-24" />
            <h1 className='text-4xl font-bold mt-4 drop-shadow-lg'>Register </h1>
          </div>
          
          <form action="#" method="post">
            <div className="flex flex-row gap-10">
              <div className="mb-4">
                <label htmlFor="firstname" className="block ">First Name</label>
                <input type="text" id="firstname" name="firstname" required className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname" className="block ">Last Name</label>
                <input type="text" id="lastname" name="lastname" required className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2" />
              </div>
            </div>
            <div className='flex flex-row gap-10'>
              <div className="mb-4">
                <label htmlFor="regno" className="block "> College Registration No</label>
                <input type="text" id="regno" name="regno" required className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block ">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2" />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="mb-4">
                <label htmlFor="phone" className="block">Phone Number:</label>
                <input type="text" id="phone" name="phone" required className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-3 border rounded-md " />
              </div>
              <div className="mb-4">
                <label htmlFor="batchyear" className="block">Batch Year:</label>
                <input type="text" id="batchyear" name="batchyear" value={batchYear} onChange={handleBatchYearChange} required className="border border-black rounded-md focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-3 " />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="mb-4">
                <label htmlFor="company" className="block">Current Company:</label>
                <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className={`border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2 ${parseInt(batchYear) === currentYear ? 'bg-gray-200' : ''}`} disabled={parseInt(batchYear) === currentYear} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block">Password:</label>
                <input type="password" id="password" name="password" required className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block">Gender:</label>
              <select id="gender" name="gender" className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[300px] h-[50px] mt-2">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="relative w-[200px] h-[50px] ml-10 bg-blue-500 text-[16px] text-black hover:bg-blue-900 ml-48 text-[#fff] cursor-pointer rounded-3xl mt-20 mb-4 border border-black">Register</button>
          </form>
        </div>

        <img src={RegisterSide} alt="Register Side " className="w-[700px] mr-0 " />

        <div className="absolute bottom-0 right-0 text-white text-5xl  mb-10 mr-10 p-4">
          <p className="ml-4 mb-4 ">Connecting the past</p>
          <p className='ml-4 mb-4'>to shape the</p>
          <p className='mt-2 ml-4 mb-4'>future</p>
        </div>

      </section>
    </div>
  );
};

export default Register;
