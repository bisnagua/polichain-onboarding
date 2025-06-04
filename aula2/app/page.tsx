'use client';

import Image from "next/image";
import Link from "next/link";
import Button from "@/componente/button";
export default function Home() {

  const variavel: number = 5;
  return (
  <div>
    <p>teste</p>
    <Link href="pagina2">ir pra pagina 2</Link> 
    //nao da pra referenciar links fora do seu site
    <Button texto={"pagina 1"} aoClicar={() => alert("pagina1")}></Button>
  </div>
    
  );
}
