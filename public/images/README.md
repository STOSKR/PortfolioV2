# Imágenes del Portfolio

## Logo de carga

**logo.svg** - Logo principal que aparece en la pantalla de carga (2 segundos)

### Recomendaciones
- SVG vectorial recomendado
- Tamaño: 400x400px o mayor
- Colores que contrasten con fondo lime (#D4FF00)

---

## Imágenes Hero (Principal)

### hero-normal.svg / hero-normal.jpg
Imagen principal que aparece al entrar al sitio (después del loading).
Esta es TU FOTO normal sin efectos.

### hero-hover.svg / hero-hover.jpg  
Imagen que aparece al pasar el cursor sobre la foto principal.
Esta debería ser TU FOTO CON CASCO o algún efecto especial (astronauta, etc).

### Recomendaciones para imágenes hero
- Formato: JPG, PNG, SVG o WebP
- Resolución: Mínimo 1920x1080px (Full HD)
- Proporción: 16:9 o similar
- Peso optimizado: 200-500KB por imagen
- Usar herramientas como TinyPNG para optimizar

### Efecto 3D
Las imágenes tienen efecto parallax al hacer scroll y transformación 3D al pasar el cursor.
Asegúrate de que el sujeto principal esté centrado para mejor efecto.

---

## Cómo reemplazar

1. Coloca tus imágenes en `public/images/`
2. Mantén los nombres de archivo o actualiza las rutas en:
   - `src/components/ui/LoadingScreen.tsx` (línea ~50) para el logo
   - `src/components/ui/HeroImage.tsx` (línea ~11-12) para las imágenes hero

### Ejemplo con tus propias fotos:
```
public/images/
  ├── logo.svg (o logo.png)
  ├── mi-foto.jpg
  └── mi-foto-casco.jpg
```

Luego actualiza en HeroImage.tsx:
```tsx
normalImage = '/images/mi-foto.jpg'
hoverImage = '/images/mi-foto-casco.jpg'
```

