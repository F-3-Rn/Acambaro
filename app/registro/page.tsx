import React from 'react';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';
import LoginSide from '@/components/login/LoginSide';

const RegistroPage = () => {
    return (
        <div className='flex justify-center items-center mt-8 bg-gray-100 p-6'>
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col lg:flex-row w-full max-w-[1080px] lg:h-[550px] rounded-lg shadow-lg overflow-hidden">
        {/* Parte izquierda del formulario */}
        <div className="w-full lg:w-1/2 bg-white text-black p-10 flex flex-col justify-center lg:gap-5">
          <h2 className="pl-1 pb-2 text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">
          Registro
          </h2>
          <Input
            type="name"
            id="name"
            label="Nombre"
            placeholder="Ingresa tu nombre"
          />
          <Input
            type="email"
            id="email"
            label="Correo Electrónico"
            placeholder="Ingresa tu correo"
          />
          <Input
            type="password"
            id="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
          />
                    <Button className='mt-4' text="Crear cuenta" />

        </div>

        {/* Parte derecha del formulario */}
        <LoginSide />
      </div>
    </div>
  </div>
    );

}

export default RegistroPage;