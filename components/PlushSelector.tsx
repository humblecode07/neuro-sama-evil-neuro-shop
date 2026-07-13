"use client"

import React, { useState } from 'react'
import NeuroSamaPlush from './NeurosPlushInteraction/NeuroSamaPlush';
import EvilNeuroPlush from './NeurosPlushInteraction/EvilNeuroPlush';

const PlushSelector = () => {
   const [selected, setSelected] = useState(null);

   return (
      <>
         <div className="absolute left-0 -translate-x-[32%]">
            <NeuroSamaPlush selected={selected} setSelected={setSelected} />
         </div>

         <div className="absolute right-0 translate-x-[48%]">
            <EvilNeuroPlush selected={selected} setSelected={setSelected} />
         </div>
      </>
   )
}

export default PlushSelector
