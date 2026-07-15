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
      <div ref={introductionRef} className='relative h-screen'>
         <NeuroSamaBg />
         <Gears />
         <Star />
         <button
            className='flex gap-[.75rem] items-center pl-[2rem] pt-[2rem] cursor-pointer group'
         >
            <ArrowLeft className='transition-all duration-300 text-[#847B7B] group-hover:text-[#000]' />
            <span className='font-uncut-sans text-[.75rem] text-[#847B7B] transition-colors duration-300 group-hover:text-[#000]'>
               G O &nbsp; B A C K
            </span>
         </button>
         <div className='relative flex pl-[51.125rem] pt-[15rem] z-[1] flex-col'>
            <div className='flex gap-[.5rem] items-center'>
               <span className='font-uncut-sans text-[.75rem] font-medium text-[#555555]'>O U R &nbsp; W O R L D S &nbsp; S M A R T E S T &nbsp; C O O K I E</span>
               <Diamond />
            </div>
            <h1
               className="font-coffee text-[10.125rem] text-[#FDEFE0] rotate-[-1.22deg]"
               style={{ textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
               Neuro-sama
            </h1>
            <span className='font-uncut-sans w-[46.6875rem] text-[#ffffff] rotate-[-0.7deg] mt-[-1.5rem] leading-[19px]'>
               An AI-powered virtual streamer (VTuber) known for interacting with viewers, playing games, and collaborating with other creators through real-time conversations. Developed by Vedal987, she has become one of the most recognized AI personalities in online streaming. Just be warned, she can be a little <span className='text-[#B26841]'>unhinged</span>.
            </span>
            <div className='flex gap-[1.625rem] pt-[2.54rem]'>
               <button className='w-[18.3125rem] h-[3.8125rem] bg-[#FDEFE0] rounded-full flex items-center justify-center rotate-[-0.13deg]' style={{ boxShadow: '0 4px 4px rgba(114, 24, 57, 0.25)' }}>
                  <div className='w-[17.6875rem] h-[3.1875rem] border-[#FFAC80] border-dashed border-[1px] rounded-full flex items-center justify-center gap-[.65rem]'>
                     <Image
                        src="/vedal.png"
                        alt="Vedal AI Icon"
                        width={19}
                        height={19}
                     />
                     <span className='font-coffee text-[#FFAC80] pt-[0.325rem]'>Check her channel</span>
                  </div>
               </button>
               <button className='w-[18.3125rem] h-[3.8125rem] bg-[#FDEFE0] rounded-full flex items-center justify-center rotate-[-1.24deg]' style={{ boxShadow: '0 4px 4px rgba(114, 24, 57, 0.25)' }}>
                  <div className='w-[17.6875rem] h-[3.1875rem] border-[#FFAC80] border-dashed border-[1px] rounded-full flex items-center justify-center gap-[.65rem]'>
                     <Heart />
                     <span className='font-coffee text-[#FFAC80] pt-[0.325rem]'>Shop her merch!</span>
                  </div>
               </button>
            </div>
         </div>
      </div>
   )
}

export default NeuroSamaIntroduction