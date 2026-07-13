"use client";

import React, { useRef } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image';

const EvilNeuroPlush = () => {
   const evilNeuroPlushRef = useRef<HTMLDivElement | null>(null);

   const plushHover = () => {
      gsap.to(evilNeuroPlushRef.current, {
         x: -350,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   const plushHoverLeave = () => {
      gsap.to(evilNeuroPlushRef.current, {
         x: 0,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   return (
      <div onMouseEnter={plushHover} onMouseLeave={plushHoverLeave} ref={evilNeuroPlushRef} className={`relative w-[43.0625rem] h-[57.4375rem] mr-[-18%]
               `}>
         <Image
            src="/evil_neuro_fumo_1.png"
            alt="Evil Neuro Fumo"
            fill
            priority
            className="object-contain"
         />
      </div>
   )
}

export default EvilNeuroPlush
