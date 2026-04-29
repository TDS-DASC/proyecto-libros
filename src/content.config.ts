import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    img: z.string(),
    date: z.string(),
    place: z.string(),
    publisher: z.string(),
    pages: z.number(),
    link: z.string().url().optional(),
    lang: z.enum(['es', 'en']),
  })
});

const exercises = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/exercises" }),
  schema: z.object({
    title: z.string(),
    bookSlug: z.string(),
    lang: z.enum(['es', 'en']),
  })
});

export const collections = { books, exercises };
