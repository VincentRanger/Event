import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Get = () => {
  useGSAP(()=>{
    gsap.fromTo('#touch',{
      opacity:0,
      y:100
    },{
    scrollTrigger:'#touch',
    opacity:1,
    duration:1,
    y:0
    })
    },[])

    useGSAP(()=>{
      gsap.fromTo('#field',{
        opacity:0,
      },{
      scrollTrigger:'#field',
      opacity:1,
      duration:1,
      stagger:0.25
      })
      },[])
  return (
    <div className='mx-20 bg-white mt-25 font-serif pt-10 pb-10  text-center px-70'>
 <h1 id='touch' className='text-5xl flex justify-center text-yellow-600'>Get In Touch</h1>
 <div id='field' className='text-start flex-col justify-center mt-10'><label htmlFor="">First & Last Name</label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

 <div id='field' className='text-start flex-col justify-center mt-5'><label htmlFor="">Email Address</label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

 <div id='field' className='text-start flex-col justify-center mt-5'><label htmlFor="">Phone Number </label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

 <div id='field' className='text-start flex-col justify-center mt-5'><label htmlFor="">Wedding or Special Event Date</label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

 <div id='field' className='text-start flex-col justify-center mt-5'><label htmlFor="">Event Location or considering</label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

 <div id='field' className='text-start flex-col justify-center mt-5'><label htmlFor="">Who is your caterer if decided?</label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

 <div id='field' className='text-start flex-col justify-center mt-5'><label htmlFor="">How many guests are you anticipating?</label>
 <div className='mt-1'>
 <input type="text" size={80} className='border border-gray-400 rounded-md' />
 </div>
 </div>

<div id='field' className='text-start flex-col justify-center mt-5'>
    <p>Package Interested In?</p>
    <div className='flex mt-2 gap-1'><input type="checkbox" /><p>Full Planning + Design - Wedding</p></div>
    <div className='flex mt-2 gap-1'><input type="checkbox" /><p>Custom Quote Celebration - Corporate Party, Engagement Party, Birthday, Bat/Bar Mitzvah, Special Celebration</p></div>
    <div className='flex mt-2 gap-1'><input type="checkbox" /><p>The Bubbly Bar</p></div>
    <div className='flex mt-2 gap-1'><input type="checkbox" /><p>Unsure, Let's Chat</p></div>
</div>

<div id='field' className='mt-5 text-start flex-col justify-center'>
    <p>More Details the Better - Tell us more of how we can help, your vision, and any details you know now</p>
    <textarea name="" id="" cols={80} rows={5} className='mt-1 border border-gray-400 rounded-md'></textarea>
</div>

<div id='field' className='text-center flex-col justify-center text-white mt-5'>
    <button className='bg-blue-400 px-7 py-2 rounded-lg'>Submit</button>
</div>

    </div>
  )
}

export default Get