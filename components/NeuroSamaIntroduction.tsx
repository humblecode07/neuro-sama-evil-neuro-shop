"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import NeuroSamaBg from './NeuroSamaBg'
import Gears from './shapes/Gears'
import ArrowLeft from './icons/ArrowLeft'

const NeuroSamaIntroduction = () => {
   const introductionRef = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         introductionRef.current,
         { opacity: 0 },
         { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
   }, [])

   return (
      <div ref={introductionRef} className='relative h-screen'>
         <NeuroSamaBg />
         <Gears />
         <button
            className='flex gap-[.75rem] items-center pl-[2rem] pt-[2rem] cursor-pointer group'
         >
            <ArrowLeft className='transition-all duration-300 text-[#847B7B] group-hover:text-[#000]' />
            <span className='font-uncut-sans text-[.75rem] text-[#847B7B] transition-colors duration-300 group-hover:text-[#000]'>
               G O &nbsp; B A C K
            </span>
         </button>
      </div>
   )
}

export default NeuroSamaIntroduction