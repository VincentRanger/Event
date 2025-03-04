import React from 'react'
import logo from '../assets/ae-logo-2022.svg'
import a from '../assets/1.jpeg'
import b from '../assets/2.jpg'
import c from '../assets/3.jpeg'
import d from '../assets/4.jpg'
import e from '../assets/5.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Nav = () => {

useGSAP(()=>{
gsap.to('#card',{
    opacity:1,
    duration:1,
   ease:'power1.inOut'
})
},[])

  return (
    <div>
        <div className='bg-cover bg-emerald-100 opacity-50 absolute top-39.5 h-105 w-full  overflow-hidden -z-10 '></div>
    <div className='flex font-serif w-full mt-2 items-center font-medium text-emerald-900 tracking-widest'>
        <div className='flex w-full justify-between uppercase mt-12 ms-20'>
            <a href="" className='hover:text-amber-400'>about</a>
            <a href="" className='hover:text-amber-400'>services</a>
            <a href="" className='hover:text-amber-400'>kind words</a>
        </div>
        <div className='w-full '><img src={logo} alt="" className='w-40 justify-self-center' /></div>
        <div className='flex w-full justify-between me-20 mt-12 uppercase'>
            <a href="" className='hover:text-amber-400'>gallery</a>
            <a href="" className='hover:text-amber-400'>bubbly bar</a>
            <a href="" className='hover:text-amber-400'>contact</a>
        </div>
    </div>

    <div className='grid grid-cols-5 mx-20 gap-5 mt-10 opacity-0' id='card'>
<div><img src={a} className='w-fit h-120' /></div>
<div><img src={b} className='w-fit h-120'/></div>
<div><img src={c}  className='w-fit h-120' /></div>
<div><img src={d} className='w-fit h-120' /></div>
<div><img src={e}  className='w-fit h-120' /></div>
    </div>
    </div>
  )
}

export default Nav