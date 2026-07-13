import { defineCollection, z } from 'astro:content';

const clientStories = defineCollection({
  type: 'content',
  schema: z.object({
    displayName: z.string(),
    neighborhood: z.string(),
    category: z.enum([
      'First Home',
      'Growing Family',
      'Selling & Moving On',
      'Downsizing',
      'New to Houston',
    ]),
    quote: z.string(),
    featured: z.boolean().default(false),
    privacy: z.string(),
    greenThumbNote: z.string().optional(),
    image: z.string().nullable().optional(),
  }),
});

const neighborhoods = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    intro: z.string(),
    whoItFits: z.string(),
    lifestyleHighlights: z.array(z.string()),
    silviaNote: z.string(),
    image: z.string().nullable().optional(),
  }),
});

const plantNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  'client-stories': clientStories,
  neighborhoods: neighborhoods,
  'plant-notes': plantNotes,
};
