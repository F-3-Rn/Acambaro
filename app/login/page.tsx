'use client'
import React, { useState } from 'react';
import { AlertDestructive } from '@/components/AlertDestructive';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';
import LoginSide from '@/components/login/LoginSide';

function LoginPage() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const enSubida = handleSubmit(async (data: any) => {
    console.log(data);
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });
    console.log(res);
    if (!res || res.error) {
      setError(res?.error ?? "Error");
      return;
    }
    router.push('/');
    // router.refresh();
  });
  return (
    <form onSubmit={enSubida}>
      <div className='flex justify-center items-center bg-gray-100 p-6 pt-0 mt-14'>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col lg:flex-row w-full max-w-[1080px] lg:h-[550px] rounded-lg shadow-lg overflow-hidden">
            {/* Parte izquierda del formulario */}
            <div className={`w-full lg:w-1/2 bg-white text-black p-10 flex flex-col justify-center gap-8 
              ${error ? "lg:gap-5" : "lg:gap-10"}`}>
              <h2 className="pl-1 pb-2 text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">
                Iniciar Sesión
              </h2>
              {error && <AlertDestructive description={error} />}
              <Input type="email" id="email" label="Correo Electrónico"
                placeholder="Ingresa tu correo"
                error={errors.email?.message as string | undefined}
                required={true}
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es obligatorio"
                  }
                })}
              />
              <Input type="password" id="password" label="Contraseña"
                placeholder="Ingresa tu contraseña"
                error={errors.password?.message as string | undefined}
                required={true}
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es obligatoria"
                  }
                })}
              />
              <Button className='mt-4' text="Iniciar Sesión" />
            </div>
            {/* Parte derecha del formulario */}
            <LoginSide text='Inicia sesión para continuar' />
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;