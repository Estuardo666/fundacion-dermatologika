"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Users } from "lucide-react";
import Pretitle from "@/components/atoms/Pretitle";
import ActionProjectCard from "@/components/molecules/ActionProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutProjectsSection() {
  return (
    <section id="impacto" className="bg-transparent py-16 sm:py-20 lg:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="grid items-start gap-6 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-10"
        >
          <div className="pt-2">
            <Pretitle size="md" className="min-w-[12rem] justify-center sm:min-w-[14rem]">
              ACCIÓN COMUNITARIA
            </Pretitle>
          </div>

          <div className="max-w-3xl lg:justify-self-end">
            <div className="mb-4 h-px w-24 bg-[linear-gradient(90deg,var(--institutional-green),transparent)]" />
            <h2 className="max-w-[12ch] text-[clamp(2.1rem,4.1vw,3.7rem)] font-semibold leading-[0.94] tracking-tight text-[var(--semi-dark-gray)]">
              Transformación a través de la acción
            </h2>
            <p className="mt-5 max-w-2xl text-left text-[1.02rem] leading-[1.45] text-[var(--semi-dark-gray)]/88 sm:text-[1.08rem]">
              Convertimos el compromiso social en proyectos tangibles para la niñez, las familias y la inclusión comunitaria. Cada iniciativa combina acompañamiento cercano, trabajo territorial y acciones sostenidas que fortalecen bienestar, autoestima y oportunidades reales.
            </p>
          </div>
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3" variants={containerVariants}>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.32 }}
            className="h-full"
          >
            <ActionProjectCard
              icon={<HeartHandshake className="h-7 w-7" strokeWidth={2} aria-hidden="true" />}
              pretitulo="PRIMERA INFANCIA"
              titulo="Centros de Desarrollo Infantil (CDI)"
              descripcion="Brindamos cuidado integral, alimentación nutritiva y estimulación temprana a niñas y niños de 1 a 3 años en situación de vulnerabilidad."
              imagenUrl="/media/MG_3394-1536x1024.jpg"
              tintClassName="bg-[linear-gradient(180deg,rgba(238,249,234,0.98)_0%,rgba(239,250,235,0.96)_34%,rgba(232,246,223,0.94)_68%,rgba(227,244,216,0.96)_100%)]"
              imageBlendClassName="bg-[linear-gradient(180deg,rgba(232,246,223,0.96)_0%,rgba(232,246,223,0.9)_12%,rgba(232,246,223,0.72)_24%,rgba(232,246,223,0.42)_38%,rgba(232,246,223,0.18)_52%,rgba(232,246,223,0.06)_66%,rgba(232,246,223,0)_100%)]"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.32 }}
            className="h-full"
          >
            <ActionProjectCard
              icon={<Sparkles className="h-7 w-7" strokeWidth={2} aria-hidden="true" />}
              pretitulo="SALUD COMUNITARIA"
              titulo="Campañas de salud"
              descripcion="Realizamos servicios gratuitos mediante jornadas médicas en diversas especialidades, además de acciones de cuidado visual y dermatológico con entrega de lentes y revisiones de la piel."
              imagenUrl="/media/MG_3432-1536x1024.jpg"
              tintClassName="bg-[linear-gradient(180deg,rgba(243,239,255,0.98)_0%,rgba(243,240,253,0.96)_34%,rgba(238,233,251,0.95)_68%,rgba(233,228,249,0.96)_100%)]"
              imageBlendClassName="bg-[linear-gradient(180deg,rgba(238,233,251,0.97)_0%,rgba(238,233,251,0.92)_12%,rgba(238,233,251,0.76)_24%,rgba(238,233,251,0.46)_38%,rgba(238,233,251,0.2)_52%,rgba(238,233,251,0.08)_66%,rgba(238,233,251,0)_100%)]"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.32 }}
            className="h-full"
          >
            <ActionProjectCard
              icon={<Users className="h-7 w-7" strokeWidth={2} aria-hidden="true" />}
              pretitulo="DIVERSIDAD CUTÁNEA"
              titulo="Inclusión y Diversidad Cutánea"
              descripcion="Visibilizamos condiciones dermatológicas desde un enfoque humano para crear espacios seguros donde niñas y niños se sientan respetados, protegidos y acompañados."
              imagenUrl="/media/MG_3478-1536x1024.jpg"
              tintClassName="bg-[linear-gradient(180deg,rgba(251,246,234,0.98)_0%,rgba(250,244,229,0.96)_34%,rgba(248,239,221,0.95)_68%,rgba(245,235,213,0.96)_100%)]"
              imageBlendClassName="bg-[linear-gradient(180deg,rgba(248,239,221,0.97)_0%,rgba(248,239,221,0.92)_12%,rgba(248,239,221,0.76)_24%,rgba(248,239,221,0.46)_38%,rgba(248,239,221,0.2)_52%,rgba(248,239,221,0.08)_66%,rgba(248,239,221,0)_100%)]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
