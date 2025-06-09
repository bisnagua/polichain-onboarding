'use client';

import Button from "@/componente/button";
import CarrosselImagem from "@/componente/carrossel";
import ProgressBar from "@/componente/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const imagensFlocos = [
    "/images/fotosFlocos/flocos2.png",
    "/images/fotosFlocos/flocos4.png",
    "/images/fotosFlocos/flocos3.png",
    "/images/fotosFlocos/flocos5.png",
    "/images/fotosFlocos/flocos10.png",
    "/images/fotosFlocos/flocos6.png",
    "/images/fotosFlocos/flocos7.png",
    "/images/fotosFlocos/flocos8.png",
    "/images/fotosFlocos/flocos9.png",
    "/images/fotosFlocos/flocos1.png"
  ];

  return (
  <div className="bg-sky-950 min-h-screen p-4">
    <div className="relative mb-8 h-16 flex items-center">
      <Button texto={"<<voltar"} aoClicar={() => router.back()} />
        <p className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold text-white font-serif drop-shadow-lg italic">
          FLOCOS
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="flex flex-col gap-6">
        <div className="bg-sky-800/50 rounded-xl p-4">
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"Data de nascimento: 12/09/2019\nSexo: Masculino\nTambém conhecido como: Flocolino, Gordão, Brancão, Floco Bloco\nCuriosidade: Esquece de guardar a língua quando para de se lamber (ver foto 2)."}
          </p>
        </div>
  
        <div className="bg-sky-800/50 rounded-xl p-4">
          <ProgressBar label="Travessura" value={90} max={100} />
            <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
              {"→ Esse é o rei de começar a encher o saco de outro gato enquanto eles estão dormindo. Não consegue ver outro gato em paz que já tem que ir atazanar. Mas em compensação, ele não causa nenhum problema pros humanos - raramente faz suas necessidades fora do lugar e dificilmente quebra algo."}
            </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
            
        <div className="bg-sky-800/50 rounded-xl p-4">
          <ProgressBar label="Carência" value={100} max={100} />
            <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
              {"→ Se alguém sai de casa, ele pega alguma coisa que ele vê pela frente (preferencialmente uma meia) e sai miando pela casa com o objeto na boca (miados abafados e escandalosos)."}
            </p>
        </div>

        <div className="bg-sky-800/50 rounded-xl p-4">
          <ProgressBar label="Necessidade de sair de casa" value={50} max={100} />
            <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
              {"→ Ele é bem caseiro e o que menos sai de casa, até some de vez em quando, mas são poucas vezes e por poucas horas. Dito isso, se ele estiver desaparecido por algumas horas, minha mãe já fica extremamente preocupada."}
            </p>
        </div>
      </div>
          
      <div className="flex justify-center items-start">
        <CarrosselImagem imagens = {imagensFlocos}/>
      </div>
    </div>
  </div>
  );
}