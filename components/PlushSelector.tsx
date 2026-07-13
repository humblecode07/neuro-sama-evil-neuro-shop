"use client"

import React, { useState } from 'react'
import NeuroSamaPlush from './NeurosPlushInteraction/NeuroSamaPlush';
import EvilNeuroPlush from './NeurosPlushInteraction/EvilNeuroPlush';

const PlushSelector = () => {
   const [selected, setSelected] = useState("nwero");

   return (
      <>
         <div className="absolute left-0 -translate-x-[32%]">
            <NeuroSamaPlush />
         </div>

         <div className="absolute right-0 translate-x-[48%]">
            <EvilNeuroPlush />
         </div>
      </>
   )
}

export default PlushSelector
