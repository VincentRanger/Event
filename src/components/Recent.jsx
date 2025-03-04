import React from 'react'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import { FaArrowRight } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Recent = () => {
  useGSAP(()=>{
    gsap.fromTo('#revent',{
      opacity:0,
      y:100
    },{
    scrollTrigger:'#revent',
    opacity:1,
    duration:1,
    y:0
    })
    },[])

    useGSAP(()=>{
      gsap.fromTo('#view',{
        opacity:0,
        y:-100
      },{
      scrollTrigger:'#view',
      opacity:1,
      duration:1,
      y:0
      })
      },[])
  return (
    <div className=' relative mt-20 font-serif mx-40 p-5 bg-white'>
          <h1 id='revent' className='text-5xl flex justify-center  text-yellow-600'>Recent Events</h1>
          <div className='flex justify-center'><img src={pic5} alt="" width={370} className='mt-5' /></div>
          <div className='absolute top-22  -left-20'><img src={pic6} width={370} alt="" /></div>
          <div className='absolute top-22 -right-20'><img src={pic7} width={370} alt="" /></div>
           <div id='view' className=' flex justify-center items-center gap-1 uppercase tracking-widest text-emerald-900 mt-5'><FaArrowRight />
                  <p>view the latest</p></div>
    </div>
  )
}

export default Recent