"use server";
import { prisma } from "@/lib/prisma";

export async function createCita(formData: FormData) {
  await prisma.cita.create({
    data: {
      curp: formData.get("curp") as string,
      nombre: formData.get("nombre") as string,
      correo: formData.get("correo") as string,
      domicilio: formData.get("domicilio") as string,
      telefono: formData.get("telefono") as string,
      apoyo: formData.get("apoyo") as string,  
    },
  });
  console.log("Cita agendada:", formData)
}
