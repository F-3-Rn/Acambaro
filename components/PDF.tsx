'use client';
import React from 'react';
import { jsPDF } from "jspdf";
import { useRouter } from 'next/navigation';

interface UserData {
  curp: string;
  nombre: string;
  correo: string;
  telefono: string;
  domicilio: string;
  apoyo: string;
}

interface PDFComponentProps {
  userData: UserData;
}

export function PDF({ userData }: PDFComponentProps) {
  const router = useRouter();
  async function descargarPDF() {
    const doc = new jsPDF();
    // Logo
    const img = new Image();
    img.src = "/images/logo.jpeg";
    doc.addImage(img, "PNG", 15, 20, 30, 30);

    // Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Gobierno Municipal de Acámbaro Gto.", 105, 30, { align: "center" });
    doc.setFontSize(14);
    doc.text("2024-2027", 105, 38, { align: "center" });

    // Subtítulo
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Cita para solicitar un apoyo", 105, 50, { align: "center" });

    // Sección de Datos
    doc.setFillColor(37, 99, 235);
    doc.rect(15, 60, 180, 10, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text("DATOS DE LA PERSONA", 105, 67, { align: "center" });

    // Información personal
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`CURP: ${userData.curp}`, 20, 80);
    doc.text(`Solicitud: ${userData.apoyo}`, 120, 80);
    doc.text(`Nombre: ${userData.nombre}`, 20, 90);
    doc.text(`Número de teléfono: ${userData.telefono}`, 20, 100);
    doc.text(`Correo electrónico: ${userData.correo}`, 20, 110);
    doc.text(`Dirección: ${userData.domicilio}`, 20, 120, { maxWidth: 170 });

    // Guardar PDF
    doc.save("comprobante_registro.pdf");
    router.push("/gracias");
  }

  return (
    <div className='flex justify-center items-center rounded-4xl overflow-hidden pri-sec p-24 mt-8'>
      <div className='flex flex-col justify-center items-center text-white text-5xl  '>
        <img src="/images/logo.jpeg" alt="LogoPresidenciaAcambaro " className="lg:w-44 w-36 mb-8 rounded-xl" />
        <h1 className='text-xl md:text-5xl text-center'>DESCARGA TU COMPROBANTE EN PDF</h1>
        <button
          onClick={descargarPDF}
          className="m-8 text-lg p-6 py-4 rounded-md bg-white text-blue-600 hover:bg-gray-200 transition duration-300"
        >
          Descargar Comprobante en PDF
        </button>
      </div>
    </div>
  );
}

