import { type ReactNode } from "react";
import Pretitle from "@/components/atoms/Pretitle";

type EssenceCardProps = {
  pretitulo: string;
  titulo: string;
  descripcion: string;
  icon: ReactNode;
  className?: string;
  tintClassName?: string;
};

export default function EssenceCard({
  pretitulo,
  titulo,
  descripcion,
  icon,
  className = "",
  tintClassName = "bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(245,250,242,0.92)_100%)]",
}: EssenceCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] border border-[color:color-mix(in_srgb,var(--semi-dark-gray)_14%,white)] ${tintClassName} p-5 shadow-[0_10px_24px_rgba(75,85,99,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--institutional-green)_32%,white)] hover:shadow-[0_18px_36px_rgba(124,192,90,0.14)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26)_0%,transparent_54%)] opacity-70" />

      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <Pretitle size="xs" className="w-max border-white/55 bg-white/80 text-[var(--institutional-green)]">
            {pretitulo}
          </Pretitle>

          <div className="shrink-0 text-[var(--semi-dark-gray)] transition-transform duration-300 group-hover:scale-[1.08] group-hover:text-[var(--institutional-green)]">
            {icon}
          </div>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-[1.36rem] font-semibold leading-[1] tracking-tight text-[var(--semi-dark-gray)] sm:text-[1.5rem]">
            {titulo}
          </h3>

          <p className="text-left text-[0.96rem] leading-[1.58] text-[var(--semi-dark-gray)]/82">
            {descripcion}
          </p>
        </div>
      </div>
    </article>
  );
}