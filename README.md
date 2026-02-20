# Portfolio Profesional

Portfolio moderno construido con Astro, TypeScript y TailwindCSS siguiendo principios de código limpio.

## Stack Tecnológico

- **Astro 5.x** - Framework principal para SSG
- **TypeScript** - Type safety y mejor DX
- **TailwindCSS** - Estilizado utility-first
- **React** - Para componentes interactivos
- **Zod** - Validación de schemas

## Estructura del Proyecto

```text
/
├── public/                  # Assets estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Componentes base
│   │   ├── layout/         # Componentes de layout
│   │   ├── sections/       # Secciones de página
│   │   └── ui/             # Componentes UI
│   ├── content/            # Content Collections
│   │   ├── config.ts       # Schema definitions
│   │   └── projects/       # Proyectos en Markdown
│   ├── layouts/            # Layouts de Astro
│   ├── lib/                # Utilidades y lógica
│   │   ├── utils/          # Funciones helper
│   │   ├── constants/      # Constantes
│   │   └── schemas/        # Zod schemas
│   ├── pages/              # Rutas (file-based routing)
│   ├── styles/             # Estilos globales
│   ├── types/              # Tipos TypeScript
│   └── config/             # Configuración de la app
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa local de la build de producción |
| `npm run lint` | Ejecuta ESLint en el código |
| `npm run format` | Formatea el código con Prettier |
| `npm run astro` | Ejecuta comandos CLI de Astro |

## Configuración Inicial Completada

- ✅ Astro con TypeScript estricto
- ✅ TailwindCSS configurado
- ✅ React para componentes interactivos
- ✅ Prettier con plugin de Astro
- ✅ ESLint con TypeScript
- ✅ Zod para validación
- ✅ Paths de TypeScript (@/*)
- ✅ Estructura de carpetas profesional
- ✅ Content Collections configuradas
- ✅ Layout base y utilidades

## Desarrollo

1. Instalar dependencias (ya instaladas):
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:4321](http://localhost:4321) en tu navegador

## Principios de Código

Este proyecto sigue principios de código limpio:

- **SRP**: Cada componente tiene una única responsabilidad
- **DRY**: Código reutilizable sin duplicación
- **KISS**: Soluciones simples y directas
- **YAGNI**: Solo implementar lo necesario
- Sin emojis en código/commits
- Comentarios mínimos y necesarios
- Desarrollo natural y humano

Ver [claude.md](./claude.md) para la guía completa de desarrollo.

## Recursos

- [Astro Docs](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS](https://tailwindcss.com/docs)


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
