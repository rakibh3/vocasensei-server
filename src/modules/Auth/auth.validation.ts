import { z } from 'zod'

export const loginValidationSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string({ required_error: 'Password is required' }),
})
