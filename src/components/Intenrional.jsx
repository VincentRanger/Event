import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo5.png'

const Intenrional = () => {
  return (
    <div className='mt-20 font-serif relative justify-items-center'>
<h1 className='text-6xl text-yellow-600'>Intentional Event Design</h1>
<p className='tracking-widest mt-4 text-amber-900 uppercase'>Providing Curated Luxury Events for the Pacific NW & Beyond</p>
<div className='grid grid-cols-6 justify-items-center items-center gap-10 mt-10 mx-10'>
    <div><img src={logo1} alt="" /></div>
    <div><img src={logo2} alt="" /></div>
    <div><img src={logo3} alt="" /></div>
    <div><img src={logo4} alt="" /></div>
    <div><img src={logo5} alt="" /></div>
    <div><img src={logo6} alt="" /></div>
</div>
<div className='w-full h-200 top-25 absolute bg-emerald-100 opacity-40'>

</div>
    </div>
  )
}

export default Intenrional