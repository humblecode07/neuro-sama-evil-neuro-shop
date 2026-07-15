"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import NeuroSamaBg from './NeuroSamaBg'
import Gears from './shapes/Gears'
import ArrowLeft from './icons/ArrowLeft'
import Image from 'next/image'
import Heart from './icons/Heart'
import Star from './icons/Star'
import Diamond from './icons/Diamond'

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
      <div ref={introductionRef} className='relative min-h-screen w-full overflow-hidden flex flex-col justify-between'>
         
         {/* Background layer: z-index 0, isolated from content flow */}
         <div className="absolute inset-0 pointer-events-none z-0">
            <NeuroSamaBg />
            <Gears />
            <Star />
         </div>

         {/* Navigation Layer */}
         <div className="relative z-10 w-full px-6 py-6 md:px-8">
            <button
               className='flex gap-[.75rem] items-center cursor-pointer group'
            >
               <ArrowLeft className='transition-all duration-300 text-[#847B7B] group-hover:text-[#000]' />
               <span className='font-uncut-sans text-[.75rem] text-[#847B7B] transition-colors duration-300 group-hover:text-[#000]'>
                  G O &nbsp; B A C K
               </span>
            </button>
         </div>

         {/* Responsive Content Alignment Area */}
         <div className="relative z-10 flex-grow flex items-center justify-end px-6 md:px-12 lg:px-24">
            <div className='w-full max-w-[46.6875rem] flex flex-col justify-center py-12'>
               <div className='flex gap-[.5rem] items-center'>
                  <span className='font-uncut-sans text-[.75rem] font-medium text-[#555555]'>O U R &nbsp; W O R L D S &nbsp; S M A R T E S T &nbsp; C O O K I E</span>
                  <Diamond />
               </div>
               
               <h1
                  className="font-coffee text-[clamp(4.5rem,7.5vw,10.125rem)] text-[#FDEFE0] rotate-[-1.22deg] leading-none"
                  style={{ textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
               >
                  Neuro-sama
               </h1>
               
               <span className='font-uncut-sans w-full text-[#ffffff] rotate-[-0.7deg] mt-[1rem] leading-relaxed text-[0.875rem] md:text-[1rem] block'>
                  An AI-powered virtual streamer (VTuber) known for interacting with viewers, playing games, and collaborating with other creators through real-time conversations. Developed by Vedal987, she has become one of the most recognized AI personalities in online streaming. Just be warned, she can be a little <span className='text-[#B26841]'>unhinged</span>.
               </span>
               
               <div className='flex flex-wrap gap-[1rem] md:gap-[1.625rem] pt-[2.54rem]'>
                  <button className='w-full sm:w-[18.3125rem] h-[3.8125rem] bg-[#FDEFE0] rounded-full flex items-center justify-center rotate-[-0.13deg]' style={{ boxShadow: '0 4px 4px rgba(114, 24, 57, 0.25)' }}>
                     <div className='w-[96%] h-[84%] border-[#FFAC80] border-dashed border-[1px] rounded-full flex items-center justify-center gap-[.65rem]'>
                        <Image
                           src="/vedal.png"
                           alt="Vedal AI Icon"
                           width={19}
                           height={19}
                        />
                        <span className='font-coffee text-[#FFAC80] pt-[0.325rem]'>Check her channel</span>
                     </div>
                  </button>
                  <button className='w-full sm:w-[18.3125rem] h-[3.8125rem] bg-[#FDEFE0] rounded-full flex items-center justify-center rotate-[-1.24deg]' style={{ boxShadow: '0 4px 4px rgba(114, 24, 57, 0.25)' }}>
                     <div className='w-[96%] h-[84%] border-[#FFAC80] border-dashed border-[1px] rounded-full flex items-center justify-center gap-[.65rem]'>
                        <Heart />
                        <span className='font-coffee text-[#FFAC80] pt-[0.325rem]'>Shop her merch!</span>
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NeuroSamaIntroduction