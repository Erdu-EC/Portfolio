import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        links: z.object({
            demo: z.url().optional(),
            source: z.url().optional(),
        }).default({}),
        featured: z.boolean().default(false),
        aiGenerated: z.boolean().default(false),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };
