"use client"

import React, { useState } from 'react'
import NeuroSamaPlush from './NeurosPlushInteraction/NeuroSamaPlush';
import EvilNeuroPlush from './NeurosPlushInteraction/EvilNeuroPlush';

type Props = {
   selected: string | null;
   setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

const PlushSelector = ({ selected, setSelected }: Props) => {
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
