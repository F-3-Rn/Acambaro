'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Button from '@/components/login/Button';
import { createCita } from '../api/actions/userAction';

const CitasPage: React.FC = () => {
  const router = useRouter()
  const enviarCita = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const citaData = {
      curp: formData.get("curp"),
      nombre: formData.get("nombre"),
      telefono: formData.get("telefono"),
      correo: formData.get("correo"),
      domicilio: formData.get("domicilio"),
      apoyo: formData.get("apoyo"),
    };
    sessionStorage.setItem("citaData", JSON.stringify(citaData));
    await createCita(formData);
    router.push("/pdf");
  };

  return (
    <div className="md:flex justify-center items-stretch mx-auto w-full mt-16 mb-4 rounded-lg overflow-hidden">
      <div className='w-full bg-white flex-grow'>
        <form onSubmit={enviarCita} className="p-8 shadow-md w-full px-12 flex flex-col gap-3">
          <h1 className="text-3xl font-bold mb-6">Agendar Cita</h1>

          <div className="mb-4">
            <label className="block text-gray-700">CURP</label>
            <input type="text" name='curp' className="wbg-white w-full p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder='Ingresa tu CURP' required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input type="text" name='nombre' className="bg-white w-full p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder='Ingresa tu nombre' required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Correo</label>
            <input type="email" name='correo' className="bg-white w-full p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder='correo@ejemplo.com' required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Teléfono</label>
            <input type="text" name='telefono' className="bg-white w-full p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder='Ingresa tu teléfono' required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Domicilio</label>
            <input type="text" name='domicilio' className="bg-white w-full p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder='Ingresa tu domicilio' required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Apoyo</label>
            <input type="text" name='apoyo' className="bg-white w-full p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder='Describe tu solicitud' required />
          </div>
          <Button className='mt-4' text="Agendar" />
        </form>
      </div>

      <div className='pri-sec w-full py-24 md:py-0 flex-grow flex flex-col justify-center items-center text-white'>
        <Image src="/images/logo.jpeg" alt="LogoPresidenciaAcambaro" width={400} height={400} priority={true} className="md:w-44 w-36 mb-2 rounded-xl" />
        <p className='md:text-4xl text-2xl'>Agenda tu cita</p>
      </div> 
    </div>
  );
};

export default CitasPage;