'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleAgendarClick = () => {
    router.push('/citas');
  };

  return (
    <div className="rounded-4xl overflow-hidden pri-sec p-24 mt-8 pri-sec flex flex-col justify-center items-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Bienvenido a Gobierno de Acámbaro</h1>
        <p className="text-2xl mb-8">
          Agenda una cita para solicitar un apoyo.
        </p>
        <button
          onClick={handleAgendarClick}
          className="bg-white text-sky-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 hover:text-blue-500 transition duration-300"
        >
          Agendar Cita
        </button>
      </div>
    </div>
  );
}