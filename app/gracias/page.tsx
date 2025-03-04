import React from 'react'
import Image from 'next/image'

export default function GraciasPage() {
  return (
    <div className='flex justify-center items-center'>
      <div className='pri-sec w-full min-h-[92vh] flex flex-col justify-center items-center text-white text-5xl  '>
        <Image src="/images/logo.jpeg" alt="LogoPresidenciaAcambaro " width={400} height={400} priority={true} className="lg:w-44 w-36 mb-8 rounded-xl" />

        <h1 className='text-5xl'>GRACIAS, NOSOTROS TE CONTACTAREMOS</h1>

      </div>
    </div>
  )
}

