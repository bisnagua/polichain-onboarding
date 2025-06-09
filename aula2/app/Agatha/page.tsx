'use client';

import Button from "@/componente/button";
import CarrosselImagem from "@/componente/carrossel";
import ProgressBar from "@/componente/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const imagensAgatha = [
    "/images/fotosAgatha/agatha9.png",
    "/images/fotosAgatha/agatha11.png",
    "/images/fotosAgatha/agatha3.png",
    "/images/fotosAgatha/agatha6.png",
    "/images/fotosAgatha/agatha5.png",
    "/images/fotosAgatha/agatha4.png",
    "/images/fotosAgatha/agatha7.png",
    "/images/fotosAgatha/agatha8.png",
    "/images/fotosAgatha/agatha10.png",
    "/images/fotosAgatha/agatha2.png",
    "/images/fotosAgatha/agatha12.png",
    "/images/fotosAgatha/agatha1.png"
  ]; 

  return (
  <div className="bg-purple-900 min-h-screen p-4">
    <div className="relative mb-8 h-16 flex items-center">
      <Button texto={"<<voltar"} aoClicar={() => router.back()} />
        <p className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold text-white font-serif drop-shadow-lg italic">
          ÁGATHA
        </p>
    </div>
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="flex justify-center items-start">
        <CarrosselImagem imagens = {imagensAgatha}/>
      </div>
   
      <div className="flex flex-col gap-6">
        <div className="bg-purple-600/50 rounded-xl p-4">
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"Data de nascimento: 28/08/2019\nSexo: Feminino\nTambém conhecida como: Zagatha, Gagatha, Lady Gagatha, Blagatha\nCuriosidade: Esse é o nome dela simplesmente porque: Ágatha, a gata."}
          </p>
        </div>
             
        <div className="bg-purple-600/50 rounded-xl p-4">
          <ProgressBar label="Travessura" value={60} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Ela normalmente não começa nenhuma briga e fica mais na dela (com exceção do Gaya que ela azucrina), o problema é que ela é muito brava e fácil de irritar, então ela acaba envolvida em várias brigas. Infelizmente também é uma ótima caçadora de pássaros, muitos já morreram por aqui."}
          </p>
        </div>
      </div>
   
      <div className="flex flex-col gap-6">
             
        <div className="bg-purple-600/50 rounded-xl p-4">
          <ProgressBar label="Carência" value={60} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Ela tem suas épocas, de vez em quando está extremamente carente e fica brava se não fizerem carinho nela, e outras só de tocar nela já rende um rosnado."}
          </p>
        </div>
   
        <div className="bg-purple-600/50 rounded-xl p-4">
          <ProgressBar label="Necessidade de sair de casa" value={100} max={100} />
            <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
              {"→ Ela mais fica fora de casa do que dentro. É comum passar mais de um dia sem ver ela e se a gente fechar ela dentro de casa por muito tempo ela mia escandalosamente na frente da porta."}
            </p>
        </div>
      </div>
    </div>
  </div>
     );
   }