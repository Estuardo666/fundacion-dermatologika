# Estructura Atomic Design

- atoms: Componentes basicos e independientes.
- `Button` es el atom compartido para CTAs del sitio; usa las variantes `primary` y `secondary` en lugar de estilos locales para mantener el diseño de pill buttons consistente.
- `LinkButton` es el atom para CTAs con `href` (internos o externos); comparte la misma base visual que `Button`.
- molecules: Composicion de multiples atoms.
- organisms: Secciones complejas compuestas por molecules y atoms.
