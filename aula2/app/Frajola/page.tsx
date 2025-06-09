'use client';

import Button from "@/componente/button";
import CarrosselImagem from "@/componente/carrossel";
import ProgressBar from "@/componente/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const imagensFrajola = [
    "/images/fotosFrajola/frajola15.png",
    "/images/fotosFrajola/frajola2.png",
    "/images/fotosFrajola/frajola3.png",
    "/images/fotosFrajola/frajola4.png",
    "/images/fotosFrajola/frajola5.png",
    "/images/fotosFrajola/frajola6.png",
    "/images/fotosFrajola/frajola7.png",
    "/images/fotosFrajola/frajola10.png",
    "/images/fotosFrajola/frajola9.png",
    "/images/fotosFrajola/frajola14.png",
    "/images/fotosFrajola/frajola11.png",
    "/images/fotosFrajola/frajola12.png",
    "/images/fotosFrajola/frajola13.png",
    "/images/fotosFrajola/frajola8.png",
    "/images/fotosFrajola/frajola1.png"
  ];   

  return (
  <div className="bg-teal-800 min-h-screen p-4">
    <div className="relative mb-8 h-16 flex items-center">
      <Button texto={"<<voltar"} aoClicar={() => router.back()} />
        <p className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold text-white font-serif drop-shadow-lg italic">
          FRAJOLA
        </p>
    </div>
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="flex justify-center items-start">
        <CarrosselImagem imagens = {imagensFrajola}/>
      </div>
   
      <div className="flex flex-col gap-6">
        <div className="bg-teal-600/50 rounded-xl p-4">
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"Data de nascimento: 28/08/2019\nSexo: Masculino\nTambém conhecido como: Flajobly, Frajolito, Frajoly\nCuriosidade: Uma vez um vizinho reclamou que o Frajola vai na casa dele, bate no gato dele e come a comida do outro gato."}
          </p>
        </div>
             
        <div className="bg-teal-600/50 rounded-xl p-4">
          <ProgressBar label="Necessidade de sair de casa" value={90} max={100} />
            <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
              {"→ O segundo que mais sai de casa, inclusive já desapareceu por uma semana inteira e só voltou porque um vizinho achou ele meio perdido. Hoje em dia ainda sai bastante, mas não some mais por muito tempo e quase sempre está por perto na hora de dar comida."}
            </p>
        </div>
      </div>
   
      <div className="flex flex-col gap-6">
             
        <div className="bg-teal-600/50 rounded-xl p-4">
          <ProgressBar label="Carência" value={75} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Ele não é de ficar desesperadamente pedindo carinho, mas adora um colo e dormir pertinho. Mas se estiver perto da hora de comer deles, ele te persegue pra lá e pra cá (principalmente minha mãe)."}
          </p>
        </div>
   
        <div className="bg-teal-600/50 rounded-xl p-4">
          <ProgressBar label="Travessura" value={100} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Pegou uma mania horrível de ficar fazendo xixi por todos os lugares da casa pra marcar território. Adora matar bichos, os passarinhos ele come e os insetos ele fica perseguindo e batendo até eles pararem de ser mexer. "}
          </p>
        </div>
      </div>
    </div>
  </div>
     );
   }