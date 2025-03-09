import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GraciasPage() {
  return (
    <div className='flex justify-center items-center rounded-4xl overflow-hidden pri-sec p-24 mt-8'>
      <div className='flex flex-col justify-center items-center text-white text-5xl  '>
        <Image src="/images/logo.jpeg" alt="LogoPresidenciaAcambaro " 
          width={400} 
          height={400} 
          priority={true} 
          className="lg:w-44 w-36 mb-8 rounded-xl" />
        <h1 className='text-xl md:text-5xl text-center'>GRACIAS, NOSOTROS TE CONTACTAREMOS</h1>
        <Link  
          href="/"        
          className="m-8 text-lg p-6 py-4 rounded-md bg-white text-blue-600 hover:bg-gray-200 transition duration-300"
        >
          Volver a Inicio
        </Link>
      </div>
    </div>
  ) 
}

