import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="p-4 h-16 bg-gray-800 text-white flex justify-between items-center sticky top-0">
            
            <div className="flex">
                <span>Presidencia Municipal Acámbaro Gto.</span>
            </div>
            <div className="flex space-x-4">
                    <Link href={'/login'} className="hover:bg-blue-600 p-2 rounded-md">
                        Iniciar Sesión
                    </Link>
                    <Link href={'/registro'} className="hover:bg-blue-600 p-2 rounded-md">
                        Crear Cuenta
                    </Link>
                    <Link href={'/citas'} className="hover:bg-blue-600 p-2 rounded-md">
                        Agendar Cita
                    </Link>
            </div>
        </div>
    )
}

export default Navbar;
