"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image';

type Props = {
   selected: string;
   setSelected: (value: string) => void;
};

const NeuroSamaPlush = ({ selected, setSelected }: Props) => {
   const neuroSamaPlushRef = useRef<HTMLDivElement | null>(null);

   const plushHover = () => {
      gsap.to(neuroSamaPlushRef.current, {
         x: 340,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   const plushHoverLeave = () => {
      if (selected === "nwero") return;

      gsap.to(neuroSamaPlushRef.current, {
         x: 0,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   useEffect(() => {
      if (selected === "eliv") {
         gsap.to(neuroSamaPlushRef.current, {
            x: -400,
            duration: 0.3,
            ease: "power2.out"
         })
      }
   }, [selected])

   return (
      <div onClick={() => setSelected("nwero")} onMouseEnter={plushHover} onMouseLeave={plushHoverLeave} ref={neuroSamaPlushRef} className={`relative w-[43.0625rem] h-[57.4375rem] ml-[-18%]
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
