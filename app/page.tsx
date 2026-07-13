import CircularText from "@/components/CircularText";
import HeroCenter from "@/components/HeroCenter";
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
        <HeroCenter />
      </main>
    </div>
  );
}
