"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LinkButton from "@/components/atoms/LinkButton";
import Pretitle from "@/components/atoms/Pretitle";

import heroImage from "../../../public/media/MG_3377-768x512.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <div id="inicio" className="px-3 pt-3 pb-3 sm:px-5 sm:pt-5 sm:pb-5 lg:px-6 lg:pt-6 lg:pb-6">
      <section
        ref={sectionRef}
        className="relative isolate h-[calc(100dvh-0.75rem)] min-h-[560px] w-full overflow-hidden rounded-[1.7rem] sm:h-[calc(100dvh-1.25rem)] lg:h-[calc(100dvh-1.5rem)]"
      >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.02]"
        style={{ y: backgroundY }}
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,17,0.04)_0%,rgba(18,22,17,0.14)_30%,rgba(18,22,17,0.28)_55%,rgba(17,19,14,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(circle_at_14%_100%,rgba(124,192,90,0.46),transparent_28%),radial-gradient(circle_at_86%_100%,rgba(217,161,58,0.34),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(20,24,14,0.2)_100%)] blur-[12px]" />

      <motion.div
        className="relative z-10 flex h-full w-full items-end justify-center px-6 pb-14 text-center sm:px-8 sm:pb-[4.5rem] lg:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex w-full max-w-[860px] flex-col items-center">
          <motion.div variants={itemVariants}>
            <Pretitle
              tone="light"
              size="md"
              className="!border-white/20 !bg-[rgba(124,192,90,0.5)] !text-white !tracking-[0.06em] shadow-[0_8px_24px_rgba(30,44,10,0.30)]"
            >
              Fundación Dermatológika
            </Pretitle>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-7 max-w-[900px] text-center text-[clamp(2.4rem,4.4vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.22)]"
          >
            Transformando vidas con salud, educación y acción social en el sur del Ecuador
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[780px] text-balance text-center text-base leading-[1.5] font-normal text-white/85 sm:text-[1.1rem]"
          >
            Impulsamos una atención dermatológica humana y programas comunitarios para la infancia,
            las familias vulnerables y la inclusión social desde Loja hacia todo el territorio cercano.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <LinkButton
              href="#sedes-section"
              variant="secondary"
              aria-label="Ir a las sedes y contacto"
              className="px-8 py-3 text-[16px] !text-[var(--semi-dark-gray)] shadow-[0_10px_28px_rgba(18,22,17,0.18)]"
            >
              Contáctanos
            </LinkButton>
          </motion.div>
        </div>
      </motion.div>
      </section>
    </div>
  );
}
