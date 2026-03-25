import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/atoms/Heading";
import { legalPages } from "@/app/legal/legal-content";

export const metadata: Metadata = {
  title: "Legal | Fundación Dermatológika Transformando Vidas",
  description:
    "Índice legal de Fundación Dermatológika Transformando Vidas con acceso independiente a términos, privacidad y base legal.",
};

export default function LegalPage() {
  return (
    <main className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-4xl">
          <Heading
            pretitulo="INFORMACIÓN LEGAL"
            titulo="Documentos legales institucionales"
            subtitulo="Cada bloque legal ahora vive en una página independiente para mejorar la lectura, la claridad documental y el acceso directo desde el sitio institucional."
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {legalPages.map((page, index) => (
            <article
              key={page.href}
              className="flex h-full flex-col gap-4 border-t border-[color:color-mix(in_srgb,var(--institutional-green)_18%,white)] pt-5"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--institutional-green)]">
                  {page.pretitulo}
                </p>
                <h3 className="text-[1.6rem] font-semibold leading-tight tracking-tight text-[#1c271d]">
                  {page.titulo}
                </h3>
                <p className="max-w-sm text-sm leading-7 text-[#1c271d]/70">{page.subtitulo}</p>
              </div>

              <div className="mt-auto pt-2">
                <Link
                  href={page.href}
                  className={index % 2 === 0
                    ? "inline-flex rounded-full border border-[color:color-mix(in_srgb,#6eb72b_28%,white)] bg-[rgba(110,183,43,0.1)] px-4 py-2 text-sm font-medium text-[#1c271d] transition hover:border-[#6eb72b] hover:bg-[rgba(110,183,43,0.16)]"
                    : "inline-flex rounded-full border border-[color:color-mix(in_srgb,#216a27_24%,white)] bg-[rgba(33,106,39,0.09)] px-4 py-2 text-sm font-medium text-[#1c271d] transition hover:border-[#216a27] hover:bg-[rgba(33,106,39,0.14)]"
                  }
                >
                  Abrir documento
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}