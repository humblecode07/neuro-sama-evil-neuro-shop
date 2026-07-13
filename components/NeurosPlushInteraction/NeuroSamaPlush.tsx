"use client";

import React, { useRef } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image';

const NeuroSamaPlush = () => {
   const neuroSamaPlushRef = useRef<HTMLDivElement | null>(null);

   const plushHover = () => {
      gsap.to(neuroSamaPlushRef.current, {
         x: 350,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   const plushHoverLeave = () => {
      gsap.to(neuroSamaPlushRef.current, {
         x: 0,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   return (
      <div onMouseEnter={plushHover} onMouseLeave={plushHoverLeave} ref={neuroSamaPlushRef} className={`relative w-[43.0625rem] h-[57.4375rem] ml-[-18%]
               `}>
         <Image
            src="/neuro_fumo_1.png"
            alt="Neuro-Sama Fumo"
            fill
            priority
            className="object-contain"
         />
      </div>
   )
}

export default NeuroSamaPlush
