'use client';

import Button from "@/componente/button";
import CarrosselImagem from "@/componente/carrossel";
import ProgressBar from "@/componente/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";


// nova pagina GAYA

export default function Home() {

    const router = useRouter();

    const imagensGaya = [
      "/images/fotosGaya/gaya5.png",
      "/images/fotosGaya/gaya2.png",
      "/images/fotosGaya/gaya11.png",
      "/images/fotosGaya/gaya4.png",
      "/images/fotosGaya/gaya13.png",
      "/images/fotosGaya/gaya6.png",
      "/images/fotosGaya/gaya7.png",
      "/images/fotosGaya/gaya8.png",
      "/images/fotosGaya/gaya9.png",
      "/images/fotosGaya/gaya10.png",
      "/images/fotosGaya/gaya3.png",
      "/images/fotosGaya/gaya12.png",
      "/images/fotosGaya/gaya1.png"
    ];   

  return (
  <div className="bg-red-300 min-h-screen p-4">
    <div className="relative mb-8 h-16 flex items-center">
      <Button texto={"<<voltar"} aoClicar={() => router.back()} />
        <p className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold text-white font-serif drop-shadow-lg italic">
          GAYA
        </p>
    </div>
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   
      <div className="flex flex-col gap-6">
        <div className="bg-red-400/50 rounded-xl p-4">
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"Data de nascimento: 11/02/2020\nSexo: Masculino\nTambém conhecida como: Gaiato, Bebê\nCuriosidade: Tem nome feminino porque a gente achava que era fêmea por muito tempo."}
          </p>
        </div>
             
        <div className="bg-red-400/50 rounded-xl p-4">
          <ProgressBar label="Carência" value={50} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Gosta de beijo e carinho e sempre empurra a cabeça contra a sua mão. Só sobe no colo às vezes (provavalmente porque fica com medo dos outros gatos), mas adora dormir com alguém por perto. É um evento quando ele aceita ser carregado no colo."}
          </p>
        </div>
      </div>
   
      <div className="flex flex-col gap-6">
             
        <div className="bg-red-400/50 rounded-xl p-4">
          <ProgressBar label="Travessura" value={10} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Sempre foi muito medroso e fugia dos ataques de outros gatos. Hoje em dia tá um pouco melhor, aprendeu a se defender um pouco e rosnar de volta de vez em quando."}
          </p>
        </div>
   
        <div className="bg-red-400/50 rounded-xl p-4">
          <ProgressBar label="Necessidade de sair de casa" value={15} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Ele não constuma querer sair mas quando fica com medo de visitas fica no telhado do vizinho ou se esconde em uns lugares que a gente nunca acha."}
          </p>
        </div>
      </div>
      
      <div className="flex justify-center items-start">
        <CarrosselImagem imagens = {imagensGaya}/>
      </div>
    </div>
  </div>
     );
   }
   
   
