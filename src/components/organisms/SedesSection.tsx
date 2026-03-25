"use client";

import { motion } from "framer-motion";
import Heading from "@/components/atoms/Heading";
import SedeCard from "@/components/molecules/SedeCard";
import { SEDES_PREDETERMINADAS } from "@/components/molecules/sedesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SedesSection() {
  return (
    <section id="sedes-section" className="bg-[color-mix(in_srgb,var(--institutional-green)_6%,white)] py-16 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div variants={itemVariants}>
          <Heading
            pretitulo="PRESENCIA TERRITORIAL"
            titulo="Nuestras Sedes"
            subtitulo="Atendemos desde puntos estratégicos para acercar atención dermatológica y acompañamiento social a más familias en Loja."
            className="max-w-3xl"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-5 h-px w-24 bg-[linear-gradient(90deg,var(--institutional-green),transparent)]" />

        <motion.div className="mt-10 grid gap-5 md:grid-cols-3" variants={containerVariants}>
          {SEDES_PREDETERMINADAS.map((sede, index) => (
            <motion.div
              key={sede.nombre}
              variants={itemVariants}
              whileHover={{ y: -10, rotate: index === 1 ? 0 : index % 2 === 0 ? -1 : 1 }}
              transition={{ duration: 0.35 }}
            >
              <SedeCard
                nombre={sede.nombre}
                direccion={sede.direccion}
                telefono={sede.telefono}
                imagenUrl={sede.imagenUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
