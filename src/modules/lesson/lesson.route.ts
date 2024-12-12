import express from 'express'
import { validateRequest } from '@/middlewares/validateRequest'
import {
  lessonCreateValidationSchema,
  lessonUpdateValidationSchema,
} from './lesson.validation'
import { LessonControllers } from './lesson.controller'
import auth from '@/middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

// Route to create a new lesson
router.post(
  '/lesson/create',
  auth(USER_ROLE.admin),
  validateRequest(lessonCreateValidationSchema),
  LessonControllers.createLesson,
)

// Route to get all lessons
router.get('/lessons', LessonControllers.getAllLessons)

// Route to get a single lesson
router.get(
  '/lesson/:lessonNumber',
  auth(USER_ROLE.admin, USER_ROLE.user),
  LessonControllers.getLesson,
)

// Route to update an existing lesson
router.patch(
  '/lesson/edit/:id',
  auth(USER_ROLE.admin),
  validateRequest(lessonUpdateValidationSchema),
  LessonControllers.updateLesson,
)

// Route to delete an existing lesson
router.delete(
  '/lesson/delete/:id',
  auth(USER_ROLE.admin),
  LessonControllers.deleteLesson,
)

export const LessonRoute = router
