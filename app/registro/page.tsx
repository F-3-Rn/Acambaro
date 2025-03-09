'use client'
import React from 'react';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';
import LoginSide from '@/components/login/LoginSide';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

function RegistroPage() {
  const { register, handleSubmit, setValue, watch, formState: { errors }, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data: any) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      console.log("Usuario registrado");
      router.push('/login');
    } else {
      console.log("Error al registrar el usuario");      
    }
    console.log(errors);
  });
  
  return (
    <div className='flex justify-center items-center mt-10 bg-gray-100 p-6'>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col lg:flex-row w-full max-w-[1080px] lg:h-[620px] rounded-lg shadow-lg overflow-hidden">
          {/* Parte izquierda del formulario */}
            <div className="w-full lg:w-1/2 bg-white text-black p-10">
            <form onSubmit={onSubmit} className=' flex flex-col justify-center gap-7'>
              <h2 className="pl-1 pb-2 text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">
                Registro
              </h2>
              <Input type="text" id="name" label="Nombre" placeholder="Ingresa tu nombre"
                error={errors.name?.message as string | undefined}
                required={true}
                autoComplete="off"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre es obligatorio"
                  }
                })}
              />    
              <Input type="text" id="email" label="Correo Electrónico" placeholder="correo@gmail.com"
                error={errors.email?.message as string | undefined}
                required={true}
                autoComplete="off"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es obligatorio"
                  }
                })}
              />   
              <Input type="password" id="password" label="Contraseña" placeholder="****************"
                error={errors.password?.message as string | undefined}
                required={true}
                autoComplete="off"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es obligatoria"
                  }
                })}
              />          
              <Button className='mt-4' text="Crear cuenta" />
            </form>
            </div>
            {/* Parte derecha del formulario */}
            <LoginSide text='Regístrate para continuar' />

        </div>
      </div>
    </div>
  );
}

export default RegistroPage;