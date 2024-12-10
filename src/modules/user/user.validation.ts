import { z } from 'zod'

export const userValidationSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Name must be alphanumeric'),

  photo: z.string().url('Invalid photo URL').optional(),

  email: z.string().email('Invalid email address').min(1, 'Email is required'),

  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .min(6, { message: 'Password must be at least 8 characters' }),
})

export const userRoleUpdateValidationSchema = z.object({
  role: z
    .enum(['admin', 'user'], {
      required_error: 'Role is required',
      invalid_type_error: 'Role must be a string',
      message: 'Role must be one of "admin", "user"',
    })
    .optional(),
})
