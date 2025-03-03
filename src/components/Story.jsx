import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import footer from '../assets/footer.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Story = () => {
  useGSAP(()=>{
    gsap.fromTo('#story',{
      opacity:0,
      y:100
    },{
    scrollTrigger:'#story',
    opacity:1,
    duration:1,
    y:0
    })
    },[])

  useGSAP(()=>{
      gsap.fromTo('#img1',{
        opacity:0,
      },{
      scrollTrigger:'#img1',
      opacity:1,
      duration:1,
      })
      },[])

      useGSAP(()=>{
        gsap.fromTo('#footer',{
          opacity:0,
        },{
        scrollTrigger:'#footer',
        opacity:1,
        duration:1,
        })
        },[])

 useGSAP(()=>{
        gsap.fromTo('#img2',{
          x:-200,
          opacity:0
        },{
        scrollTrigger:'#img2',
        x:0,
        opacity:1,
        duration:1,
        delay:0.5
        })
        },[])
  return (
    <>
    <div className='mt-50 font-serif grid grid-cols-2 mx-20 p-10 bg-white'>
        <div className=''>
        <h1 id='story' className='text-5xl  text-yellow-600'>Your Story. Our Creative.</h1>
        <p className='mt-5'>Full Service Intentional Events</p>
        <p className='mt-5'>Every single client is unique and the design of an event should speak to that. We believe in curating our designs by honoring our clients stories, personalities and inspirations. Whether you are looking to host your event in the Pacific NW or define your style with a unique destination, we support you with the intention your journey deserves.</p>
        <div className='flex items-center gap-1 uppercase text-emerald-900 mt-5'><FaArrowRight />
        <p>couples that live in  pacific nw</p></div>
        <div className='flex items-center gap-1 uppercase text-emerald-900 mt-5'><FaArrowRight />
        <p>couples from afar planning in the pacific nw</p></div>
        <div className='flex items-center gap-1 uppercase text-emerald-900 mt-5'><FaArrowRight />
        <p>destination weddings</p></div>
        <div className='flex items-center gap-1 uppercase text-emerald-900 mt-5'><FaArrowRight />
        <p>corporate events</p></div>
        </div>
<div className='relative'>
<img id='img1' src={pic1} width={250} className='absolute left-10 z-1 -top-30' alt="" />
<img id='img2' src={pic2} width={400} className='absolute -right-10' alt="" />
</div>
    </div>
    <div className='grid grid-cols-2'>
        <div></div>
    <div className='mt-10 flex col-span-1  items-center'>
<img id='footer' src={footer} width={450} alt="" />
    </div>
    </div>
  
    </>
  )
}

export default Story