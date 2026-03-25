import Image from "next/image";
import { cloneElement, isValidElement, type ReactNode } from "react";
import Pretitle from "@/components/atoms/Pretitle";

type ActionProjectCardProps = {
  icon: ReactNode;
  pretitulo: string;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  tintClassName: string;
  imageBlendClassName?: string;
  iconClassName?: string;
  className?: string;
};

export default function ActionProjectCard({
  icon,
  pretitulo,
  titulo,
  descripcion,
  imagenUrl,
  tintClassName,
  imageBlendClassName = "",
  iconClassName = "",
  className = "",
}: ActionProjectCardProps) {
  const resolvedIcon = isValidElement<{ className?: string }>(icon)
    ? cloneElement(icon, {
        className: `${icon.props.className ?? ""} transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--institutional-green)]`,
      })
    : icon;

  return (
    <article
      className={`group relative flex h-full min-h-[39rem] flex-col overflow-hidden rounded-[2.3rem] border border-[color:color-mix(in_srgb,var(--institutional-green)_30%,white)] shadow-[0_18px_44px_rgba(124,192,90,0.08)] card-hover-elegant hover:-translate-y-1.5 hover:border-[color:color-mix(in_srgb,var(--institutional-green)_62%,white)] hover:shadow-[0_26px_56px_rgba(124,192,90,0.13)] ${tintClassName} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.38)_20%,transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.04)_34%,transparent_58%)] opacity-95" />

      <div className="relative flex flex-1 flex-col px-7 pt-7 sm:px-7 sm:pt-8">
        <div className={`text-[var(--semi-dark-gray)] transition-colors duration-300 group-hover:text-[var(--institutional-green)] ${iconClassName}`}>
          {resolvedIcon}
        </div>

        <Pretitle
          size="xs"
          className="mt-4 w-max border-[var(--institutional-green)]/75 bg-white/80 !px-3 !py-1 !tracking-[0.1em] text-[var(--semi-dark-gray)] shadow-[0_3px_10px_rgba(255,255,255,0.45)]"
        >
          {pretitulo}
        </Pretitle>

        <h3 className="mt-4 max-w-[11ch] text-[1.85rem] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--semi-dark-gray)] sm:text-[2.35rem]">
          {titulo}
        </h3>

        <p className="mt-4 max-w-[30ch] text-[1rem] leading-[1.08] text-[var(--semi-dark-gray)]/92 sm:text-[1.02rem]">
          {descripcion}
        </p>
      </div>

      <div className="relative mt-auto w-full overflow-hidden rounded-t-[2rem]">
        <div className="relative mt-4 h-80 w-full overflow-hidden rounded-t-[2rem] sm:h-[22rem]">
          <Image
            src={imagenUrl}
            alt={titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.045]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div
            className={`absolute inset-0 ${imageBlendClassName}`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_34%,rgba(255,255,255,0.02)_58%,rgba(255,255,255,0)_100%)]" />
        </div>
      </div>
    </article>
  );
}