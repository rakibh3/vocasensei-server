import httpStatus from 'http-status'
import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { LessonServices } from './lesson.service'

// Create a new lesson
const createLesson = catchAsync(async (req, res) => {
  const { ...payload } = req.body
  const result = await LessonServices.createLessonIntoDatabase(payload)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Lesson created successfully',
    data: result,
  })
})

// Update an existing lesson
const updateLesson = catchAsync(async (req, res) => {
  const { id } = req.params
  const { ...payload } = req.body
  const result = await LessonServices.updateLessonIntoDatabase(id, payload)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Lesson updated successfully',
    data: result,
  })
})

// Delete an existing lesson
const deleteLesson = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await LessonServices.deleteLessonFromDatabase(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Lesson deleted successfully',
    data: result,
  })
})

export const LessonControllers = {
  createLesson,
  updateLesson,
  deleteLesson,
}
