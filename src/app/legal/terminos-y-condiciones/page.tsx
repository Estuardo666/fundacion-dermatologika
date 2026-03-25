import type { Metadata } from "next";
import LegalDocumentPage from "@/components/organisms/LegalDocumentPage";
import { terms } from "@/app/legal/legal-content";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Fundación Dermatológika Transformando Vidas",
  description:
    "Condiciones generales de uso del sitio institucional de Fundación Dermatológika Transformando Vidas.",
};

export default function TermsPage() {
  return (
    <LegalDocumentPage
      pretitle="SECCIÓN 01"
      title="Términos y condiciones"
      subtitle="Condiciones generales de uso del sitio institucional y del contenido publicado por la fundación."
      paragraphs={terms}
    />
  );
}