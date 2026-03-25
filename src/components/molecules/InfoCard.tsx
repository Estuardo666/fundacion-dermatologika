import Image from "next/image";
import Heading from "@/components/atoms/Heading";

type InfoCardProps = {
  pretitulo: string;
  titulo: string;
  descripcion: string;
  imagenUrl?: string;
  className?: string;
};

export default function InfoCard({
  pretitulo,
  titulo,
  descripcion,
  imagenUrl,
  className = "",
}: InfoCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-[color:color-mix(in_srgb,var(--institutional-green)_22%,white)] bg-white hover:bg-gradient-to-br hover:from-white hover:to-[rgba(124,192,90,0.06)] shadow-sm flex flex-col card-hover-elegant group relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(124,192,90,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      <div className="relative h-52 w-full flex-shrink-0 bg-[linear-gradient(135deg,#eff9ea_0%,#f7faf9_48%,#edf2f7_100%)]">
        {imagenUrl ? (
          <Image src={imagenUrl} alt={titulo} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7cc05a33_0%,transparent_48%)]" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--institutional-green)]" />
      </div>

      <div className="flex flex-col flex-grow space-y-3 p-6">
        <Heading pretitulo={pretitulo} titulo={titulo} size="sm" />
        <p className="text-[1rem] leading-[1.75] text-[var(--semi-dark-gray)]/80 text-justify">{descripcion}</p>
      </div>
    </article>
  );
}
