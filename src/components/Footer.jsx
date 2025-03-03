import React from 'react'
import logo from '../assets/logo.svg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import flag from '../assets/flag.png'

const Footer = () => {
  return (
    <div className='bg-zinc-700 flex p-20 justify-around items-center'>
        <div className='text-white justify-items-center'>
<img src={logo} alt="" />
<p className='mt-5'>2574 NW Thurman Street</p>
<p>Portland, OR 97210</p>
<p>adornmentevents@gmail.com</p>
        </div>
        <div className='justify-items-center'>
        <div className='text-zinc-300 flex gap-5'>
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaPinterest size={30} />
        </div>
<img src={flag} width={50} alt="" className='mt-5' />
<div className='text-white justify-items-center mt-5'>
<p>Since it’s inception, Adornment Events has</p>
<p>been a proud supporter of the LGBTQ+</p>
<p>and BIPOC communities</p>
</div>
        </div>
      
    </div>
  )
}

export default Footer