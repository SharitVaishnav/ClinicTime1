import React from 'react'
import { useState } from 'react'
import { apiConnector } from '../services/apiConnector';
import { booking } from '../services/api';
import toast from 'react-hot-toast';
import Footer from '../components/Footer';

const Booking = () => {

  const [data,setData] = useState({
    name : "",
    email : '',
    number: "",
    date:"",
  })
  const [loading,setLoading] = useState(false);

  function changeHandeler(e){
    setData( (prev) => ({
      ...prev,
      [e.target.name] : e.target.value,
    } ))
   console.log(data);
  }

  async function submitHandeler(e){
    e.preventDefault();
    setLoading(true);
    const response = await apiConnector("POST",booking.bookingApi,data);
    setLoading(false);
    response.data.message === "successfull" && loading === false ? (toast.success("Booking succesfull")) : (toast.error("failed"));
  }


//   const submitHandeler = (e) => {
//     e.preventDefault();
//     window.Email.send({
//         SecureToken : "1310df54-ec92-4896-b418-1a345288d8a9",
//         To: 'gopala2846@gmail.com',
//         From: 'sharitcr2846@gmail.com',
//         Subject: 'Client',
//         Body: `A client named ${data.name} appointed you for the checkup on ${data.date}.
//           His email : ${data.email},
//           His contact no. : ${data.number}`
//     })
//     .then(() => toast.success("Booking succesfull"))
// };


  return (
    <div className='bg-teal-300 flex flex-col gap-5 pt-8 max-[640px]:pt-20' id = "booking">
          <div class="bg-background bg-teal-300 text-primary-foreground min-h-screen flex flex-col items-center justify-center">
  <div class="bg-card p-6 rounded-lg bg-teal-700 shadow-lg w-full max-[640px]:w-[80%] max-[640px]:mt-10 max-[640px]:mb-10 max-w-md">
    <h2 class="text-2xl font-bold mb-4 text-white">Book an Appointment</h2>
    <form class="space-y-4" onSubmit={(e) => submitHandeler(e)}>
      <div>
        <label for="name" class="block text-sm font-medium">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" class="w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring focus:ring-primary" required onChange={(e) => changeHandeler(e)}/>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium">Email Address</label>
        <input type="email" id="email" name="email" placeholder="johndoe@example.com" class="w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring focus:ring-primary" required  onChange={(e) => changeHandeler(e)}/>
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium">Phone Number</label>
        <input type="tel" id="phone" name="number" placeholder="123-456-7890" class="w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring focus:ring-primary" required onChange={(e) => changeHandeler(e)}/>
      </div>
      <div>
        <label for="date" class="block text-sm font-medium">Select Date</label>
        <input type="date" id="date" name="date" class="w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring focus:ring-primary" required onChange={(e) => changeHandeler(e)}/>
      </div>
      <button type="submit" class="bg-gray-200 hover:bg-black hover:text-white transition duration-300 font-bold text-primary-foreground w-full py-2 rounded-md hover:bg-primary/80">Book Appointment</button>
    </form>
  </div>
</div>
<Footer/>

    </div>
  )
}

export default Booking
