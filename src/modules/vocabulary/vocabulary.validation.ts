// import mongoose from 'mongoose'
import * as z from 'zod'

export const vocabularyCreateValidationSchema = z.object({
  word: z
    .string({ message: 'Word is required' })
    .min(1, { message: 'Word must be at least 1 character long' })
    .max(255, { message: 'Word must not exceed 255 characters' }),

  pronunciation: z
    .string({ message: 'Pronunciation is required' })
    .min(1, { message: 'Pronunciation must be at least 1 character long' })
    .max(255, { message: 'Pronunciation must not exceed 255 characters' }),

  meaning: z
    .string({ message: 'Meaning is required' })
    .min(1, { message: 'Meaning must be at least 1 character long' })
    .max(500, { message: 'Meaning must not exceed 500 characters' }),

  whenToSay: z
    .string({ message: 'When to say is required' })
    .min(1, { message: 'When to say must be at least 1 character long' })
    .max(255, { message: 'When to say must not exceed 255 characters' }),

  lessonNo: z
    .number()
    .int({ message: 'Lesson number must be an integer' })
    .positive({ message: 'Lesson number must be a positive number' }),

  // adminEmail: z.string().refine((val) => {
  //   return mongoose.Types.ObjectId.isValid(val)
  // }),
})

export const vocabularyUpdateValidationSchema =
  vocabularyCreateValidationSchema.partial()
