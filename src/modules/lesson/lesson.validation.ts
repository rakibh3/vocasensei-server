// validations/lesson.validation.ts
import { z } from 'zod'

export const lessonCreateValidationSchema = z.object({
  lessonName: z
    .string({ message: 'Lesson name is required' })
    .max(255, { message: 'Lesson name must not exceed 255 characters' }),
  lessonNumber: z
    .number()
    .int({ message: 'Lesson number must be an integer' })
    .positive({ message: 'Lesson number must be positive' }),
})

export const lessonUpdateValidationSchema =
  lessonCreateValidationSchema.partial()
