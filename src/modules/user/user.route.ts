import express from 'express'
import { validateRequest } from '@/middlewares/validateRequest'
import {
  userRoleUpdateValidationSchema,
  userValidationSchema,
} from './user.validation'
import { UserControllers } from './user.controller'
import auth from '@/middlewares/auth'
import { USER_ROLE } from './user.constant'

const router = express.Router()

// Route to create a new user
router.post(
  '/auth/register',
  validateRequest(userValidationSchema),
  UserControllers.createUser,
)

// Route to get all users
router.get('/users', auth(USER_ROLE.admin), UserControllers.getAllUsers)

// Route to update user role
router.patch(
  '/user/:id',
  auth(USER_ROLE.admin),
  validateRequest(userRoleUpdateValidationSchema),
  UserControllers.updateUserRole,
)

export const UserRoute = router
