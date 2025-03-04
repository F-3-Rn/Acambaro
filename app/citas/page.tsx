'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'


const CitasPage: React.FC = () => {
    const router = useRouter()

    function enviarSolicitud(e: React.FormEvent){
        e.preventDefault(); // Evita la recarga de la página
        router.push("/gracias")
    }
    
    return (
        <div className="flex justify-center items-center mx-auto w-3/4  mt-6 mb-4">
            <form onSubmit={enviarSolicitud} className="bg-white p-8 shadow-md w-full max-w-lg px-12">
            <h2 className="text-2xl font-bold mb-6">Agendar Cita</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">CURP</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-400 rounded" placeholder='Ingresa tu CURP' required/>
                    
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-400 rounded" placeholder='Ingresa tu nombre' required/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Correo</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-400 rounded" placeholder='correo@ejemplo.com' required/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Teléfono</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-400 rounded" placeholder='Ingresa tu teléfono  ' required/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Domicilio</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-400 rounded" placeholder='Ingresa tu domicilio' required/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Apoyo</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-400 rounded" placeholder='Describe tu solicitud' required/>
                </div>
                
                <button type='submit' className="w-full pri-sec text-white p-2 hover:bg-blue-600 rounded-full">
                    Agendar
                </button>
            </form>
            <div className='pri-sec w-full h-[649px] flex flex-col justify-center items-center text-white text-5xl  '>
                    <Image src="/images/logo.jpeg" alt="LogoPresidenciaAcambaro " width={400} height={400} priority={true} className="lg:w-44 w-36 mb-2 rounded-xl"/>

                <p>Agenda tu cita</p>    
                      
            </div>
        </div>
    );
};

export default CitasPage;