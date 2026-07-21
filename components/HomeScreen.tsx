"use client"

import React, { useState } from 'react'
import PlushSelector from './PlushSelector'
import HeroCenter from './HeroCenter'
import NeuroSamaIntroduction from './NeuroSamaIntroduction'

const backgrounds: Record<string, string> = {
   nwero: "bg-[#FDEFE0]",
   "nwerosama-merch": "bg-[#FDEFE0]",
   eliv: "bg-[#DBB2B2]",
}

const HomeScreen = ({ featuredMerch }: { featuredMerch: React.ReactNode }) => {
   const [selected, setSelected] = useState<string | null>(null)

   return (
      <main className={`relative h-full w-full transition-colors duration-700 ease-in-out ${selected ? backgrounds[selected] : ""}`}>
         <PlushSelector selected={selected} setSelected={setSelected} />
         <HeroCenter selected={selected} />
         {selected === "nwero" || selected === "nwerosama-merch" ? <NeuroSamaIntroduction selected={selected} setSelected={setSelected} featuredMerch={featuredMerch} /> : null}
      </main>
   )
}

export default HomeScreen
