'use client';
import { useEffect, useState } from "react";
import { PDF } from "@/components/PDF";

export default function PDFPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("citaData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  if (!userData) return <p>TU PDF AUN NO ESTÁ LISTO</p>;

  return <PDF userData={userData} />;
}