'use client';

import Image from "next/image";
import Link from "next/link";
import Button from "@/componente/button";
import { useRouter } from "next/navigation";
import './globals.css';
import { useState, useEffect } from 'react'


export default function Home() {

  const router = useRouter();

  const [message, setMessage] = useState("");

    const [items, setItems] = useState<{ id: number, name: string, votes: number }[]>([])
  const [newName, setNewName] = useState("")

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch('/api/items')
    const data = await res.json()
    setItems(data)
  }

const handleUpvote = async (id: number) => {
  await fetch(`/api/items/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "upvote" }),
  });
  fetchItems();
};

const handleDownvote = async (id: number) => {
  await fetch(`/api/items/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "downvote" }),
  });
  fetchItems();
};

  const handleAddName = async () => {
    if (newName.trim() === "") return
    try {
       const res = await fetch('/api/items', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setMessage(errorData.error || "Erro ao adicionar o nome.");
        return;
      }

      setMessage("Nome adicionado à lista.");
      setNewName("");
      fetchItems();
    } catch (error) {
      setMessage("Erro na conexão com o servidor.");
    }
  };

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

    <div className="mt-16 bg-neutral-500 p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-black font-mono">Sugira um nome para futuros gatos :)</h2>

      {message && (
       <div className="text-white bg-purple-500 p-2 mb-4 rounded font-mono">
        {message}
       </div>
      )}

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddName();
            }
          }}
          className="flex-1 border border-gray-400 rounded px-3 py-2"
          placeholder="Nome..."
        />
        <button
          onClick={handleAddName}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 font-mono"
        >
          Enviar
        </button>
      </div>

      <h3 className="text-xl mb-2 text-black font-mono">Nomes sugeridos:</h3>
      <ul className="space-y-2">
        {items.map(item => (
        <li key={item.id} className="flex justify-between items-center bg-neutral-400 p-2 rounded">
          <span className="text-black">{item.name} ({item.votes} votos)</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleUpvote(item.id)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 font-mono"
            >
              ↑
            </button>

            <button
              onClick={() => handleDownvote(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 font-mono"
            >
              ↓
            </button>
          </div>
        </li>
         ))}
      </ul>
    </div>
  </div>    
  );
} 
