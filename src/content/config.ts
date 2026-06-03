import { allLocales } from '@/config'
import { defineCollection, z } from 'astro:content'

// About Page
const aboutCollection = defineCollection({
  schema: z.object({
    lang: z.enum(['', ...allLocales]).optional().default(''),
  }),
})

// Posts Collection - 新增：显式定义 posts 集合
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    lang: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    category: z.string().optional(),
  }),
})

export const collections = {
  about: aboutCollection,
  posts: postsCollection, // 新增：导出 posts 集合
}
