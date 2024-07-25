import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mb-0' id = "contactUs">
      <div class="bg-teal-800 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 class="font-bold mb-2">About Us</h3>
        <ul>
          <li>24 Hours</li>
          <li>Top Doctor</li>
          <li>Best Care</li>
          <li>Patient</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-2">Speciality</h3>
        <ul>
          <li>Treatment</li>
          <li>Panchakarma</li>
          <li>Abyanga-Body massage</li>
          <li>Nadi swedanam</li>
          <li>Swedan-Body steam</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-2">Best Teams</h3>
        <ul>
          <li>Doctors</li>
          <li>Medicine</li>
          <li>Therapist</li>
          <li>Patient</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-2">Address</h3>
        <ul>
          <li>Hall 104,First floor</li>
          <li>Sonigara Landmark</li>
          <li>Chatrapati Chowk Rd</li>
          <li>9511208027</li>
          
 
 
          <li className='flex gap-5 mt-1'><span><a href="https://maps.app.goo.gl/f4krCTgisDxoQ2WFA"><LuMapPin className='text-2xl'/></a></span>  <span><a href="https://www.facebook.com/varshachavanpatil96/?_rdr"><FaFacebookSquare className='text-2xl'/></a></span></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer
