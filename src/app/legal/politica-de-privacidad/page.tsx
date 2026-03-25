import type { Metadata } from "next";
import LegalDocumentPage from "@/components/organisms/LegalDocumentPage";
import { privacy } from "@/app/legal/legal-content";

export const metadata: Metadata = {
  title: "Política de Privacidad | Fundación Dermatológika Transformando Vidas",
  description:
    "Lineamientos de privacidad y tratamiento de datos personales de Fundación Dermatológika Transformando Vidas.",
};

export default function PrivacyPage() {
  return (
    <LegalDocumentPage
      pretitle="SECCIÓN 02"
      title="Política de privacidad"
      subtitle="Lineamientos para el tratamiento responsable de datos personales y comunicaciones institucionales."
      paragraphs={privacy}
    />
  );
}