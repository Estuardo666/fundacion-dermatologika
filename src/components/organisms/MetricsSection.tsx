"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Pretitle from "@/components/atoms/Pretitle";

type MetricItem = {
  eyebrow: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

const metrics: MetricItem[] = [
  {
    eyebrow: "Cobertura infantil",
    label: "Ninos atendidos",
    value: 300,
    suffix: "+",
    description: "Atencion cercana y acompanamiento diario para la primera infancia en situacion de vulnerabilidad.",
  },
  {
    eyebrow: "Presencia territorial",
    label: "Centros activos",
    value: 6,
    description: "Red operativa de centros donde sostenemos cuidado, alimentacion y estimulacion temprana.",
  },
  {
    eyebrow: "Jornada diaria",
    label: "Horas de atencion",
    value: 8,
    description: "Acompanamiento continuo durante la jornada para fortalecer bienestar, rutinas y desarrollo integral.",
  },
];

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
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
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

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;

    const duration = 1250;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold leading-none tracking-[-0.03em] text-[var(--institutional-green)] sm:text-5xl">
      {new Intl.NumberFormat("es-EC").format(displayValue)}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  return (
    <section id="metrics-section" className="bg-white py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:gap-8">
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div>
              <Pretitle tone="light" size="sm">
                Nuestro alcance
              </Pretitle>
                <h2 className="mt-4 max-w-[20ch] text-[clamp(2.1rem,4.1vw,3.7rem)] font-semibold leading-[0.94] tracking-tight text-[var(--semi-dark-gray)]">
                Atencion sostenida que se vive cada dia
              </h2>
            </div>
          </motion.div>

          <motion.div className="grid gap-3 md:grid-cols-3" variants={containerVariants}>
            {metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[color:color-mix(in_srgb,var(--semi-dark-gray)_12%,white)] bg-white p-5 shadow-[0_10px_24px_rgba(75,85,99,0.06)] transition-all duration-300 hover:border-[color:color-mix(in_srgb,var(--institutional-green)_32%,white)] hover:shadow-[0_18px_36px_rgba(124,192,90,0.14)] lg:p-4 xl:p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,192,90,0.12),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col gap-2.5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--institutional-green)]">
                    {metric.eyebrow}
                  </p>
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--semi-dark-gray)]">
                    {metric.label}
                  </p>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <p className="text-[0.92rem] leading-[1.42] text-[color:color-mix(in_srgb,var(--semi-dark-gray)_88%,white)] lg:text-[0.88rem] xl:text-[0.92rem]">
                    {metric.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
