"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image';

type Props = {
   selected: string;
   setSelected: (value: string) => void;
};

const EvilNeuroPlush = ({ selected, setSelected }: Props) => {
   const evilNeuroPlushRef = useRef<HTMLDivElement | null>(null);

   const plushHover = () => {
      gsap.to(evilNeuroPlushRef.current, {
         x: -350,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   const plushHoverLeave = () => {
      if (selected === "eliv") return;

      gsap.to(evilNeuroPlushRef.current, {
         x: 0,
         duration: 0.3,
         ease: "power2.out"
      })
   }

   useEffect(() => {
      if (selected === "nwero") {
         gsap.to(evilNeuroPlushRef.current, {
            x: 400,
            duration: 0.5,
            ease: "power2.out"
         })
      }

      if (selected === null) {
           gsap.to(evilNeuroPlushRef.current, {
            x: 0,
            duration: 0.5,
            ease: "power2.out"
         })
      }
   }, [selected])

   return (
      <div onClick={() => setSelected("eliv")} onMouseEnter={plushHover} onMouseLeave={plushHoverLeave} ref={evilNeuroPlushRef} className={`relative w-[43.0625rem] h-[57.4375rem] mr-[-18%]
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
