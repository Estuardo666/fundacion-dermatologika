"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import ObjectiveCompactCard from "@/components/molecules/ObjectiveCompactCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const objectives = [
  {
    title: "Mejorar resultados en niñas y niños",
    description:
      "Atenciones integrales desde los entornos de experiencia infantil para fortalecer bienestar y desarrollo temprano.",
  },
  {
    title: "Fortalecer el rol de las familias",
    description:
      "La mediación de madre, padre, educador y familia impulsa prácticas de crianza, cuidado y protección mediante consejería familiar.",
  },
  {
    title: "Articular una red intersectorial",
    description:
      "La Ruta Integral de Atenciones conecta a instituciones del Estado que acompañan la primera infancia y a mujeres gestantes.",
  },
  {
    title: "Comprometer a entidades cooperantes",
    description:
      "La participación pública, privada y social mejora la calidad de los servicios CDI con enfoque de protección integral.",
  },
  {
    title: "Activar a familias y comunidad",
    description:
      "La gestión CDI se fortalece con apoyo comunitario, cumplimiento de la ruta de atención y promoción sostenida de derechos.",
  },
];

const keyPoints = [
  "Buen comienzo en la vida.",
  "Atención diaria y consejería familiar.",
  "Protección integral de niñas y niños de 1 a 3 años.",
];

export default function ObjectivesSection() {
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(false);

  useEffect(() => {
    if (!isObjectivesOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsObjectivesOpen(false);
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isObjectivesOpen]);

  return (
    <>
      <section
        id="objetivos"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#216a27_0%,#2b7b30_36%,#6eb72b_100%)] py-16 sm:py-20 lg:py-24"
      >
        <motion.div
          className="mx-auto max-w-7xl px-6 sm:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#d8efb8]/20 blur-3xl" />
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.12fr)] lg:gap-12">
            <motion.div variants={itemVariants} className="max-w-[35rem] lg:pt-8">
              <Heading
                pretitulo="NUESTROS OBJETIVOS"
                titulo="Desarrollo infantil integral"
                subtitulo="Promover el buen comienzo en la vida de las niñas y niños como base y garantía para un buen desarrollo y despliegue de todas sus capacidades y potencialidades durante toda la vida a través de la atención diaria y la consejería familiar a niñas y niños de 1 a 3 años de edad."
                pretituloTone="dark"
                className="max-w-[34rem] [&_h2]:max-w-[10ch] [&_h2]:text-white [&_p:last-child]:mt-5 [&_p:last-child]:max-w-[33rem] [&_p:last-child]:text-white/82"
              />

              <div className="mt-7 max-w-[33rem] space-y-5">
                <p className="text-[1.02rem] leading-[1.62] text-white/84 sm:text-[1.08rem]">
                  Promovemos la <strong className="font-semibold text-white">protección integral</strong> de niñas y niños de 1 a 3 años mediante una ruta de atención diaria, acompañamiento familiar y articulación intersectorial.
                </p>

                <Button
                  variant="secondary"
                  className="border-white/28 bg-white text-[#216a27] hover:border-white/34 hover:bg-[#eef7e3] hover:text-[#1c271d]"
                  onClick={() => setIsObjectivesOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={isObjectivesOpen}
                >
                  Ver objetivos
                </Button>

                <div className="rounded-[1.75rem] border border-white/18 bg-white/10 p-5 shadow-[0_18px_40px_rgba(16,55,22,0.14)] backdrop-blur-md">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#eaf5dc] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#216a27] shadow-[0_8px_20px_rgba(16,55,22,0.12)]">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={2.1} aria-hidden="true" />
                    Enfoques clave
                  </div>

                  <ul className="space-y-3">
                    {keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[1rem] leading-[1.6] text-white/90 sm:text-[1.04rem]">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d8efb8] shadow-[0_0_0_5px_rgba(216,239,184,0.16)]" />
                        <span className="font-medium text-white">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:pt-6">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/18 bg-white/8 shadow-[0_28px_60px_rgba(16,55,22,0.2)]">
                <div className="relative aspect-[5/6] sm:aspect-[16/11] lg:aspect-[4/5]">
                  <Image
                    src="/media/MG_3394-1536x1024.jpg"
                    alt="Niñas y niños participando en una actividad comunitaria de desarrollo infantil."
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,32,12,0.02)_0%,rgba(10,32,12,0.14)_58%,rgba(10,32,12,0.54)_100%)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isObjectivesOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1f0f]/60 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsObjectivesOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="objectives-dialog-title"
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#f8fbf4] p-6 shadow-[0_30px_80px_rgba(5,24,9,0.28)] sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(110,183,43,0.16)_0%,rgba(110,183,43,0)_100%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#6eb72b]">
                    Objetivos de la Fundacion
                  </p>
                  <h3 id="objectives-dialog-title" className="mt-3 text-[clamp(1.9rem,3.5vw,3rem)] font-semibold leading-[0.96] tracking-tight text-[#1c271d]">
                    Ruta de acompanamiento y proteccion integral
                  </h3>
                  <p className="mt-3 max-w-xl text-[1rem] leading-[1.65] text-[#4b544d] sm:text-[1.04rem]">
                    Estos objetivos articulan la atencion diaria, el trabajo con familias y la red institucional que acompana a la primera infancia.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsObjectivesOpen(false)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbe9cc] bg-white text-[#216a27] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9dfb3] hover:bg-[#f2f8e9]"
                  aria-label="Cerrar objetivos"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {objectives.map((objective, index) => (
                  <motion.div key={objective.title} variants={itemVariants}>
                    <ObjectiveCompactCard
                      index={index + 1}
                      title={objective.title}
                      description={objective.description}
                    >
                      {objective.description}
                    </ObjectiveCompactCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}