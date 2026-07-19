"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
   selected: string | null;
}

const MessageBubble = ({ selected }: Props) => {
   const ref = useRef<SVGSVGElement | null>(null);

   useEffect(() => {
      gsap.to(ref.current, {
         y: 630,
         duration: 0.3,
         ease: "power2.out"
      })
   }, [selected]);

   return (
      <div ref={ref} className="absolute mt-[-40rem]">
         <svg className="absolute left-[3.125rem] top-[4.375rem]" width="560" height="415" viewBox="0 0 560 415" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M440.971 2.82096C470.792 4.91013 501.284 6.98504 524.868 34.3446C544.386 56.9821 552.156 89.536 555.871 122.39C560.495 163.244 559.359 206.015 556.553 246.939C554.031 283.686 547.692 319.474 520.552 337.804C489.367 358.853 485.713 354.718 452.233 352.629C425.145 350.139 389.598 345.374 351.21 359.812C347.325 361.272 343.588 362.745 340.827 367.181C331.943 381.405 325.501 398 319.001 414C313.001 400.5 312.699 395.8 300.452 379.301C295.987 373.306 293.101 366.366 287.069 362.474C266.961 349.524 239.332 356.249 218.963 355.719C191.016 354.975 122.877 354.818 96.3271 353.373C75.685 352.257 54.8382 353.029 37.2408 337.661C8.44185 312.505 4.35196 260.362 2.45476 220.524C-0.0672777 167.222 -1.90749 109.712 20.3364 61.5898C32.1741 36.0046 51.8733 19.7062 74.1059 11.3638C96.3271 3.02142 118.889 2.83531 141.405 2.50619C188.597 1.84796 235.414 1.5188 282.367 1.03228C323.083 0.603001 362.22 4.62402 403.3 3.0786C415.126 2.63501 428.042 1.90516 440.971 2.82096Z" stroke="#FFAC80" strokeWidth="2" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M436.778 12.7195C465.638 14.6924 495.146 16.6517 517.969 42.4877C536.857 63.8644 544.377 94.6054 547.972 125.63C552.447 164.208 551.348 204.597 548.632 243.243C546.191 277.943 540.057 311.738 513.792 329.048C483.613 348.924 480.077 345.019 447.677 343.047C421.463 340.695 387.062 336.196 349.913 349.83C346.153 351.208 342.537 352.6 339.865 356.789C331.268 370.22 325.033 385.891 318.743 401C312.936 388.252 312.644 383.814 300.792 368.234C296.472 362.572 293.679 356.019 287.841 352.343C268.382 340.114 241.644 346.465 221.932 345.965C194.887 345.262 128.945 345.114 103.252 343.749C83.2759 342.695 63.1015 343.425 46.0718 328.912C18.2018 305.157 14.2439 255.918 12.4079 218.299C9.9672 167.965 8.18634 113.658 29.7127 68.2155C41.1685 44.0552 60.2323 28.6644 81.7477 20.7866C103.252 12.9089 125.086 12.7331 146.876 12.4223C192.545 11.8007 237.852 11.4899 283.29 11.0305C322.693 10.6251 360.568 14.4222 400.322 12.9628C411.767 12.544 424.267 11.8547 436.778 12.7195Z" stroke="#FFAC80" strokeMiterlimit="2" strokeLinecap="round" strokeDasharray="5 5" />
         </svg>
         <div className="absolute left-[6rem] top-[9rem] w-[29.625rem] text-center font-coffee text-[1rem] flex flex-col gap-[.75rem] text-[#B26841]">
            <span>
               Hello! Welcome to my personal Neuro-sama and <span className="text-[#AA2E2E]">Evil Neuro</span> merch shop project.
            </span>
            <br />
            <span>
               This shop is not official and none of the products are real. I created this as a fun personal project to learn how online stores and transactions work, all wrapped around the silly idea of making a merch shop for Neuro-sama and her sister, Evil Neuro.
            </span>
            <br />
            <span>
               Feel free to look around, hover over the merchandise, and enjoy the experience!
            </span>
         </div>
      </ div>
   )
}

export default MessageBubble
