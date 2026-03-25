"use client";

import { motion } from "framer-motion";
import Heading from "@/components/atoms/Heading";
import InfoCard from "@/components/molecules/InfoCard";

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

export default function ImpactSection() {
  return (
    <section id="impact-section" className="bg-transparent py-16 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Heading
            pretitulo="ACCIÓN COMUNITARIA"
            titulo="Proyectos Sociales y Campañas que Transforman"
            subtitulo="Nuestra misión se concreta en alianzas institucionales y programas de dermatología social para proteger y dignificar a niñas, niños y familias vulnerables."
            className="max-w-3xl"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-5 h-px w-24 bg-[linear-gradient(90deg,var(--institutional-green),transparent)]" />

        <motion.div className="mt-10 grid gap-6 md:grid-cols-2" variants={containerVariants}>
          <motion.div variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
            <InfoCard
              pretitulo="CONVENIO INSTITUCIONAL"
              titulo="Centros de Desarrollo Infantil (CDI)"
              descripcion="Cuidado integral, alimentación y estimulación temprana para niños de 1 a 3 años."
              imagenUrl="/media/MG_3394-1536x1024.jpg"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
            <InfoCard
              pretitulo="DERMATOLOGÍA SOCIAL"
              titulo="Vitíligo sin Bullying"
              descripcion="Fomentamos la inclusión y el respeto a la diversidad cutánea a través de nuestra muñeca pedagógica."
              imagenUrl="/media/Image_9_opt-768x576.jpg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
