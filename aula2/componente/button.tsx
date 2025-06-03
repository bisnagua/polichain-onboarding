'use client';

type BotaoProps = { 
    texto: string;
    aoClicar?: () => void; //?→ opicional dar
};


export default function Button({texto, aoClicar}: BotaoProps) { //: → tipo
  return (
  <button
    onClick={aoClicar}
    className = "px-10 py-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition" //hover - mouse em cima 
  >
    {texto}
  </button>
    
  );
}
