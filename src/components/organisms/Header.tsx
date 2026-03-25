"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LinkButton from "@/components/atoms/LinkButton";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quienes Somos" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#impacto", label: "Impacto Social" },
  { href: "#cdi-section", label: "Centros CDI" },
];

const WA_LINK =
  "https://wa.me/593989786490?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20la%20Fundaci%C3%B3n%20Dermatol%C3%B3gika";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function scrollToSection(href: string, onDone?: () => void) {
  const lenis = window.__lenisInstance;
  const target = document.querySelector(href);
  if (!(target instanceof HTMLElement)) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: -80, duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
  onDone?.();
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true, once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/92 shadow-[0_4px_28px_rgba(0,0,0,0.07)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-[padding] duration-500 ${
          scrolled ? "py-3" : "pt-10 pb-5"
        }`}
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-green)] focus-visible:ring-offset-2"
          aria-label="Ir al inicio"
        >
          <div
            className={`relative shrink-0 transition-all duration-500 ${
              scrolled ? "h-10 w-10" : "h-14 w-14"
            }`}
          >
            <Image
              src="/logos/cropped-Asset-1.png"
              alt="Logo Fundación Dermatológika"
              fill
              sizes="(max-width: 640px) 40px, 56px"
              className="object-contain"
              priority
            />
          </div>
          <span
            className={`hidden font-semibold leading-[1.2] tracking-tight transition-all duration-500 sm:block ${
              scrolled
                ? "text-[0.9rem] text-[var(--semi-dark-gray)]"
                : "text-[1.05rem] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]"
            }`}
          >
            Fundación<br />Dermatológika
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative block rounded-full px-4 py-2 text-[1rem] font-medium transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97] ${
                  scrolled
                    ? "text-[var(--semi-dark-gray)] hover:bg-[color:color-mix(in_srgb,var(--institutional-green)_9%,white)] hover:text-[var(--institutional-green)]"
                    : "text-white/92 hover:bg-white/12 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <LinkButton
            href={WA_LINK}
            variant="primary"
            external
            aria-label="Contáctanos por WhatsApp"
            className="gap-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Contáctanos
          </LinkButton>
        </div>

        {/* Hamburger (mobile / tablet) */}
        <button
          className={`relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors duration-300 lg:hidden ${
            scrolled
              ? "hover:bg-[color:color-mix(in_srgb,var(--institutional-green)_9%,white)]"
              : "hover:bg-white/12"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-5 origin-center rounded-full transition-colors duration-500 ${
              scrolled || menuOpen ? "bg-[var(--semi-dark-gray)]" : "bg-white"
            } ${menuOpen ? "translate-y-[5.5px] rotate-45" : "translate-y-0 rotate-0"}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full transition-colors duration-500 ${
              scrolled || menuOpen ? "bg-[var(--semi-dark-gray)]" : "bg-white"
            } ${menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-5 origin-center rounded-full transition-colors duration-500 ${
              scrolled || menuOpen ? "bg-[var(--semi-dark-gray)]" : "bg-white"
            } ${menuOpen ? "-translate-y-[5.5px] -rotate-45" : "translate-y-0 rotate-0"}`}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen ? (
        <div
          className="border-t border-[color:color-mix(in_srgb,var(--institutional-green)_12%,white)] bg-white/96 px-4 pb-6 pt-3 backdrop-blur-md lg:hidden"
        >
            <ul className="flex flex-col gap-0.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href, () => setMenuOpen(false)); }}
                    className="block rounded-2xl px-4 py-3 text-[1rem] font-medium text-[var(--semi-dark-gray)] transition-all duration-200 hover:bg-[color:color-mix(in_srgb,var(--institutional-green)_9%,white)] hover:text-[var(--institutional-green)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <LinkButton
                href={WA_LINK}
                variant="primary"
                external
                className="w-full justify-center gap-2"
                aria-label="Contáctanos por WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Contáctanos por WhatsApp
              </LinkButton>
            </div>
        </div>
      ) : null}
    </header>
  );
}
