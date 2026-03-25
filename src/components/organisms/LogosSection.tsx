"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Pretitle from "@/components/atoms/Pretitle";

const entities = [
  { id: 1, logoSrc: "/logos/collaborators/gad-loja.png",  logoAlt: "Logo del Municipio de Loja" },
  { id: 2, logoSrc: "/logos/collaborators/mineduc.png",   logoAlt: "Logo del Ministerio de Educación" },
  { id: 3, logoSrc: "/logos/collaborators/msp.svg",       logoAlt: "Logo del Ministerio de Salud Pública" },
  { id: 4, logoSrc: "/logos/collaborators/cruz-roja.png", logoAlt: "Logo de la Cruz Roja Ecuatoriana" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 16, filter: "blur(6px)" },
  visible:  { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function LogosSection() {
  return (
    <section className="border-y border-[color:color-mix(in_srgb,var(--institutional-green)_10%,white)] bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10 flex justify-center">
          <Pretitle tone="light" size="sm">
            Entidades Colaboradoras
          </Pretitle>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {entities.map((entity) => (
            <motion.div
              key={entity.id}
              variants={itemVariants}
              className="relative h-14 w-36 sm:h-16 sm:w-44"
            >
              <Image
                src={entity.logoSrc}
                alt={entity.logoAlt}
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
