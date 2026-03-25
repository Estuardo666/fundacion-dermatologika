"use client";

import dynamic from "next/dynamic";

const ObjectivesSection = dynamic(() => import("@/components/organisms/ObjectivesSection"), {
  ssr: false,
  loading: () => <section id="objetivos" className="min-h-[42vh]" aria-hidden="true" />,
});

const AboutProjectsSection = dynamic(() => import("@/components/organisms/AboutProjectsSection"), {
  ssr: false,
  loading: () => <section id="impacto" className="min-h-[56vh]" aria-hidden="true" />,
});

const CdiSection = dynamic(() => import("@/components/organisms/CdiSection"), {
  ssr: false,
  loading: () => <section id="cdi-section" className="min-h-[54vh]" aria-hidden="true" />,
});

const MetricsSection = dynamic(() => import("@/components/organisms/MetricsSection"), {
  ssr: false,
  loading: () => <section className="min-h-[30vh]" aria-hidden="true" />,
});

const LogosSection = dynamic(() => import("@/components/organisms/LogosSection"), {
  ssr: false,
  loading: () => <section className="min-h-[24vh]" aria-hidden="true" />,
});

const Footer = dynamic(() => import("@/components/organisms/Footer"), {
  ssr: false,
  loading: () => <section className="min-h-[44vh]" aria-hidden="true" />,
});

export default function DeferredSections() {
  return (
    <>
      <section>
        <ObjectivesSection />
      </section>

      <section>
        <AboutProjectsSection />
      </section>

      <section>
        <CdiSection />
      </section>

      <section>
        <MetricsSection />
      </section>

      <LogosSection />

      <section>
        <Footer />
      </section>
    </>
  );
}
