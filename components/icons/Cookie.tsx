"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

const Cookie = ({ className = '' }) => {
  const cookieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(cookieRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    })
  }, [])

  return (
    <svg
      ref={cookieRef}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      width="2.5em" height="2.5em"
    >
      <defs>
        <mask id="SVGHqklJo4n">
          <path fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"></path>
          <circle cx={9.5} cy={7.5} r={1.5}></circle>
          <circle cx={11} cy={17.5} r={1.5}></circle>
          <circle cx={6.5} cy={11.5} r={1.5}></circle>
          <circle cx={16.5} cy={14.5} r={1.5}></circle>
          <circle cx={11.5} cy={12.5} r={1.5}></circle>
        </mask>
      </defs>
      <path fill="#ffab61" d="M0 0h24v24H0z" mask="url(#SVGHqklJo4n)"></path>
    </svg>
  )
}

export default Cookie