"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Pretitle from "@/components/atoms/Pretitle";
import CdiCarouselCard from "@/components/molecules/CdiCarouselCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

type CdiCard = {
  nombre: string;
  pretitulo: string;
  detalle: string;
  descripcion: string;
  mapsUrl: string;
  imageUrl: string;
  tintClassName: string;
  imageBlendClassName: string;
};

const cards: CdiCard[] = [
  {
    nombre: "Yahuarcuna",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Sierra Nevada | calle Duraznos y Naranjos",
    descripcion: "Espacio de cuidado, juego y acompañamiento cercano para la primera infancia.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sierra+Nevada+calle+Duraznos+y+Naranjos+Loja+Ecuador",
    imageUrl: "/media/MG_3394-1536x1024.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(238,249,234,0.98)_0%,rgba(237,248,232,0.96)_34%,rgba(230,245,220,0.95)_68%,rgba(224,241,211,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(230,245,220,0.98)_0%,rgba(230,245,220,0.92)_14%,rgba(230,245,220,0.74)_28%,rgba(230,245,220,0.42)_42%,rgba(230,245,220,0.18)_58%,rgba(230,245,220,0)_100%)]",
  },
  {
    nombre: "Av. Eduardo Kingman",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Sector Eduardo Kingman",
    descripcion: "Acompañamiento diario con enfoque lúdico, afectivo y comunitario.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eduardo+Kingman+Loja+Ecuador",
    imageUrl: "/media/MG_3432-1536x1024.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(234,247,229,0.98)_0%,rgba(232,245,226,0.96)_34%,rgba(221,240,213,0.95)_68%,rgba(213,236,204,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(221,240,213,0.98)_0%,rgba(221,240,213,0.92)_14%,rgba(221,240,213,0.74)_28%,rgba(221,240,213,0.42)_42%,rgba(221,240,213,0.18)_58%,rgba(221,240,213,0)_100%)]",
  },
  {
    nombre: "Infancia Universitaria",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Pedro Vicente Maldonado y José Caldas",
    descripcion: "Atención que fortalece habilidades tempranas y desarrollo integral.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pedro+Vicente+Maldonado+y+Jose+Caldas+Loja+Ecuador",
    imageUrl: "/media/MG_8042_opt-1536x1024.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(232,246,228,0.98)_0%,rgba(228,243,222,0.96)_34%,rgba(214,236,207,0.95)_68%,rgba(205,231,198,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(214,236,207,0.98)_0%,rgba(214,236,207,0.92)_14%,rgba(214,236,207,0.74)_28%,rgba(214,236,207,0.42)_42%,rgba(214,236,207,0.18)_58%,rgba(214,236,207,0)_100%)]",
  },
  {
    nombre: "El Pedestal",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "España entre Pío Jaramillo y Uruguay",
    descripcion: "Cuidado diario y entorno seguro para niñas y niños en etapa temprana.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Espana+entre+Pio+Jaramillo+y+Uruguay+Loja+Ecuador",
    imageUrl: "/media/MG_6628_opt-1536x1024.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(238,249,234,0.98)_0%,rgba(235,247,230,0.96)_34%,rgba(226,243,218,0.95)_68%,rgba(218,239,209,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(226,243,218,0.98)_0%,rgba(226,243,218,0.92)_14%,rgba(226,243,218,0.74)_28%,rgba(226,243,218,0.42)_42%,rgba(226,243,218,0.18)_58%,rgba(226,243,218,0)_100%)]",
  },
  {
    nombre: "Blanca Ruiz de Godoy",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Cobertura en zona occidental",
    descripcion: "Presencia territorial con atención cercana a familias y comunidad.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blanca+Ruiz+de+Godoy+Loja+Ecuador",
    imageUrl: "/media/MG_6600_opt-1536x1024.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(233,244,231,0.98)_0%,rgba(225,238,224,0.96)_30%,rgba(207,226,211,0.95)_66%,rgba(191,214,197,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(207,226,211,0.98)_0%,rgba(207,226,211,0.92)_14%,rgba(207,226,211,0.74)_28%,rgba(207,226,211,0.42)_42%,rgba(207,226,211,0.18)_58%,rgba(207,226,211,0)_100%)]",
  },
  {
    nombre: "Caritas Felices",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Acompañamiento diario integral",
    descripcion: "Una experiencia cotidiana pensada desde el juego, vínculo y aprendizaje.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Caritas+Felices+Loja+Ecuador",
    imageUrl: "/media/MG_3377-768x512.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(236,243,230,0.98)_0%,rgba(228,237,220,0.96)_30%,rgba(212,225,201,0.95)_66%,rgba(196,213,186,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(212,225,201,0.98)_0%,rgba(212,225,201,0.92)_14%,rgba(212,225,201,0.74)_28%,rgba(212,225,201,0.42)_42%,rgba(212,225,201,0.18)_58%,rgba(212,225,201,0)_100%)]",
  },
  {
    nombre: "8 de Diciembre",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Atención en primera infancia",
    descripcion: "Entorno activo que impulsa hábitos, socialización y desarrollo temprano.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=8+de+Diciembre+Loja+Ecuador",
    imageUrl: "/media/MG_3467-768x512.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(228,241,229,0.98)_0%,rgba(219,235,220,0.96)_30%,rgba(201,223,203,0.95)_66%,rgba(185,211,189,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(201,223,203,0.98)_0%,rgba(201,223,203,0.92)_14%,rgba(201,223,203,0.74)_28%,rgba(201,223,203,0.42)_42%,rgba(201,223,203,0.18)_58%,rgba(201,223,203,0)_100%)]",
  },
  {
    nombre: "Ciudad Alegría",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Entorno seguro y educativo",
    descripcion: "Cuidado integral orientado a fortalecer bienestar y autonomía infantil.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ciudad+Alegria+Loja+Ecuador",
    imageUrl: "/media/MG_3577_opt-768x512.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(244,246,228,0.98)_0%,rgba(239,241,215,0.96)_30%,rgba(228,232,193,0.95)_66%,rgba(218,223,177,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(228,232,193,0.98)_0%,rgba(228,232,193,0.92)_14%,rgba(228,232,193,0.74)_28%,rgba(228,232,193,0.42)_42%,rgba(228,232,193,0.18)_58%,rgba(228,232,193,0)_100%)]",
  },
  {
    nombre: "Ciudad Victoria",
    pretitulo: "Centro de desarrollo infantil",
    detalle: "Apoyo familiar comunitario",
    descripcion: "Trabajo sostenido con familias para construir trayectorias de cuidado.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ciudad+Victoria+Loja+Ecuador",
    imageUrl: "/media/MG_7850_opt-768x512.jpg",
    tintClassName: "bg-[linear-gradient(180deg,rgba(230,243,235,0.98)_0%,rgba(222,237,228,0.96)_30%,rgba(205,226,216,0.95)_66%,rgba(190,214,203,0.96)_100%)]",
    imageBlendClassName: "bg-[linear-gradient(180deg,rgba(205,226,216,0.98)_0%,rgba(205,226,216,0.92)_14%,rgba(205,226,216,0.74)_28%,rgba(205,226,216,0.42)_42%,rgba(205,226,216,0.18)_58%,rgba(205,226,216,0)_100%)]",
  },
];

export default function CdiSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardOffsets, setCardOffsets] = useState<number[]>([]);
  const [dragLimit, setDragLimit] = useState(0);
  const trackX = useMotionValue(0);

  const measureCarousel = useCallback(() => {
    if (!viewportRef.current || !trackRef.current) return;

    const children = Array.from(trackRef.current.children) as HTMLElement[];
    if (!children.length) return;

    const offsets = children.map((child) => child.offsetLeft);
    const maxOffset = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth);

    setCardOffsets(offsets);
    setDragLimit(maxOffset);
    const clampedIndex = Math.min(activeIndex, Math.max(0, offsets.length - 1));
    const targetOffset = Math.min(offsets[clampedIndex] ?? 0, maxOffset);
    trackX.set(-targetOffset);
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  }, [activeIndex, trackX]);

  useEffect(() => {
    measureCarousel();
    window.addEventListener("resize", measureCarousel);
    return () => window.removeEventListener("resize", measureCarousel);
  }, [measureCarousel]);

  const animateToIndex = (index: number) => {
    if (!cardOffsets.length) return;

    const nextIndex = Math.max(0, Math.min(index, cardOffsets.length - 1));
    const targetOffset = Math.min(cardOffsets[nextIndex] ?? 0, dragLimit);
    setActiveIndex(nextIndex);
    animate(trackX, -targetOffset, {
      type: "spring",
      stiffness: 260,
      damping: 32,
    });
  };

  const scrollToCard = (index: number) => {
    animateToIndex(index);
  };

  const handleDragEnd = () => {
    if (!cardOffsets.length) return;

    const currentOffset = Math.abs(trackX.get());
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardOffsets.forEach((offset, index) => {
      const distance = Math.abs(offset - currentOffset);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    animateToIndex(closestIndex);
  };

  return (
    <section id="cdi-section" className="bg-transparent py-18 sm:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div variants={itemVariants} className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Pretitle size="md" className="justify-center">
            PRIMERA INFANCIA
          </Pretitle>
          <h2 className="mt-5 max-w-[15ch] text-[clamp(2.1rem,4.1vw,3.7rem)] font-semibold leading-[0.94] tracking-tight text-[var(--semi-dark-gray)]">
            Centros de Desarrollo Infantil
          </h2>
          <p className="mt-5 max-w-3xl text-center text-[1.02rem] leading-[1.45] text-[var(--semi-dark-gray)]/88 sm:text-[1.08rem]">
            Se promueve la protección integral de las niñas y niños para el pleno ejercicio de sus derechos y responsabilidades, mediante atención diaria, articulación intersectorial y acompañamiento a familias en situación de vulnerabilidad.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-auto mt-5 h-px w-24 bg-[linear-gradient(90deg,var(--institutional-green),transparent)]" />

        <motion.div variants={itemVariants} className="mt-8">
          <div
            ref={viewportRef}
            className="relative overflow-hidden py-3"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(90deg,var(--background)_0%,rgba(248,250,247,0.82)_45%,rgba(248,250,247,0)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(270deg,var(--background)_0%,rgba(248,250,247,0.82)_45%,rgba(248,250,247,0)_100%)]" />
            <button
              type="button"
              aria-label="Ver tarjetas anteriores"
              onClick={() => animateToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--institutional-green)_24%,white)] bg-white/88 text-[var(--semi-dark-gray)] shadow-[0_10px_24px_rgba(124,192,90,0.12)] transition-all duration-300 hover:border-[color:color-mix(in_srgb,var(--institutional-green)_60%,white)] hover:text-[var(--institutional-green)] disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Ver tarjetas siguientes"
              onClick={() => animateToIndex(activeIndex + 1)}
              disabled={activeIndex === cards.length - 1}
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--institutional-green)_24%,white)] bg-white/88 text-[var(--semi-dark-gray)] shadow-[0_10px_24px_rgba(124,192,90,0.12)] transition-all duration-300 hover:border-[color:color-mix(in_srgb,var(--institutional-green)_60%,white)] hover:text-[var(--institutional-green)] disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </button>
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -dragLimit, right: 0 }}
              dragElastic={0.08}
              whileTap={{ cursor: "grabbing" }}
              onDragEnd={handleDragEnd}
              style={{ x: trackX }}
              className="flex cursor-grab gap-5 px-1 pb-2"
            >
              {cards.map((item) => (
                <div key={item.nombre} className="shrink-0">
                  <CdiCarouselCard
                    pretitulo={item.pretitulo}
                    titulo={item.nombre}
                    descripcion={item.descripcion}
                    detalle={item.detalle}
                    mapsUrl={item.mapsUrl}
                    imageUrl={item.imageUrl}
                    tintClassName={item.tintClassName}
                    imageBlendClassName={item.imageBlendClassName}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {cards.map((item, index) => (
              <button
                key={item.nombre}
                type="button"
                aria-label={`Ir a la tarjeta ${index + 1}: ${item.nombre}`}
                aria-pressed={activeIndex === index}
                onClick={() => scrollToCard(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-[var(--institutional-green)]"
                    : "w-2.5 bg-[color:color-mix(in_srgb,var(--institutional-green)_24%,white)] hover:bg-[color:color-mix(in_srgb,var(--institutional-green)_42%,white)]"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}