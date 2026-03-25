import Image from "next/image";
import LinkButton from "@/components/atoms/LinkButton";
import Pretitle from "@/components/atoms/Pretitle";

type CdiCarouselCardProps = {
  pretitulo: string;
  titulo: string;
  descripcion: string;
  detalle: string;
  mapsUrl: string;
  imageUrl: string;
  tintClassName: string;
  imageBlendClassName: string;
  className?: string;
};

export default function CdiCarouselCard({
  pretitulo,
  titulo,
  descripcion,
  detalle,
  mapsUrl,
  imageUrl,
  tintClassName,
  imageBlendClassName,
  className = "",
}: CdiCarouselCardProps) {
  return (
    <article
      className={`group relative flex h-[32.5rem] w-[18.75rem] shrink-0 flex-col overflow-hidden rounded-[2.15rem] border border-[color:color-mix(in_srgb,var(--institutional-green)_28%,white)] shadow-[0_18px_44px_rgba(124,192,90,0.08)] card-hover-elegant hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--institutional-green)_62%,white)] hover:shadow-[0_24px_50px_rgba(124,192,90,0.14)] sm:h-[34rem] sm:w-[20rem] ${tintClassName} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.18)_24%,transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_32%,transparent_62%)] opacity-95" />

      <div className="relative flex flex-1 flex-col px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex items-center justify-between gap-3">
          <Pretitle
            size="xs"
            className="w-max border-[var(--institutional-green)]/75 bg-white/76 !px-3 !py-1 !tracking-[0.1em] text-[var(--semi-dark-gray)] shadow-[0_3px_10px_rgba(255,255,255,0.34)]"
          >
            {pretitulo}
          </Pretitle>

          <LinkButton
            href={mapsUrl}
            external
            aria-label={`Abrir ubicación de ${titulo} en Google Maps`}
            size="icon"
            variant="secondary"
            className="h-7 w-7 border-[color:color-mix(in_srgb,var(--institutional-green)_24%,white)] bg-white/52 text-[var(--semi-dark-gray)] backdrop-blur-sm group-hover:border-[color:color-mix(in_srgb,var(--institutional-green)_58%,white)] group-hover:text-[var(--institutional-green)]"
          >
            <span className="text-[0.78rem] leading-none">↗</span>
          </LinkButton>
        </div>

        <h3 className="mt-4 max-w-[9ch] text-[1.62rem] font-semibold leading-[0.92] tracking-[-0.062em] text-[var(--semi-dark-gray)] sm:text-[2rem]">
          {titulo}
        </h3>

        <p className="mt-3 max-w-[29ch] text-[0.94rem] leading-[1.14] text-[var(--semi-dark-gray)]/88 sm:text-[0.97rem]">
          {descripcion}
        </p>
      </div>

      <div className="relative mt-auto w-full overflow-hidden rounded-t-[2rem]">
        <div className="relative mt-4 h-[14.5rem] w-full overflow-hidden rounded-t-[1.9rem] sm:h-[15.25rem]">
          <Image
            src={imageUrl}
            alt={`Fotografía del CDI ${titulo}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.045]"
            sizes="(max-width: 768px) 86vw, 384px"
          />
          <div className={`absolute inset-0 ${imageBlendClassName}`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_34%,rgba(255,255,255,0)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="max-w-[18ch] text-[0.98rem] font-medium leading-[1.18] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)]">
              {detalle}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}