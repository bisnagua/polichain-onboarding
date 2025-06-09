'use client';

type BotaoProps = { 
    texto: string;
    aoClicar?: () => void; //? → opicional dar
    children?: React.ReactNode; 
    cor?: string;
};


export default function Button({texto, aoClicar, children, cor = "bg-neutral-500"}: BotaoProps) { //: → tipo
  return (
  <button
    onClick={aoClicar}
    className="flex flex-col items-center px-5 py-2 text-white rounded hover:bg-neutral-700 transition font-mono text-2xl" //hover → mouse em cima 
  >
    {children}
    <span className="mt-2">{texto}</span>
  </button>
    
  );
}
