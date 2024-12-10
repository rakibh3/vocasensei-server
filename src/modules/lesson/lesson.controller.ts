import httpStatus from 'http-status'
import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { LessonServices } from './lesson.service'

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

export const LessonControllers = {
  createLesson,
}
