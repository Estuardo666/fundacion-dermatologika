import type { Metadata } from "next";
import LegalDocumentPage from "@/components/organisms/LegalDocumentPage";
import { legalBasis } from "@/app/legal/legal-content";

export const metadata: Metadata = {
  title: "Base Legal | Fundación Dermatológika Transformando Vidas",
  description:
    "Marco constitucional, normativo y técnico que respalda la labor de Fundación Dermatológika Transformando Vidas.",
};

export default function LegalBasisPage() {
  return (
    <LegalDocumentPage
      pretitle="SECCIÓN 03"
      title="Base legal"
      subtitle="Marco constitucional, normativo y técnico que respalda la labor social y comunitaria de la fundación."
      paragraphs={legalBasis}
    />
  );
}