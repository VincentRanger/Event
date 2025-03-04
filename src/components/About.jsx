import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import pic from '../assets/pic5.jpg'
import footer from '../assets/footerfull.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(()=>{
    gsap.fromTo('#event',{
      opacity:0,
      y:100
    },{
    scrollTrigger:'#event',
    opacity:1,
    duration:1,
    y:0
    })
    },[])

    useGSAP(()=>{
      gsap.fromTo('#img11',{
        opacity:0,
      },{
      scrollTrigger:'#img11',
      opacity:1,
      duration:1,
      })
      },[])

      useGSAP(()=>{
        gsap.fromTo('#foots',{
          opacity:0,
          y:100
        },{
        scrollTrigger:'#foots',
        opacity:1,
        duration:1,
        y:0
        })
        },[])

        useGSAP(()=>{
          gsap.fromTo('#fit',{
            opacity:0,
            y:-100
          },{
          scrollTrigger:'#fit',
          opacity:1,
          duration:1,
          y:0
          })
          },[])
  

  return (
    <>
    <div className='grid grid-cols-2 font-serif mx-20 mt-40'>
        <div>
<img id='img11' src={pic} width={500} alt="" />
        </div>
        <div>
        <h1 id='event' className='text-5xl  text-yellow-600'>About Adornment Events</h1>
        <p className='mt-10'>Born and raised in the Pacific NW camping, coast day trips, and family vacations at my grandfather’s forest cabin are my favorite memories growing up. I also was lucky enough to be brought up by a collection of very strong women whose love language was gathering family and designing space. Setting tables in my Sunday best with my grandmother at age 8 for her dinner parties for change (as I call them now). A time where they would gather decision makers of the community to make positive impactful changes. In middle school and throughout high school I was obsessed with selecting textiles and paint swatch matching with my Mother who is an Interior Designer. Color, art, and creating space are all the things I love the most. I’m a firm believer that my clients match with me for a reason, and they become family to me. My passion to support them and their wild ideas has kept me learning, growing and creating events since 2008.</p>
         <div id='fit' className='flex items-center gap-1 uppercase text-emerald-900 mt-10'><FaArrowRight />
                <p className='uppercase tracking-widest'>are we a good fit ? learn more</p></div>
        </div>
    </div>
    <div className='mt-20 flex justify-center' >
    <img id='foots' src={footer} width={900} alt="" />
               </div>
               </>
  )
}

export default About