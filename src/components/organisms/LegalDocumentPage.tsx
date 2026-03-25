import Link from "next/link";
import Heading from "@/components/atoms/Heading";
import Pretitle from "@/components/atoms/Pretitle";
import { legalContact } from "@/app/legal/legal-content";

type LegalDocumentPageProps = {
  pretitle: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
};

export default function LegalDocumentPage({
  pretitle,
  title,
  subtitle,
  paragraphs,
}: LegalDocumentPageProps) {
  return (
    <main className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="max-w-4xl">
          <Heading pretitulo={pretitle} titulo={title} subtitulo={subtitle} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/legal"
            className="rounded-full border border-[color:color-mix(in_srgb,var(--institutional-green)_22%,white)] bg-white px-4 py-2 text-sm font-medium text-[#1c271d] transition hover:border-[#6eb72b] hover:bg-[rgba(110,183,43,0.08)]"
          >
            Ver índice legal
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[color:color-mix(in_srgb,#216a27_20%,white)] bg-white px-4 py-2 text-sm font-medium text-[#1c271d] transition hover:border-[#216a27] hover:bg-[rgba(33,106,39,0.08)]"
          >
            Volver al inicio
          </Link>
        </div>

        <section className="mt-10 border-t border-[color:color-mix(in_srgb,var(--institutional-green)_14%,white)] pt-8">
          <div className="space-y-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-left text-[1rem] leading-[1.85] text-[#1c271d]/84 sm:text-[1.03rem]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[color:color-mix(in_srgb,#216a27_14%,white)] pt-8">
          <Pretitle size="sm" className="w-max bg-[rgba(110,183,43,0.08)] text-[#216a27]">
            CONTACTO INSTITUCIONAL
          </Pretitle>
          <div className="mt-5 grid gap-4 text-left text-[1rem] leading-[1.75] text-[#1c271d] sm:grid-cols-3">
            <p>{legalContact.address}</p>
            <p>{legalContact.phone}</p>
            <p>{legalContact.email}</p>
          </div>
        </section>
      </div>
    </main>
  );
}