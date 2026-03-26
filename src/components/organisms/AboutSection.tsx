"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake, Sparkles, Users } from "lucide-react";
import EssenceCard from "@/components/molecules/EssenceCard";
import Pretitle from "@/components/atoms/Pretitle";

const galleryImages = [
  { src: "/media/MG_3394-1536x1024.jpg", alt: "Cuidado infantil en CDI" },
  { src: "/media/MG_3432-1536x1024.jpg", alt: "Atención a la primera infancia" },
  { src: "/media/MG_3467-768x512.jpg", alt: "Trabajo comunitario en territorio" },
  { src: "/media/MG_6628_opt-1536x1024.jpg", alt: "Equipo de la Fundación" },
  { src: "/media/MG_8361_opt-1536x1024.jpg", alt: "Proyectos de desarrollo social" },
];

const SLIDE_INTERVAL_MS = 4400;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.88, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % galleryImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="nosotros" className="bg-transparent py-16 sm:py-20 lg:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16">
          <motion.div variants={itemVariants} className="max-w-[42rem]">
            <Pretitle size="md" className="mb-5 min-w-[9.5rem] justify-center">
              QUIÉNES SOMOS
            </Pretitle>
            <h2 className="max-w-[10ch] text-[clamp(2.1rem,4.1vw,3.7rem)] font-semibold leading-[0.94] tracking-tight text-[var(--semi-dark-gray)]">
              Empatía y Desarrollo Comunitario
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-[38rem] lg:pt-2">
            <p className="text-[1.02rem] leading-[1.45] text-[var(--semi-dark-gray)]/88 sm:text-[1.08rem]">
              <span className="font-medium text-[var(--institutional-green)]">Fundación Dermatológika Transformando Vidas</span> fue creada en 2022 como una organización sin fines de lucro nacida de la inquietud de un grupo de personas de la ciudad de Loja que, durante años, brindó apoyo personal a distintas comunidades. Ese impulso por ayudar y colaborar en una dimensión más amplia dio origen a una fundación dedicada a construir una sociedad más justa y equitativa.
            </p>
            <p className="mt-5 text-[1.02rem] leading-[1.45] text-[var(--semi-dark-gray)]/88 sm:text-[1.08rem]">
              Desde entonces, trabajamos directamente en territorios vulnerables del sur del Ecuador mediante proyectos comunitarios de desarrollo colectivo que permiten mejorar la calidad de vida de las personas a través del fortalecimiento de sus habilidades, destrezas, conocimientos y potencialidades.
            </p>
            <p className="mt-5 text-[1.02rem] leading-[1.45] text-[var(--semi-dark-gray)]/82 sm:text-[1.08rem]">
              Nuestra intervención pone especial énfasis en la primera infancia, la inclusión social y el fortalecimiento de comunidades urbanas y rurales a través de procesos sostenidos, cercanos y humanos. Acompañamos a niñas, niños, familias y comunidades con iniciativas que integran cuidado, formación, contención y articulación institucional, siempre con una mirada sensible, práctica y comprometida con el bienestar colectivo.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.26 }} className="h-full">
            <EssenceCard
              pretitulo="PROPÓSITO"
              titulo="Misión"
              descripcion="Ejecutar proyectos comunitarios de desarrollo individual y colectivo de grupos de población vulnerable."
              icon={<HeartHandshake className="h-5 w-5" strokeWidth={2.1} aria-hidden />}
              tintClassName="border-[color:color-mix(in_srgb,#6eb72b_34%,white)] bg-[rgba(110,183,43,0.19)] shadow-[0_12px_28px_rgba(110,183,43,0.12)]"
              className="h-full"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.26 }} className="h-full">
            <EssenceCard
              pretitulo="FUTURO"
              titulo="Visión"
              descripcion="Crear oportunidades para las personas en las comunidades populares, urbanas y rurales del Ecuador."
              icon={<Sparkles className="h-5 w-5" strokeWidth={2.1} aria-hidden />}
              tintClassName="border-[color:color-mix(in_srgb,#216a27_30%,white)] bg-[rgba(33,106,39,0.17)] shadow-[0_12px_28px_rgba(33,106,39,0.12)]"
              className="h-full"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.26 }} className="h-full">
            <EssenceCard
              pretitulo="PILARES"
              titulo="Valores"
              descripcion="Compromiso, solidaridad, inclusión, equidad, empatía."
              icon={<Users className="h-5 w-5" strokeWidth={2.1} aria-hidden />}
              tintClassName="border-[color:color-mix(in_srgb,#6eb72b_34%,white)] bg-[rgba(110,183,43,0.19)] shadow-[0_12px_28px_rgba(110,183,43,0.12)]"
              className="h-full"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-[color:color-mix(in_srgb,var(--semi-dark-gray)_12%,white)] bg-[#f2f2ef] shadow-[0_12px_30px_rgba(75,85,99,0.06)] sm:min-h-[25rem] lg:min-h-[27rem]">
            <AnimatePresence mode="sync">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.045 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.975 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-5 sm:pb-6">
              <div
                className="flex items-center justify-center gap-2 rounded-full bg-white/74 px-3 py-2 shadow-[0_8px_18px_rgba(75,85,99,0.12)] backdrop-blur-sm"
                role="tablist"
                aria-label="Galería de imágenes"
              >
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Ver imagen ${i + 1}: ${img.alt}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-green)]/70 ${
                      i === current
                        ? "w-7 bg-[var(--institutional-green)]"
                        : "w-2.5 bg-[var(--semi-dark-gray)]/22 hover:bg-[var(--semi-dark-gray)]/36"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
