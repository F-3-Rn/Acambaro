'use client'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const cerrarSesion = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <div className="p-4 h-16 bg-gray-800 text-white flex justify-center md:justify-between items-center top-0 absolute w-full">
      <div className="flex">
        <span className="hidden lg:block">Presidencia Municipal Acámbaro Gto.</span>
      </div>
      <div className="flex space-x-1 md:space-x-4">

        {!session && (
          <>
            <Link href={'/login'} className="hover:bg-blue-600 p-3 rounded-full transition-all duration-200">
              Iniciar Sesión
            </Link>
            <Link href={'/registro'} className="hover:bg-blue-600 p-3 rounded-full transition-all duration-200">
              Crear Cuenta
            </Link>
          </>
        )}

        {session && (
          <>
            <p className="hidden md:block bg-gray-700 p-3 rounded-lg transition-all duration-200">Bienvenido {session.user?.name}</p>
            <Link href={'/'} className="hover:bg-blue-600 p-3 rounded-full transition-all duration-200">
              Inicio
            </Link>
            <Link href={'/citas'} className="hover:bg-blue-600 p-3 rounded-full transition-all duration-200">
              Agendar Cita
            </Link>
            <Link href="#" onClick={cerrarSesion} className="hover:bg-blue-600 p-3 rounded-full transition-all duration-200">
              Cerrar Sesión
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar;
