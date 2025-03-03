import React from 'react'
import pic4 from '../assets/pic4.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Morgan = () => {
  useGSAP(()=>{
    gsap.fromTo('#img10',{
      opacity:0,
    },{
    scrollTrigger:'#img10',
    opacity:1,
    duration:1,
    })
    },[])

    
  return (
     <div className='mx-20 mt-20 grid items-center grid-cols-5 gap-10'>
         <div className='p-4 bg-white col-span-2'>
               <img id='img10' src={pic4} width={500} alt="" />
           </div>
           <div className='col-span-3'>
               <p className='text-lg'>“Carisa and her team of rockstars at Adornment Events are so incredible. During our first phone call with Carisa, I could tell how much she cared about providing fantastic wedding day experiences for her couples, and how detail oriented she is.</p>
          <p className='text-lg mt-5'>I HIGHLY recommend Carisa and the entire team at Adornment Events. It was a joy to work with them while planning our wedding and we are so thankful for their hard work making our dream day a reality.”</p>
           <p className='font-serif text-2xl text-yellow-600 mt-5'>Morgan + Brian</p>
           </div>
       </div>
  )
}

export default Morgan