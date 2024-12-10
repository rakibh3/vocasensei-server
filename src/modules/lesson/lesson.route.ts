import express from 'express'
import { validateRequest } from '@/middlewares/validateRequest'
import {
  lessonCreateValidationSchema,
  lessonUpdateValidationSchema,
} from './lesson.validation'
import { LessonControllers } from './lesson.controller'

const router = express.Router()

// Route to create a new lesson
router.post(
  '/lesson',
  validateRequest(lessonCreateValidationSchema),
  LessonControllers.createLesson,
)

// Route to get all lessons
router.get('/lesson', LessonControllers.getAllLessons)

// Route to get a single lesson
router.get('/lesson/:lessonNumber', LessonControllers.getLesson)

// Route to update an existing lesson
router.patch(
  '/lesson/:id',
  validateRequest(lessonUpdateValidationSchema),
  LessonControllers.updateLesson,
)

// Route to delete an existing lesson
router.delete('/lesson/:id', LessonControllers.deleteLesson)

export const LessonRoute = router
