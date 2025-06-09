'use client';

import Button from "@/componente/button";
import CarrosselImagem from "@/componente/carrossel";
import ProgressBar from "@/componente/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

   const imagensGoiaba = [
    "/images/fotosGoiaba/goiaba10.png",
    "/images/fotosGoiaba/goiaba3.png",
    "/images/fotosGoiaba/goiaba4.png",
    "/images/fotosGoiaba/goiaba5.png",
    "/images/fotosGoiaba/goiaba6.png",
    "/images/fotosGoiaba/goiaba7.png",
    "/images/fotosGoiaba/goiaba8.png",
    "/images/fotosGoiaba/goiaba9.png",
    "/images/fotosGoiaba/goiaba2.png",
    "/images/fotosGoiaba/goiaba1.png"
  ];    

  return (
  <div className="bg-pink-900 min-h-screen p-4">
    <div className="relative mb-8 h-16 flex items-center">
      <Button texto={"<<voltar"} aoClicar={() => router.back()} />
        <p className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold text-white font-serif drop-shadow-lg italic">
          GOIABA
        </p>
    </div>
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="flex justify-center items-start">
        <CarrosselImagem imagens = {imagensGoiaba}/>
      </div>
   
      <div className="flex flex-col gap-6">
        <div className="bg-pink-800/50 rounded-xl p-4">
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"Data de nascimento: 05/09/2023\nSexo: Feminino\nTambém conhecida como: Goiabada, Gobiaba, Gobaiba, Bebéia, Cheirosa\nCuriosidade: Adotamos ela de uma mulher desesperada no Cobasi porque achou a Goiaba filhote dentro do motor dela (tiveram que ir no mecânico tirar ela de dentro)."}
          </p>
        </div>

          <div className="bg-pink-800/50 rounded-xl p-4">
          <ProgressBar label="Carência" value={40} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Gosta de colo e de dormir perto/em cima, mas não é muito fã de carinhos na maioria das vezes e é bem difícil ela deixar ser carregada."}
          </p>
        </div>    
      
      </div>
   
      <div className="flex flex-col gap-6">
             
          <div className="bg-pink-800/50 rounded-xl p-4">
          <ProgressBar label="Travessura" value={50} max={100} />
          <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
            {"→ Quando ela era menor e tinha mais energia ela sempre pulava em cima de algum gato (preferencialmente o flocos), mas acalmou um pouco hoje em dia. Tem picos de loucura em que ela sai correndo e brincando com as coisas."}
          </p>
        </div>
   
        <div className="bg-pink-800/50 rounded-xl p-4">
          <ProgressBar label="Necessidade de sair de casa" value={30} max={100} />
            <p className="text-xl text-gray-200 font-mono whitespace-pre-line">
              {"→ Uma vez foi pro vizinho e o cachorro deles machucou ela e a partir daí ela começou a sair bem menos. Gosta mais de ficar na garagem tomando sol."}
            </p>
        </div>
      </div>
    </div>
  </div>
     );
   } 
