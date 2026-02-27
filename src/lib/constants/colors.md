# Sistema de Colores del Portfolio

## Paleta de Colores Principal

Todos los colores están definidos en `src/styles/global.css` usando el sistema `@theme` de Tailwind v4.

### Colores Disponibles

```css
--color-primary: #4ADE80        /* Verde principal suave y moderno */
--color-primary-dark: #22C55E   /* Verde oscuro para hover y acentos */
--color-dark: #0A0A0A           /* Negro profundo para fondos */
--color-dark-lighter: #1A1A1A   /* Negro más claro para cards */
--color-accent: #10B981         /* Verde esmeralda para variaciones */
--color-accent-blue: #14B8A6    /* Teal para elementos adicionales */
```

## Uso en Componentes

### Clases de Tailwind

Siempre usa las clases de Tailwind para colores, nunca valores hex directos:

```astro
<!-- ✅ CORRECTO -->
<div class="bg-primary text-white">
<div class="border-primary-dark/20">
<div class="hover:text-primary">

<!-- ❌ INCORRECTO -->
<div class="bg-[#4ADE80] text-white">
<div style="color: #4ADE80">
```

### Clases Disponibles

- **Backgrounds**: `bg-primary`, `bg-primary-dark`, `bg-dark`, `bg-dark-lighter`, `bg-accent`, `bg-accent-blue`
- **Text**: `text-primary`, `text-primary-dark`, `text-accent`, etc.
- **Borders**: `border-primary`, `border-primary-dark`, etc.
- **Con opacidad**: Agrega `/[valor]` → `bg-primary/20`, `border-primary/30`

### Efectos Visuales Personalizados

Clases especiales definidas en global.css:

- `.glow-effect` - Sombra con efecto glow
- `.border-glow` - Borde con efecto glow
- `.text-glow` - Texto con resplandor
- `.grid-pattern` - Patrón de cuadrícula sutil
- `.diagonal-lines` - Líneas diagonales decorativas

## Cambiar la Paleta Completa

Para cambiar todos los colores del sitio:

1. Edita `src/styles/global.css`
2. Modifica los valores en `@theme`
3. Actualiza los valores rgba en las clases personalizadas (glow-effect, grid-pattern, etc.)

**Ejemplo:**

```css
@theme {
  --color-primary: #TU_COLOR_AQUI;
  --color-primary-dark: #TU_COLOR_OSCURO;
  /* ... resto de colores */
}

.glow-effect {
  box-shadow: 0 0 20px rgba(TU_R, TU_G, TU_B, 0.2);
}
```

## Ventajas de Este Sistema

- **Centralizado**: Un solo lugar para cambiar colores
- **Consistente**: Todos los componentes usan las mismas variables
- **Mantenible**: Fácil actualizar la paleta completa
- **Type-safe**: Tailwind autocompleta las clases
- **Optimizado**: Tailwind solo incluye las clases que usas

## Ejemplos de Uso Común

```astro
<!-- Botón primario -->
<button class="bg-primary text-black hover:bg-primary-dark">
  Click aquí
</button>

<!-- Card con borde -->
<div class="bg-dark-lighter border-2 border-primary/20 hover:border-primary">
  Contenido
</div>

<!-- Título con glow -->
<h1 class="text-primary text-glow">
  Mi Portfolio
</h1>

<!-- Gradiente -->
<div class="bg-linear-to-br from-primary to-primary-dark">
  Gradiente
</div>
```

## Colores Heredados (NO USAR)

Los siguientes colores ya no existen en el sistema:

- ~~#7FFF00~~ (chartreuse neón brillante)
- ~~#65A30D~~ (verde lima oscuro)
- ~~#D4FF00~~ (lime original)
- ~~#06B6D4~~ (cyan)
- ~~#EC4899~~ (rosa)

Si encuentras estos en código, reemplázalos con las clases de Tailwind correspondientes.
