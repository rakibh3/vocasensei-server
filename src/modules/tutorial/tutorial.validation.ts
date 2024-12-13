import { z } from 'zod'

export const tutorialCreateSchema = z.object({
  title: z.string({ message: 'Title is required' }),
  description: z.string({ message: 'Description is required' }),
  videoUrl: z
    .string({
      message: 'Video URL is required',
    })
    .url({ message: 'Invalid URL format' }),
})

export const tutorialUpdateSchema = tutorialCreateSchema.partial()
