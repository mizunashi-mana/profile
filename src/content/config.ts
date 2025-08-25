import { defineCollection, z } from 'astro:content';

const markdownCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
  }),
});

export const collections = {
  markdown: markdownCollection,
};
