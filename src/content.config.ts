import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    canonicalUrl: z.string(),
    ogImage: z.string().optional(),
  }),
});

const symptoms = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/symptoms" }),
  schema: z.object({
    name: z.string(),
    weeks: z.string(),
    normalcy: z.enum(['normal', 'common', 'seek-advice']),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

const food = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/food" }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    status: z.enum(['safe', 'avoid', 'moderate']),
    alternatives: z.string(),
    tip: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog, symptoms, food };
