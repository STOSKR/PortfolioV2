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
