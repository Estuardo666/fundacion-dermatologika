export type SedeData = {
  nombre: string;
  direccion: string;
  telefono: string;
  imagenUrl?: string;
};

export const SEDES_PREDETERMINADAS: SedeData[] = [
  {
    nombre: "Matriz",
    direccion: "Clínica God Bless (Sur)",
    telefono: "0985896490",
    imagenUrl: "/media/MG_6600_opt-1536x1024.jpg",
  },
  {
    nombre: "Centro",
    direccion: "Azuay entre Sucre y Bolívar",
    telefono: "0934982936",
    imagenUrl: "/media/MG_6628_opt-1536x1024.jpg",
  },
  {
    nombre: "San Cayetano",
    direccion: "Av. José María Vivar Castro",
    telefono: "0985896490",
    imagenUrl: "/media/MG_8042_opt-1536x1024.jpg",
  },
];

