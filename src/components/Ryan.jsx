import React from 'react'
import pic2 from '../assets/2.jpeg'
import footer from '../assets/footerfull.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Ryan = () => {
  useGSAP(()=>{
    gsap.fromTo('#foot',{
      opacity:0,
      y:100
    },{
    scrollTrigger:'#foot',
    opacity:1,
    duration:1,
    y:0
    })
    },[])

    useGSAP(()=>{
      gsap.fromTo('#img7',{
        opacity:0,
      },{
      scrollTrigger:'#img7',
      opacity:1,
      duration:1,
      })
      },[])
  return (
    <>
      <div className='mx-20 mt-30 grid items-center grid-cols-5 gap-10'>
               <div className='col-span-3'>
                   <p className='text-lg'>“I was initially drawn to Adornment because their website was the only one in the Portland area that featured diverse couples and that was extremely important to me. Carisa and Adornment Events were warm, relatable, and caring while also being organized and professional. Would do it all over again every year if I could, it was just that great and that much fun from day one to our wedding day.”</p>
               <p className='font-serif text-2xl text-yellow-600 mt-5'>Ryan + Derek</p>
               </div>
             <div className='p-4 bg-white col-span-2'>
                   <img id='img7' src={pic2} width={500} alt="" />
               </div>
           </div>
           <div id='foot' className='mt-20 justify-items-center' >
<img src={footer} width={900} alt="" />
           </div>
           </>
  )
}

export default Ryan