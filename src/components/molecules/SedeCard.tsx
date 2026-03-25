"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Button from "@/components/atoms/Button";
import Pretitle from "@/components/atoms/Pretitle";
import { type SedeData, SEDES_PREDETERMINADAS } from "./sedesData";

type SedeCardProps = SedeData & {
  className?: string;
};

export { SEDES_PREDETERMINADAS };

export default function SedeCard({ nombre, direccion, telefono, imagenUrl, className = "" }: SedeCardProps) {
  const handleCall = () => {
    if (typeof window === "undefined") return;
    window.location.href = `tel:${telefono}`;
  };

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--institutional-green)_22%,white)] bg-white shadow-sm ${className}`}
    >
      <div className="relative h-36 w-full bg-[linear-gradient(135deg,#eff9ea_0%,#f7faf9_48%,#edf2f7_100%)]">
        {imagenUrl ? <Image src={imagenUrl} alt={`Fotografía de la sede ${nombre}`} fill className="object-cover" /> : null}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-institutional-green" />
      </div>

      <div className="p-5">
        <Pretitle
          size="sm"
          className="mb-4"
          icon={<MapPin className="h-3.5 w-3.5 text-institutional-green" aria-hidden="true" />}
        >
          Sede
        </Pretitle>

        <h3 className="text-xl font-bold text-semi-dark-gray">{nombre}</h3>
        <p className="mt-2 min-h-12 text-sm leading-relaxed text-soft-gray">{direccion}</p>

        <Button variant="secondary" className="mt-5 w-full" onClick={handleCall} aria-label={`Llamar a sede ${nombre}`}>
          Llamar
        </Button>
      </div>
    </article>
  );
}
