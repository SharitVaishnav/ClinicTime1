import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleAboutUsClick = (id) => {
    id === "booking" ? navigate('/booking') : navigate('/');
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };



  return (
    <div className='relative'>
      <nav class="bg-primary text-primary-foreground p-4 bg-teal-900 text-white w-full fixed z-[1000]">
        <div class="container mx-auto flex justify-between items-center max-[640px]:text-sm max-[640px]:w-full">
        <div class="text-lg font-bold flex gap-5 max-[640px]:text-sm justify-center items-center ">
          <img src="clinic.png" alt="clinic" className='h-8 w-8'/>
          <Link to ="/">Nandini Ayurvedh Panchakarma Clinic</Link>
          </div>
        <div class="space-x-4 max-[640px]:space-x-2 max-[640px]:text-xs">
            <Link to = "/" className="hover:text-slate-400  transition duration-400" onClick={() => {handleAboutUsClick("home")}}>Home</Link>
            <Link to = "/" className="hover:text-slate-400  transition duration-400" onClick={() => {handleAboutUsClick("doctor")}}>About us</Link>
            <Link to = "/" className="hover:text-slate-400  transition duration-400" onClick={() => {handleAboutUsClick("speciality")}}>Gallery</Link>
            <Link to = "/booking" className="hover:text-slate-400  transition duration-400" onClick={() => {handleAboutUsClick("booking")}}>Book Online</Link>
            <Link to = "/" className="hover:text-slate-400   transition duration-400" onClick={() => {handleAboutUsClick("contactUs")}}>Contact us</Link>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
