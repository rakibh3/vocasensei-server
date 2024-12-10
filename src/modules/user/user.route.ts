import express from 'express'
import { validateRequest } from '@/middlewares/validateRequest'
import { userValidationSchema } from './user.validation'
import { UserControllers } from './user.controller'

const router = express.Router()

router.post(
  '/auth/register',
  validateRequest(userValidationSchema),
  UserControllers.createUser,
)

export const UserRoute = router
