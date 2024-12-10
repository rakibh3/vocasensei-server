import express from 'express'
import { validateRequest } from '@/middlewares/validateRequest'
import { userValidationSchema } from './user.validation'
import { UserControllers } from './user.controller'

const router = express.Router()

// Route to create a new user
router.post(
  '/auth/register',
  validateRequest(userValidationSchema),
  UserControllers.createUser,
)

// Route to get all users
router.get('/users', UserControllers.getAllUsers)

export const UserRoute = router
