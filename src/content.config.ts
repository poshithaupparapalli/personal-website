import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    blurb: z.string().optional(),
    // where it first went up, if it wasn't here
    original: z.string().url().optional(),
    originalName: z.string().optional(),
  }),
});

export const collections = { writings };
