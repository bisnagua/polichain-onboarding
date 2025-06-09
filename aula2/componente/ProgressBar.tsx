'use client';

import { useEffect, useState } from "react";

type ProgressBarProps = {
  label: string;
  value: number;
  max: number;
};

export default function ProgressBar({ label, value, max }: ProgressBarProps) {
  const [percent, setPercent] = useState(0);
  const targetPercent = (value / max) * 100;

  useEffect(() => {
    // Anima para o valor alvo após o componente montar
    const timeout = setTimeout(() => setPercent(targetPercent), 100);
    return () => clearTimeout(timeout);
  }, [targetPercent]);

  return (
    <div className="my-4 w-full max-w-md">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-gray-200">{label}</span>
        <span className="text-gray-200">{value} / {max}</span>
      </div>
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-pink-500 transition-all duration-1000 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
