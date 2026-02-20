# Portfolio Profesional - Guía de Desarrollo

## Visión General
Construir un portfolio profesional moderno, rápido y mantenible utilizando **Astro** como framework principal, siguiendo principios de código limpio y arquitectura sólida.

---

## Stack Tecnológico

### Core
- **Astro 4.x** - Framework principal (SSG/SSR híbrido)
- **TypeScript** - Type safety y mejor DX
- **TailwindCSS** - Estilizado utility-first

### Complementarios
- **React** (opcional) - Para componentes interactivos específicos
- **Zod** - Validación de schemas y tipos
- **prettier + eslint** - Formateo y linting consistente

---

## Principios de Código Limpio (OBLIGATORIOS)

### 1. **Single Responsibility Principle (SRP)**
- Cada componente debe tener una única responsabilidad
- Funciones pequeñas y enfocadas (máx. 20-30 líneas)
- Separar lógica de presentación

### 2. **Don't Repeat Yourself (DRY)**
- Crear utilidades reutilizables para lógica común
- Componentes base para patrones repetidos
- Usar configuración centralizada

### 3. **Nombres Descriptivos**
```typescript
// ❌ MAL
const d = new Date();
function get() {}
const arr = [];

// ✅ BIEN
const currentDate = new Date();
function getUserProjects() {}
const projectsList = [];
```

### 4. **Funciones Puras**
- Preferir funciones sin efectos secundarios
- Evitar mutaciones directas
- Retornar nuevos valores en lugar de modificar

### 5. **Composición sobre Herencia**
- Usar composición de componentes
- Hooks/composables para lógica reutilizable

### 6. **KISS (Keep It Simple, Stupid)**
- Evitar sobre-ingeniería
- La solución más simple es generalmente la mejor
- Código legible sobre código "clever"
- Si algo se puede hacer en 5 líneas en lugar de 20, hazlo

### 7. **YAGNI (You Aren't Gonna Need It)**
- No implementar funcionalidad hasta que sea necesaria
- Evitar abstracciones prematuras
- Construir solo lo que se necesita ahora

---

## Reglas de Estilo y Desarrollo

### **NO usar Emojis**
- NUNCA usar emojis en código, comentarios, commits o documentación del código
- Mantener un estilo profesional y limpio
- Los emojis están prohibidos en todo el proyecto

### **Comentarios Mínimos y Necesarios**
```typescript
// ❌ MAL - Comentarios obvios
const total = price + tax; // Suma el precio y el impuesto
let i = 0; // Inicializa contador

// ✅ BIEN - Solo comentar lo no obvio
const total = price + tax;

// Aplicamos descuento escalonado según política fiscal 2024
const discount = calculateTieredDiscount(total, customerTier);

// ❌ MAL - Comentar el "qué"
function getUserById(id: string) {
  // Busca el usuario por ID
  return users.find(user => user.id === id);
}

// ✅ BIEN - Comentar el "por qué" cuando no es obvio
function getUserById(id: string) {
  // Usamos find en lugar de filter por performance en listas grandes
  return users.find(user => user.id === id);
}
```

### **Desarrollo que Parezca Humano**
- Código limpio y natural, no excesivamente abstracto
- Evitar patrones complejos innecesarios
- Preferir claridad sobre demostración de habilidades técnicas
- El código debe ser entendible por cualquier desarrollador
- No usar bibliotecas o patrones solo porque "están de moda"

### **Simplicidad y Practicidad**
- Una función de 10 líneas clara es mejor que 3 archivos de abstracción
- Si no tiene un propósito claro y necesario, no lo agregues
- Refactorizar cuando hay duplicación real, no "posible duplicación futura"
- El código debe resolver problemas reales, no imaginarios

---

## Estructura del Proyecto

```
portfolio-v2/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/          # Componentes base (Button, Card, etc.)
│   │   ├── layout/          # Layout components (Header, Footer, etc.)
│   │   ├── sections/        # Secciones de página (Hero, Projects, etc.)
│   │   └── ui/              # Componentes UI específicos
│   │
│   ├── layouts/             # Layouts de Astro
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── pages/               # Rutas del sitio (file-based routing)
│   │   ├── index.astro      # Página principal
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contact.astro
│   │
│   ├── content/             # Content Collections (Astro)
│   │   ├── config.ts        # Schema definitions con Zod
│   │   ├── projects/        # Markdown/MDX de proyectos
│   │   └── blog/            # Opcional: Blog posts
│   │
│   ├── lib/                 # Lógica de negocio y utilidades
│   │   ├── utils/           # Funciones helper
│   │   ├── constants/       # Constantes de la app
│   │   └── schemas/         # Zod schemas
│   │
│   ├── styles/              # Estilos globales
│   │   ├── global.css
│   │   └── utilities.css
│   │
│   ├── types/               # Definiciones de tipos TypeScript
│   │   └── index.ts
│   │
│   └── config/              # Configuración de la app
│       └── site.config.ts   # Metadata, SEO, social links
│
├── public/                  # Assets estáticos
│   ├── images/
│   ├── fonts/
│   └── favicon.svg
│
├── .vscode/                 # Configuración de VS Code
│   └── settings.json
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── .prettierrc
├── .eslintrc.cjs
└── package.json
```

---

## Reglas de Nomenclatura

### Archivos
- **Componentes Astro**: `PascalCase.astro` (ej: `HeroSection.astro`)
- **Componentes React**: `PascalCase.tsx` (ej: `ContactForm.tsx`)
- **Utilidades**: `camelCase.ts` (ej: `formatDate.ts`)
- **Tipos**: `PascalCase.types.ts` (ej: `Project.types.ts`)
- **Constantes**: `SCREAMING_SNAKE_CASE.ts` o `camelCase.ts`

### Variables y Funciones
```typescript
// Constantes
const MAX_PROJECTS_PER_PAGE = 9;
const API_BASE_URL = "https://api.example.com";

// Variables
const userProjects = [];
const isLoading = false;

// Funciones
function getUserProjects() {}
function formatProjectDate() {}
const handleSubmit = () => {};

// Componentes
const ProjectCard = () => {};
```

---

## Convenciones de Componentes

### Estructura de Componente Astro
```astro
---
// 1. Imports
import type { Project } from '@/types';
import Button from '@/components/common/Button.astro';

// 2. Props interface
interface Props {
  title: string;
  projects: Project[];
  className?: string;
}

// 3. Destructuring con defaults
const { 
  title, 
  projects, 
  className = '' 
} = Astro.props;

// 4. Lógica del componente
const featuredProjects = projects.filter(p => p.featured);
---

<!-- 5. Template -->
<section class={`projects-section ${className}`}>
  <h2>{title}</h2>
  <div class="projects-grid">
    {featuredProjects.map(project => (
      <ProjectCard {...project} />
    ))}
  </div>
</section>

<!-- 6. Estilos (scoped) -->
<style>
  .projects-section {
    padding: 2rem;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
</style>
```

### Estructura de Componente React (para interactividad)
```typescript
// ContactForm.tsx
import { useState } from 'react';
import type { FormData } from '@/types';

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Form fields */}
    </form>
  );
}
```

---

## Configuración Inicial

### 1. package.json - Scripts necesarios
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint src --ext .ts,.tsx,.astro",
    "format": "prettier --write src/**/*.{astro,ts,tsx,css}"
  }
}
```

### 2. tsconfig.json - Configuración TypeScript
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/lib/*": ["src/lib/*"],
      "@/types/*": ["src/types/*"]
    },
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### 3. .prettierrc - Formateo consistente
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

### 4. astro.config.mjs - Configuración base
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react() // Solo si necesitas componentes interactivos
  ],
  output: 'static', // o 'hybrid' si necesitas SSR
  site: 'https://tu-dominio.com',
  build: {
    inlineStylesheets: 'auto'
  }
});
```

---

## Gestión de Content Collections

### content/config.ts
```typescript
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    image: z.string(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    technologies: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
```

### Ejemplo de proyecto (content/projects/proyecto-1.md)
```markdown
---
title: "E-commerce Platform"
description: "Una plataforma completa de comercio electrónico con React y Node.js"
publishDate: 2024-01-15
featured: true
tags: ["react", "nodejs", "postgresql"]
image: "/images/projects/ecommerce.jpg"
github: "https://github.com/usuario/proyecto"
demo: "https://demo.ejemplo.com"
technologies: ["React", "Node.js", "PostgreSQL", "Stripe"]
---

# E-commerce Platform

Descripción detallada del proyecto...
```

---

## Patrones y Mejores Prácticas

### 1. **Manejo de Errores**
```typescript
// lib/utils/errorHandler.ts
export class AppError extends Error {
  constructor(
    public message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: unknown): AppError {
  if (error instanceof AppError) return error;
  
  if (error instanceof Error) {
    return new AppError(error.message, 'UNKNOWN_ERROR');
  }
  
  return new AppError('An unexpected error occurred', 'UNKNOWN_ERROR');
}
```

### 2. **Constantes Centralizadas**
```typescript
// lib/constants/site.ts
export const SITE_CONFIG = {
  title: 'Tu Nombre - Portfolio',
  description: 'Portfolio profesional de desarrollo web',
  author: 'Tu Nombre',
  email: 'tu@email.com',
  social: {
    github: 'https://github.com/tuusuario',
    linkedin: 'https://linkedin.com/in/tuusuario',
    twitter: 'https://twitter.com/tuusuario'
  }
} as const;

export const PROJECTS_PER_PAGE = 9;
export const ANIMATION_DURATION = 300;
```

### 3. **Utilidades Reutilizables**
```typescript
// lib/utils/date.ts
export function formatDate(date: Date, locale: string = 'es-ES'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// lib/utils/string.ts
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
```

### 4. **Tipos Compartidos**
```typescript
// types/index.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  featured: boolean;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  technologies: string[];
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  social: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}
```

---

## Performance & SEO

### 1. **Optimización de Imágenes**
```astro
---
import { Image } from 'astro:assets';
import projectImage from '@/assets/project.jpg';
---

<Image
  src={projectImage}
  alt="Descripción del proyecto"
  width={800}
  height={600}
  loading="lazy"
  format="webp"
/>
```

### 2. **SEO Component**
```astro
---
// components/layout/SEO.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

const { title, description, image, type = 'website' } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  
  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {image && <meta property="og:image" content={image} />}
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {image && <meta name="twitter:image" content={image} />}
</head>
```

---

## Testing (Opcional pero Recomendado)

### Configurar Vitest
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
```

### Ejemplo de Test
```typescript
// lib/utils/__tests__/date.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from '../date';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-15');
    const result = formatDate(date);
    expect(result).toBe('15 de enero de 2024');
  });
});
```

---

## Git Workflow

### Commits Semánticos
```
feat: agregar sección de proyectos
fix: corregir responsive en hero
docs: actualizar README
style: formatear código con prettier
refactor: extraer lógica de filtrado a utility
perf: optimizar carga de imágenes
test: agregar tests para utilidades de fecha
```

### Branches
- `main` - Producción
- `develop` - Desarrollo
- `feature/nombre-feature` - Nuevas características
- `fix/nombre-fix` - Correcciones

---

## Buenas Prácticas Adicionales

### 1. **Manejo de Estados y Props**
```typescript
// ❌ MAL - Props sin tipos, valores por defecto inline
function Component(props) {
  const className = props.className || 'default';
  return <div className={className}>{props.children}</div>;
}

// ✅ BIEN - Props tipadas, destructuring con defaults
interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

function Component({ className = 'default', children }: ComponentProps) {
  return <div className={className}>{children}</div>;
}
```

### 2. **Evitar Anidación Profunda**
```typescript
// ❌ MAL - Demasiada anidación
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        if (user.email) {
          return sendEmail(user.email);
        }
      }
    }
  }
  return null;
}

// ✅ BIEN - Early returns
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;
  if (!user.email) return null;
  
  return sendEmail(user.email);
}
```

### 3. **Constantes en lugar de Magic Numbers**
```typescript
// ❌ MAL
if (user.age >= 18 && user.age <= 65) {
  setTimeout(callback, 3000);
}

// ✅ BIEN
const MIN_AGE = 18;
const MAX_AGE = 65;
const NOTIFICATION_DELAY_MS = 3000;

if (user.age >= MIN_AGE && user.age <= MAX_AGE) {
  setTimeout(callback, NOTIFICATION_DELAY_MS);
}
```

### 4. **Extraer Lógica Compleja**
```typescript
// ❌ MAL - Lógica compleja inline
const eligible = users.filter(u => 
  u.age >= 18 && u.isActive && u.subscriptionType === 'premium' && 
  !u.hasUsedTrial && u.createdAt > lastMonth
);

// ✅ BIEN - Función descriptiva
function isEligibleForOffer(user: User): boolean {
  const isAdult = user.age >= 18;
  const isPremium = user.subscriptionType === 'premium';
  const isRecentUser = user.createdAt > lastMonth;
  
  return isAdult && user.isActive && isPremium && 
         !user.hasUsedTrial && isRecentUser;
}

const eligible = users.filter(isEligibleForOffer);
```

### 5. **Manejo Consistente de Async/Await**
```typescript
// ❌ MAL - Mezclar patrones
function getData() {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return processData(data);
    });
}

// ✅ BIEN - Consistente con async/await
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  return processData(data);
}
```

### 6. **Separar Concerns**
```typescript
// ❌ MAL - Todo en un componente
function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser);
  }, []);
  
  const formattedDate = new Date(user?.createdAt).toLocaleDateString();
  
  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Member since {formattedDate}</p>
    </div>
  );
}

// ✅ BIEN - Separar en hooks y utils
function useUser() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);
  
  return user;
}

function UserProfile() {
  const user = useUser();
  const memberSince = formatDate(user?.createdAt);
  
  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Member since {memberSince}</p>
    </div>
  );
}
```

### 7. **Inmutabilidad**
```typescript
// ❌ MAL - Mutación directa
function addProject(projects, newProject) {
  projects.push(newProject);
  return projects;
}

// ✅ BIEN - Inmutabilidad
function addProject(projects, newProject) {
  return [...projects, newProject];
}

// ❌ MAL
user.name = 'New Name';

// ✅ BIEN
const updatedUser = { ...user, name: 'New Name' };
```

---

## Checklist de Calidad

Antes de considerar una feature completa:

- [ ] Código formateado con Prettier
- [ ] Sin errores de TypeScript (`astro check`)
- [ ] Sin errores de ESLint
- [ ] Nombres descriptivos y claros
- [ ] Componentes pequeños y enfocados (SRP)
- [ ] NO hay emojis en ningún lado
- [ ] Comentarios solo cuando agregan valor real
- [ ] Sin código duplicado (DRY aplicado)
- [ ] Sin anidación profunda (max 3 niveles)
- [ ] Tipos definidos para props y datos
- [ ] Código simple y directo (KISS)
- [ ] Sin sobre-ingeniería (YAGNI)
- [ ] Responsive design verificado
- [ ] Imágenes optimizadas
- [ ] SEO implementado
- [ ] Performance aceptable (Lighthouse > 90)
- [ ] Accesibilidad básica (aria-labels, alt text)

---

## Comando de Inicio Rápido

```bash
# Instalar Astro con template
npm create astro@latest -- --template minimal --typescript strict

# Instalar dependencias adicionales
npm install -D tailwindcss @astrojs/tailwind prettier prettier-plugin-astro eslint

# Integrar TailwindCSS
npx astro add tailwind

# Instalar React (solo si es necesario para componentes interactivos)
npx astro add react

# Instalar Zod para validación
npm install zod
```

---

## Principios Fundamentales del Proyecto

### Simplicidad ante todo
- Código que un desarrollador junior pueda entender
- Si parece complicado, probablemente lo sea
- La simplicidad no es falta de sofisticación, es claridad

### Desarrollo natural y humano
- El código debe fluir naturalmente
- Evitar patrones forzados o artificiales
- Pensar en el próximo desarrollador que leerá el código

### Pragmatismo sobre purismo
- Las reglas son guías, no dogmas
- Si romper una regla hace el código más claro, considéralo
- El objetivo es código mantenible, no código perfecto

### Calidad sostenible
- Prefiere progreso constante sobre perfección paralizante
- Refactoriza cuando sea necesario, no "por si acaso"
- El mejor código es el que funciona y se puede entender

---

## Notas Finales

- **Mantén la consistencia**: Una vez que elijas un patrón, úsalo en todo el proyecto
- **Documenta decisiones importantes**: Usa comentarios para explicar "por qué", no "qué"
- **Refactoriza temprano**: No dejes que la deuda técnica se acumule
- **Piensa en el futuro**: Código mantenible es más importante que código "clever"
- **Menos es más**: Si no necesitas una dependencia, no la agregues
- **Sin emojis**: Mantén un estilo profesional en todo momento
- **Código que hable por sí mismo**: Los mejores comentarios son los que no necesitas escribir

---

## Recursos Útiles

- [Astro Docs](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**¡Mantén estos principios en cada cambio y tendrás un portfolio de calidad profesional!**
