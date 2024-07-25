import React from 'react'
import Carousel from "../components/Carousel"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='' id = "home">
        <div className='bg-teal-500 h-[32rem] max-[640px]:h-[36rem]  text-white py-16 max-[640px]:py-24 -z-5'>
            <div className="flex flex-col text-center">
                <div className = "flex  flex-col justify-center items-center"> 
                    <h1 className='font-bold text-2xl text-teal-100'>Nandini Ayurvedic Panchkarma Clinic</h1>
                    <p className='font-semibold text-teal-100'>Welcomes You!</p>
                </div>
            <Carousel/>
                <h4 className='text-white font-bold mt-3'>Address : Hall 104,First floor, Sonigara Landmark, Chatrapati Chowk Rd,
                    Dynasty Society, Kaspate
                    Wasti, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057</h4>
            </div>
            <img src="mains.png" alt=""/>
        </div>

        <div id="doctor" className='flex flex-col justify-center items-center bg-slate-200 py-8 gap-10'>
            <div className = "mt-7 max-[640px]:mt-14">
                <h1 className='font-bold text-3xl'>About Us</h1>
            </div>
            <div className='flex items-center justify-center gap-8 flex-wrap'>
                <div className='bg-white rounded-md text-center w-42'>
                    <img src="doc2.jpg" alt="" className='h-[24rem] w-42 rounded-md max-[640px]:h-[20rem] w-[32]'/>
                    <p>Dr. Varsha Chavan Patil </p>
                    <p>Ayurvedic doctor</p>

                </div>
                <div className='w-[40%] font-semibold max-[640px]:w-[80%] text-3xl'>

                    <p>Founder- Nandini Ayurveda Clinic, Pune</p>
                     <p className='text-base mt-3'>Dr. Varsha Chavan Patil has completed her BAMS from Aurangabad.She worked as a medical officer in Maharashtra for 6 years.Also she worked as RMO in rural Hospital.She is doing Pure Ayurvedic practice since 2019,with the blessing of lord Dhanvantari,all teachers,parents and family. She is expert in 
                        <ul className='list-disc text-sm'>
                            <li>Prakriti pariksha- Body Type</li>
                            <li>Vyadhi Vidaan - Diagnosis</li>
                            <li>Chikitsa - Treatment</li>
                        </ul>
                        She believes in classical Ayurved and in Hollistic approach towards the mankind.
                        She is experienced in 
                        <ul className='list-disc text-sm'>
                            <li>Gastrointestinal - Hyperacidity,Indigestion,Constipation,fissures.</li>
                            <li>Respiratory -Allergic condition,cough,cold.</li>
                            <li>Muscloskeletal - Various arthritis and spinal disorders.</li>
                            <li>Gynacological - PCOD,heavy menseswhite discharge,infertility.</li>
                            <li>Padeatrics - weight gain,allerigies,immunity</li>
                            <li>Skin care - various autoimmune skin disease,allergies.</li>
                            <li>Others - Thyriod,obesity,Insomnia,diabites,etc</li>
                        </ul>                                              
                        </p>
                    <p></p>

                </div>
            </div>
        </div>
        <div className='w-[80%] h-[1px] bg-slate-500 mx-auto'></div>

        <div className='bg-slate-200 flex w-full flex-col justify-center items-center p-5'>
                <h1 className='text-black text-2xl font-bold'>Facilities</h1>
                <div className='flex w-full justify-center gap-20 items-center flex-wrap'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-bold text-lg'>Panchkarma</h1>
                        <ol>
                            <li>Vaman -- emesis</li>
                            <li>virechan -- purgation/loose motion</li>
                            <li>Barti -- Medicated enema</li>
                            <li>Raktmokshan -- Blood lasting LeechTherapy</li>
                            <li>Nasya -- Nasal drops</li>
                        </ol>
                    </div>
                    <div>
                        <ol className='list-disc mt-5'>
                            <li>Shirodhara
                                <ul><li>* Suvarna-prashhan sanskar <br />(Ayurvedic Immune Booster for children)</li></ul>
                            </li>
                            
                            <li>Body massage & steam
                                <ul><li>* local Basti(Janu,Kati,etc)</li></ul>
                            </li>
                            <li>Littar Basti</li>
                            <li>Pind swed,pottaly swed,Nadi swed</li>
                            <li>Herbal facial(only for female)</li>
                        </ol>
                    </div>
                </div>
                <p className='text-2xl font-bold mt-3'>STAFF</p>
                <p>We have oncall therapist who are very experienced and skilled for panchakarma therapy and patient friendly.</p>
            </div>
        <div className='w-[80%] h-[1px] bg-slate-500 mx-auto'></div>
        <div id="speciality" className='bg-slate-200 py-8 flex flex-col text-center overflow-hidden'>
            <div className="mt-5 max-[640px]:mt-8">
                <h1 className='font-bold text-3xl my-5'>Gallery</h1>
            </div>
            <div class="speciality">
                <div class="flex justify-center">
                    
                    <img class="size" src="photo7.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>  
                </div>
                <div class="flex justify-center">
                    <img class="size" src="photo8.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>
                    <img class="size" src="photo9.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>
                    <img class="size" src="photo10.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>
                </div>
                <div class="flex justify-center">
                    <img class="size" src="photo11.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>
                    <img class="size" src="photo13.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>
                    <img class="size" src="photo12.jpg" alt="" className='h-[20rem] max-[640px]:w-[8rem] max-[640px]:h-[10rem]'/>
                </div>
            </div>
        </div>
        <div className='w-[80%] h-[1px] bg-slate-500 mx-auto'></div>
        <div id="patient" className='bg-slate-200 py-8 flex flex-col text-center overflow-hidden'>
            <div class="head">
                <button className='font-bold text-3xl text-white border-slate-500 shadow-md rounded-md bg-teal-500 px-3 py-2 hover:bg-slate-400 hover:text-black transition duration-300'><Link to ="/booking">Book online</Link></button>
            </div>

        </div>
        <Footer/>              
    </div>
  )
}

export default Home
