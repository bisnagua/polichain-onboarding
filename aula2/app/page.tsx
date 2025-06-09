'use client';

import Image from "next/image";
import Link from "next/link";
import Button from "@/componente/button";
import { useRouter } from "next/navigation";
import './globals.css'


export default function Home() {

  const router = useRouter();

  return (
  <div className="bg-neutral-600 min-h-screen p-4">

<p className="text-center text-7xl font-extrabold mb-20 font-serif italic 
  bg-gradient-to-r from-red-600 via-orange-400 via-yellow-400 via-blue-400 to-blue-600 
  bg-clip-text text-transparent leading-tight">
  Quer conhecer meus gatos?
</p>


    <div className="flex gap-4 font-serif text-2x1 drop-shadow-lg italic">

      <Button texto = {"Ágatha"} aoClicar={() => router.push('/Agatha')}>
        <Image src="/images/fotosAgatha/agatha1.png" 
          alt="Imagem da Agatha" 
          width={250} 
          height={250}
          className="rounded-xl border-4 border-red-700 shadow-lg"></Image>
      </Button>

      <Button texto = {"Flocos"} aoClicar={() => router.push('/Flocos')}>
        <Image src="/images/fotosFlocos/flocos1.png" 
          alt="Imagem do Flocos" 
          width={250} 
          height={250}
          className="rounded-xl border-4 border-orange-500 shadow-lg"></Image>
      </Button> 

      <Button texto = {"Frajola"} aoClicar={() => router.push('/Frajola')}>
        <Image src="/images/fotosFrajola/frajola1.png" 
          alt="Imagem do Frajola" 
          width={250} 
          height={250}
          className="rounded-xl border-4 border-yellow-500 shadow-lg"></Image>
      </Button>

      <Button texto = {"Gaya"} aoClicar={() => router.push('/Gaya')}>
        <Image src="/images/fotosGaya/gaya1.png" 
          alt="Imagem do Gaya" 
          width={250} 
          height={250}
          className="rounded-xl border-4 border-emerald-600 shadow-lg"></Image>
      </Button>
      
      <Button texto = {"Goiaba"} aoClicar={() => router.push('/Goiaba')}>
        <Image src="/images/fotosGoiaba/goiaba1.png" 
          alt="Imagem da Goiaba" 
          width={250} 
          height={250}
          className="rounded-xl border-4 border-sky-600 shadow-lg"></Image>
      </Button>

    </div>

  </div>
    
  );
} 
