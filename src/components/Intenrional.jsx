import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo5.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Intenrional = () => {

useGSAP(()=>{
gsap.fromTo('#header',{
  opacity:0,
  y:100
},{
scrollTrigger:'#header',
opacity:1,
duration:1,
y:0
})
},[])

useGSAP(()=>{
  gsap.to('#para',{
    scrollTrigger:'#para',
    opacity:1,
    duration:1,
    delay:0.5
  })
},[])

useGSAP(()=>{
  gsap.fromTo('#logo',{
    opacity:0,
  },{
  scrollTrigger:'#logo',
  opacity:1,
  duration:1,
  stagger:{
    amount:2,
    from:'center'
  }
  })
  },[])

  return (
    <div className='mt-20 font-serif relative'>
<h1 id='header' className='flex justify-center text-6xl text-yellow-600'>Intentional Event Design</h1>
<p id='para' className='flex justify-center tracking-widest opacity-0 mt-4 text-amber-900 uppercase'>Providing Curated Luxury Events for the Pacific NW & Beyond</p>
<div className='grid grid-cols-6 justify-items-center items-center gap-10 mt-10 mx-10'>
    <div id='logo'><img src={logo1} alt="" /></div>
    <div id='logo'><img src={logo2} alt="" /></div>
    <div id='logo'><img src={logo3} alt="" /></div>
    <div id='logo'><img src={logo4} alt="" /></div>
    <div id='logo'><img src={logo5} alt="" /></div>
    <div id='logo'><img src={logo6} alt="" /></div>
</div>
<div className='w-full h-1500 top-25 absolute bg-emerald-100 -z-1 opacity-50'>

</div>
    </div>
  )
}

export default Intenrional