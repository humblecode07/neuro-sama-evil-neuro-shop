import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="">
        <div className="relative w-[43.0625rem] h-[57.4375rem]">
          <Image
            src="/neuro_fumo_1.png"
            alt="Neuro fumo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="relative w-[43.0625rem] h-[57.4375rem]">
          <Image
            src="/evil_neuro_fumo_1.png"
            alt="Neuro fumo"
            fill
            priority
            className="object-contain"
          />
        </div>
        
      </main>
    </div>
  );
}
