# Portfolio Profesional

Portfolio moderno construido con Astro, TypeScript y TailwindCSS siguiendo principios de código limpio.

## Stack Tecnológico

### Framework y Lenguajes
- **Astro 5.17.1** - Framework principal para generación de sitios estáticos
- **TypeScript 5.9.3** - Tipado estático y mejor experiencia de desarrollo
- **React 19.2.4** - Para componentes interactivos con hidratación parcial

### Estilos y Animaciones
- **TailwindCSS 4.2.0** - Framework CSS utility-first
- **GSAP 3.14.2** - Biblioteca de animaciones de alto rendimiento

### Validación y Herramientas
- **Zod 3.25.76** - Validación de schemas y tipos en runtime
- **ESLint 10.0.0** - Linting de código
- **Prettier 3.8.1** - Formateo automático de código

## Estructura del Proyecto

```text
portfolio-v2/
├── public/
│   └── images/              # Imágenes y assets estáticos
├── src/
│   ├── components/
│   │   ├── common/          # Button, Card, Container
│   │   ├── layout/          # Header, Footer, NavHeader, AppWrapper
│   │   ├── sections/        # Hero, About, Projects, Skills, Contact
│   │   └── ui/              # HeroImage, LoadingScreen, ProjectCard
│   ├── config/
│   │   └── site.config.ts   # Configuración del sitio (metadata, SEO, social links)
│   ├── content/
│   │   ├── config.ts        # Schemas de Content Collections con Zod
│   │   └── projects/        # Proyectos en formato Markdown
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout principal del sitio
│   ├── lib/
│   │   ├── constants/       # Constantes de la aplicación
│   │   ├── schemas/         # Schemas de Zod reutilizables
│   │   └── utils/           # Funciones helper (date.ts, string.ts)
│   ├── pages/
│   │   └── index.astro      # Página principal con todas las secciones
│   ├── styles/
│   │   └── global.css       # Estilos globales
│   └── types/
│       └── index.ts         # Definiciones de tipos TypeScript
├── astro.config.mjs         # Configuración de Astro
├── tsconfig.json            # Configuración de TypeScript
└── package.json
```

## Componentes Implementados

### Componentes Comunes
- **Button** - Botón reutilizable con variantes de estilo
- **Card** - Tarjeta base para contenido
- **Container** - Contenedor responsive para secciones

### Layout
- **Header** - Cabecera del sitio
- **Footer** - Pie de página
- **NavHeader** - Navegación principal (React)
- **AppWrapper** - Envoltorio principal de la aplicación (React)

### Secciones de Página
- **HeroSection** - Sección hero principal
- **AboutSection** - Sección sobre mí
- **ProjectsSection** - Galería de proyectos
- **SkillsSection** - Habilidades técnicas
- **ContactSection** - Formulario de contacto

### Componentes UI
- **HeroImage** - Imagen hero con animaciones (React)
- **LoadingScreen** - Pantalla de carga inicial (React)
- **ProjectCard** - Tarjeta individual de proyecto

## Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio con validación de tipos y genera `./dist/` |
| `npm run preview` | Vista previa local del sitio compilado |
| `npm run lint` | Ejecuta ESLint en archivos TypeScript y Astro |
| `npm run format` | Formatea el código con Prettier |
| `npm run astro` | Ejecuta comandos CLI de Astro directamente |

## Configuración del Proyecto

### TypeScript
El proyecto utiliza TypeScript estricto con las siguientes configuraciones:
- Paths aliases configurados (`@/*` apunta a `src/*`)
- Strict mode habilitado
- Integración completa con Astro

### TailwindCSS
TailwindCSS 4.x se ha integrado a través del plugin de Vite para un rendimiento óptimo.

### Content Collections
El sistema de Content Collections está configurado con schemas de Zod para los proyectos:
- Validación de datos en tiempo de compilación
- Type safety automático
- Schemas definidos en `src/content/config.ts`

### React Integration
React se ha configurado para componentes interactivos específicos con hidratación parcial, manteniendo el sitio mayormente estático para mejor rendimiento.

## Desarrollo

### Inicio Rápido
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:4321
```

### Estructura de Desarrollo
1. Los componentes Astro se utilizan para contenido estático
2. Los componentes React se usan solo cuando se necesita interactividad
3. Las animaciones complejas se manejan con GSAP
4. Los datos de proyectos se gestionan mediante Content Collections

## Principios de Código

Este proyecto se ha desarrollado siguiendo principios de código limpio:

### Principios SOLID
- **SRP (Single Responsibility)** - Cada componente tiene una única responsabilidad
- **DRY (Don't Repeat Yourself)** - Código reutilizable sin duplicación innecesaria

### Principios de Simplicidad
- **KISS (Keep It Simple)** - Soluciones simples y directas sobre complejidad innecesaria
- **YAGNI (You Aren't Gonna Need It)** - Solo implementar funcionalidad cuando sea necesaria

### Estándares de Código
- No se utilizan emojis en código, commits ni documentación
- Los comentarios se mantienen al mínimo necesario
- El código se escribe para ser leído y comprendido por humanos
- Se prefiere claridad sobre demostración de habilidades técnicas

## Configuración de Site

La configuración del sitio se encuentra en `src/config/site.config.ts`:
- Metadata del sitio (título, descripción, autor)
- Enlaces de redes sociales
- Constantes de configuración (proyectos por página, duraciones de animación)

## Recursos

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/)
- [React Documentation](https://react.dev)

## Guía de Desarrollo

Para información detallada sobre principios de desarrollo, patrones y mejores prácticas, consulta [claude.md](./claude.md).
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
