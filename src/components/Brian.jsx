import React from 'react'
import pic3 from '../assets/pic3.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Brian = () => {
  useGSAP(()=>{
    gsap.fromTo('#img3',{
      opacity:0,
    },{
    scrollTrigger:'#img3',
    opacity:1,
    duration:1,
    })
    },[])
  return (
    <div className='mx-20 mt-10 grid items-center grid-cols-2'>
        <div className=''>
            <p className='text-lg'>“Hiring Carisa at Adornment Events was the very best decision we made when it came to our wedding planning. Carisa listened to our ideas, was respectful of our busy work schedules and found a way to implement our ideas but in the end truly elevated the experience beyond our own imagination. Hire Carisa and get ready to not only make a friend for life, but have the wedding event of your dreams!”</p>
        <p className='font-serif text-2xl text-yellow-600 mt-5'>Brian + Matt</p>
        </div>
        <div className='p-5 bg-white'>
            <img id='img3' src={pic3} width={600} alt="" />
        </div>
    </div>
  )
}

export default Brian