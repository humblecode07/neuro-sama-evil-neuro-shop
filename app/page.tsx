import CircularText from "@/components/CircularText";
import Cookie from "@/components/icons/Cookie";
import Merch from "@/components/icons/Merch";
import EvilNeuroPlush from "@/components/NeurosPlushInteraction/EvilNeuroPlush";
import NeuroSamaPlush from "@/components/NeurosPlushInteraction/NeuroSamaPlush";
import PlushSelector from "@/components/PlushSelector";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <main className="relative h-full w-full">
        <PlushSelector />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-[1rem]">
          <div className="relative w-[7.75rem] h-[8.0625rem] flex items-center justify-center">
            <CircularText />
            <Cookie className="absolute inset-0 m-auto w-12 h-12" />
          </div>
          <div className="relative w-[3.1875rem] h-[3.1875rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#DDDDDD] rounded-full opacity-20 backdrop-blur-md shadow-lg"></div>

            <div className="absolute top-0 right-0 w-[1.125rem] h-[1.125rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF1F1F] rounded-full"></div>
              <span className="relative font-coffee text-white text-[.75rem]">
                0
              </span>
            </div>

            <Merch />
          </div>
        </div>
        <span className="fixed bottom-[2.375rem] left-1/2 -translate-x-1/2 text-[#535353] text-[.75rem] font-uncut-sans">
          Created by @humblecode07
        </span>
      </main>
    </div>
  );
}
