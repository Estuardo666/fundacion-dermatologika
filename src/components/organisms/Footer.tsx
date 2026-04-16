"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
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

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#impacto", label: "Impacto Social" },
];

const legalLinks = [
  { href: "/legal/terminos-y-condiciones", label: "Términos y condiciones" },
  { href: "/legal/politica-de-privacidad", label: "Política de privacidad" },
  { href: "/legal/base-legal", label: "Base legal" },
];

const socialLinks = [
  { href: "https://www.facebook.com/fundaciondermatologika/?locale=es_LA", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/fundaciondermatologika/", label: "Instagram", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#f6f9f1_0%,#eef6e8_100%)] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <motion.div
        className="relative mx-auto max-w-[120rem] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(135deg,#1f5f26_0%,#2f7d2f_45%,#4a9e34_100%)] px-6 py-10 text-white shadow-[0_26px_70px_rgba(33,106,39,0.18)] sm:px-8 lg:px-12 lg:py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-[#d9f0bb]/14 blur-3xl" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[0.82fr_0.98fr_1.05fr] lg:items-start lg:gap-12">
          <motion.div variants={itemVariants} className="flex h-full flex-col justify-between gap-8">
            <div>
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                <Image
                  src="/logos/cropped-Asset-1.png"
                  alt="Logo de Fundación Dermatológika"
                  fill
                  sizes="(min-width: 1024px) 144px, 128px"
                  className="object-contain"
                />
              </div>

              <div className="mt-8 space-y-4 text-white/82">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#d9f0bb]" aria-hidden="true" />
                  <p className="text-[1rem] leading-[1.35] text-white/82">
                    Barrio Daniel Álvarez, Calle Francisco Santander, Loja, Ecuador.
                  </p>
                </div>
                <p className="max-w-[19rem] text-[1rem] leading-[1.65] text-white/78">
                  Salud, educación y acción comunitaria sostenida para la infancia, las familias y los territorios más vulnerables.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-white/68">
              © 2026 Fundación Dermatológika Transformando Vidas. Todos los derechos reservados.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-1 text-white"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.28 }}
          >
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#d9f0bb]">
              Contacto directo
            </p>
            <p className="mt-4 text-[1rem] leading-[1.65] text-white/82 sm:text-[1.04rem]">
              Coordinamos acompañamiento social y atención cercana para cada familia.
            </p>

            <div className="mt-8 space-y-4">
              <motion.a
                href="tel:0985896490"
                className="flex items-center gap-3 text-[1.45rem] font-semibold leading-none tracking-tight text-white transition-colors hover:text-[#d9f0bb] sm:text-[1.6rem]"
                whileHover={{ x: 4 }}
              >
                <Phone className="h-5 w-5 text-[#d9f0bb]" aria-hidden="true" />
                <span>098 589 6490</span>
              </motion.a>
              <motion.a
                href="mailto:info@fundaciondermatologika.org"
                className="flex items-center gap-3 text-[1rem] leading-[1.6] text-white/82 underline decoration-[#d9f0bb] underline-offset-4 transition-colors hover:text-white"
                whileHover={{ x: 4 }}
              >
                <Mail className="h-4.5 w-4.5 shrink-0 text-[#d9f0bb]" aria-hidden="true" />
                <span className="break-all">info@fundaciondermatologika.org</span>
              </motion.a>
              <motion.a
                href="tel:0934982936"
                className="flex items-center gap-3 text-[1rem] leading-[1.6] text-white/82 transition-colors hover:text-white"
                whileHover={{ x: 4 }}
              >
                <Phone className="h-4.5 w-4.5 text-[#d9f0bb]" aria-hidden="true" />
                <span>093 498 2936</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="text-[1.3rem] font-semibold leading-none tracking-tight text-white sm:text-[1.7rem]">
                Enlaces
              </h3>
              <div className="mt-6 grid gap-3 text-[1rem] leading-[1.5] text-white/84">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="w-max transition-colors hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[1.3rem] font-semibold leading-none tracking-tight text-white sm:text-[1.7rem]">
                Legal y redes
              </h3>
              <div className="mt-6 grid gap-3 text-[1rem] leading-[1.5] text-white/84">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/8 text-white transition hover:border-[#d9f0bb] hover:bg-white/14"
                    whileHover={{ y: -4, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}