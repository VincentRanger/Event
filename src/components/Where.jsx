import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Where = () => {
  useGSAP(()=>{
    gsap.fromTo('#heading',{
      opacity:0,
      y:100
    },{
    scrollTrigger:'#heading',
    opacity:1,
    duration:1,
    y:0
    })
    },[])

    useGSAP(()=>{
      gsap.fromTo('#card1',{
        opacity:0,
        x:150
      },{
      scrollTrigger:'#card1',
      opacity:1,
      duration:1,
      x:0
      })
      },[])

      useGSAP(()=>{
        gsap.fromTo('#card2',{
          opacity:0,
          x:-150
        },{
        scrollTrigger:'#card2',
        opacity:1,
        duration:1,
        x:0,
        delay:0.1
        })
        },[])

        useGSAP(()=>{
          gsap.fromTo('#bottom',{
            opacity:0,
            y:-100
          },{
          scrollTrigger:'#bottom',
          opacity:1,
          duration:1,
          y:0,
          })
          },[])

  return (
    <div className='grid grid-cols-2  font-serif p-30 mt-20 bg-white'>
        <div className='relative'>
<div id='card1' className='h-85 w-60 absolute bg-emerald-300 text-green-900 flex-col justify-items-center'>
<div className='mt-15 text-white'><GiQueenCrown size={70}/></div>
<p className='uppercase text-black mt-5 tracking-widest'>full</p>
<p className='uppercase text-black tracking-widest'>planning</p>
<p className='mt-5'>Dedicated Partnership</p>
<p>+ Creative Team</p>
</div>
<div id='card2' className='h-80 w-60 absolute right-10 top-25 text-yellow-600 bg-yellow-800 justify-items-center'>
<div className='mt-15 text-white'><GiQueenCrown size={70}/></div>
<p className='uppercase mt-5 text-black tracking-widest'>custom</p>
<p className='mt-5'>Weekend Experiences</p>
<p>+ Celebrations</p>
</div>
        </div>
        <div>
        <h1 id='heading' className='text-5xl  text-yellow-600'>Where we stand out</h1>
        <p className='mt-5 me-30 text-lg'>Not all events are created equal, and planning with a partner that is fully invested in your joy creates space for you to be fully present. We take our events seriously and fully immerse ourselves with the creative attention each client deserves. Our team dedicates our calendar to a handful of events annually so that we can focus our efforts on you. Every piece of your weekend is custom designed and produced by our team. After all, you’re worth it.</p>
        <div id='bottom' className='flex items-center gap-1 uppercase text-emerald-900 mt-10'><FaArrowRight />
                <p  className=''>check your date</p></div>
        </div>
    </div>
  )
}

export default Where