# MASTER INSTRUCTIONS: FUNDACIÓN DERMATOLÓGIKA (NEXT.JS 2026)

## 1. PERFIL DEL AGENTE
Eres un Arquitecto Senior Fullstack experto en Next.js (App Router), TypeScript, Prisma, Tailwind CSS, Framer Motion y Magic UI. Tu objetivo es construir una web premium para la "Fundación Dermatológika".

## 2. REGLAS DE ORO (CRÍTICO)
- **Seguridad Antifallo:** No asumas que existen librerías o carpetas. Verifica siempre.
- **Flujo Secuencial:** Prohibido saltar pasos o mezclar tareas (ej: no hagas la base de datos y la UI al mismo tiempo).
- **Diseño Atómico:** Todo componente debe ser modular (Atoms, Molecules, Organisms).

## 3. STACK TÉCNICO MANDATORIO
- **Frontend:** Next.js 14/15 (App Router), React Server Components.
- **Estilos:** Tailwind CSS (Configuración estricta de colores institucionales).
- **UI/Animaciones:** Magic UI + Framer Motion + Lenis (Smooth Scroll).
- **Base de Datos:** MySQL + Prisma ORM.
- **Storage:** Cloudflare R2 (S3 Compatible).
- **Arquitectura:** Carpeta `src/components` dividida en `/atoms`, `/molecules`, `/organisms`.

## 4. REGLAS DE DISEÑO Y CONTENIDO
- **Jerarquía de Títulos:** CUALQUIER sección DEBE seguir esta estructura:
  1. **PRETITULO:**
  2. **TÍTULO:**
  3. **SUBTÍTULO:**
- **Estética:** Limpia, pero humana, animaciones fluidas, principios de animación UI,  (usando Framer Motion)
-  Font Family**: Google Sans exclusively. No serif, italic, or editorial typography
- **Letter Spacing (Kerning)**: Titles use `tracking-tight` (reduced kerning) for clean, modern appearance

### Component Styles
- **Cartoon Components**: Use soft, playful, rounded aesthetics with organic shapes
- **Motion & Hover**: All interactive elements in Header and molecules must include Framer Motion hover effects
  - Example: `whileHover={{ scale: 1.05 }}` with `whileTap={{ scale: 0.98 }}` for buttons and links
  - Navigation items: Smooth scale on hover, spring physics for entrance animations

  - Shape: fully rounded pill
  - Border: `1px` with `6px` bottom border for a subtle raised effect

  - Hover: subtle bottom-origin float only (`translateY` + tiny scale), never a large grow effect
  - Content: text-only by default, no icons unless explicitly requested





Arquitectura de la Landing Page (100% Enfoque Social)
1. Navegación (Header)
   Logo: Fundación Dermatológika Transformando Vidas.

Enlaces: Inicio | Nuestra Esencia | Impacto Social | Sedes.

Call to Action (Botón Primario): Contáctanos.

2. Sección Hero (Primer Impacto)
   Objetivo UX: Comunicar de inmediato el enfoque humanitario y comunitario en la región sur.

PRE-TÍTULO: FUNDACIÓN DERMATOLÓGIKA

TÍTULO: Transformando Vidas en el Sur del Ecuador

SUBTÍTULO: Trabajamos por el bienestar y la inclusión de grupos vulnerables en Loja a través de proyectos sociales, educativos y de desarrollo comunitario.

Botón Primario: Conoce nuestro impacto (Hace scroll a proyectos).

Botón Secundario (Outline): Nuestras Sedes.

3. Sección Nosotros (Misión, Visión y Valores)
   Objetivo UX: Generar confianza mostrando los pilares éticos de la fundación.

PRE-TÍTULO: NUESTRA ESENCIA

TÍTULO: Empatía y Desarrollo Comunitario

SUBTÍTULO: Trabajamos diariamente para reducir las brechas de vulnerabilidad mediante el trabajo social directo en territorio.

Tarjeta 1 (Misión):

Pre-título: PROPÓSITO

Texto: "Ejecutar proyectos comunitarios de desarrollo individual y colectivo de grupos de población vulnerable."

Tarjeta 2 (Visión):

Pre-título: FUTURO

Texto: "Crear oportunidades para las personas en las comunidades populares, urbanas y rurales del Ecuador."

Tarjeta 3 (Valores):

Pre-título: PILARES

Texto: "Compromiso, solidaridad, inclusión, equidad y empatía."

4. Sección de Impacto Social (El Corazón de la Fundación)
   Objetivo UX: Mostrar el trabajo real y tangible. (Aquí usamos las InfoCard).

PRE-TÍTULO: ACCIÓN COMUNITARIA

TÍTULO: Proyectos que Cambian Realidades

SUBTÍTULO: Desde el cuidado de la primera infancia hasta la educación en las aulas, nuestra labor se centra en el desarrollo integral.

Bloque A: Convenios MIES

Pre-título: COOPERACIÓN INSTITUCIONAL

Título: Centros de Desarrollo Infantil (CDI)

Descripción: En calidad de entidad cooperante del MIES, administramos centros donde brindamos cuidado integral, alimentación nutritiva y estimulación temprana para niños y niñas de 1 a 3 años en situación de vulnerabilidad.

Bloque B: Campaña Educativa y Psicológica

Pre-título: DERMATOLOGÍA SOCIAL

Título: Campaña "Kerly": Vitíligo sin Bullying

Descripción: Combatimos el impacto psicológico del vitíligo con nuestra muñeca pedagógica "Kerly". Fomentamos la inclusión, normalizamos la diversidad cutánea desde la infancia y mejoramos la autoestima en los entornos escolares de Loja.

5. Sección de Ubicaciones (Sedes Operativas)
   Objetivo UX: Facilitar la ubicación de los centros administrativos y operativos de la fundación.

PRE-TÍTULO: NUESTRA RED

TÍTULO: Puntos de Atención en Loja

SUBTÍTULO: Centros operativos desde donde coordinamos nuestra labor social y comunitaria.

Tarjeta Matriz:

Nombre: Sede Sur (Matriz)

Dirección: Calles Clodoveo Jaramillo y Virgilio Abarca.

Teléfonos: 095 865 4000 / 098 274 0049.

Tarjeta Centro:

Nombre: Sede Centro

Dirección: Calle Azuay entre Sucre y Bolívar.

Tarjeta San Cayetano:

Nombre: Sede San Cayetano

Dirección: Av. José María Vivar Castro y Américo Vespucio.

Teléfono: 096 411 5750.

6. Footer (Cierre Institucional)
   Pre-título: FUNDACIÓN DERMATOLÓGIKA

Contacto Directo: Correos y números de coordinación.

Legal: © 2026 Fundación Dermatológika Transformando Vidas. Todos los derechos reservados.