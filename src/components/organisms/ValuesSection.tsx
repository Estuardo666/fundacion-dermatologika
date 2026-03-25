"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const marqueeSequence = [
  { label: "Compromiso", kind: "text" },
  { label: "shape-square", kind: "square" },
  { label: "Solidaridad", kind: "text" },
  { label: "shape-circle", kind: "circle" },
  { label: "Inclusión", kind: "text" },
  { label: "shape-triangle", kind: "triangle" },
  { label: "Equidad", kind: "text" },
  { label: "shape-square-2", kind: "square" },
  { label: "Empatía", kind: "text" },
  { label: "shape-circle-2", kind: "circle" },
] as const;

const marqueeItems = [...marqueeSequence, ...marqueeSequence];

const containerVariants = {
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

function RoundedTriangleImage({ src }: { src: string }) {
  return (
    <svg viewBox="0 0 220 200" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <clipPath id="values-rounded-triangle" clipPathUnits="userSpaceOnUse">
          <path d="M110 18C117 18 124 22 128 29L194 145C203 160 192 178 175 178H45C28 178 17 160 26 145L92 29C96 22 103 18 110 18Z" />
        </clipPath>
      </defs>
      <image href={src} width="220" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#values-rounded-triangle)" />
    </svg>
  );
}

export default function ValuesSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#fbfbf7_0%,#f2f8ec_100%)] py-14 sm:py-16">
      <motion.div
        className="mx-auto max-w-none"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="overflow-hidden">
          <div className="values-marquee-track flex w-max items-center gap-10 px-6 sm:gap-14 sm:px-8 lg:gap-16">
            {marqueeItems.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center gap-10 sm:gap-14 lg:gap-16">
                {item.kind === "text" ? (
                  <span className="min-w-max text-5xl font-semibold leading-none tracking-[-0.04em] text-[var(--institutional-green)] sm:text-6xl lg:text-7xl">
                    {item.label}
                  </span>
                ) : item.kind === "square" ? (
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.7rem] sm:h-36 sm:w-36">
                    <Image src="/media/MG_5947_opt-768x512.jpg" alt="Valor institucional" fill className="object-cover" />
                  </div>
                ) : (
                  item.kind === "circle" ? (
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36">
                      <Image src="/media/MG_3432-1536x1024.jpg" alt="Valor institucional" fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-28 w-32 shrink-0 sm:h-36 sm:w-40">
                      <RoundedTriangleImage src="/media/MG_3478-1536x1024.jpg" />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}