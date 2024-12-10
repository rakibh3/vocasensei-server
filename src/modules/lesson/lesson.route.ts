import express from 'express'
import { validateRequest } from '@/middlewares/validateRequest'
import { lessonCreateValidationSchema } from './lesson.validation'
import { LessonControllers } from './lesson.controller'

const router = express.Router()

router.post(
  '/lesson',
  validateRequest(lessonCreateValidationSchema),
  LessonControllers.createLesson,
)

export const LessonRoute = router
