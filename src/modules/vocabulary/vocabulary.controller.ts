import httpStatus from 'http-status'
import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { VocabularyServices } from './vocabulary.service'

// Create a new vocabulary
const createVocabulary = catchAsync(async (req, res) => {
  const { id } = req.user
  const { ...payload } = req.body

  const result = await VocabularyServices.createVocabularyIntoDatabase(
    id,
    payload,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Vocabulary created successfully',
    data: result,
  })
})

// Get all vocabularies
const getAllVocabularies = catchAsync(async (req, res) => {
  const result = await VocabularyServices.getAllVocabulariesFromDatabase()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabularies fetched successfully',
    data: result,
  })
})

// Get a single vocabulary by lesson number
const getVocabulary = catchAsync(async (req, res) => {
  const { lessonNo } = req.params

  const result =
    await VocabularyServices.getVocabularyByLessonNoFromDatabase(lessonNo)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabulary fetched successfully',
    data: result,
  })
})

// Update a single vocabulary by id
const updateVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params
  const { ...payload } = req.body

  const result = await VocabularyServices.updateVocabularyInDatabase(
    id,
    payload,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabulary updated successfully',
    data: result,
  })
})

// Delete a single vocabulary by id
const deleteVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await VocabularyServices.deleteVocabularyFromDatabase(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabulary deleted successfully',
    data: result,
  })
})

export const VocabularyControllers = {
  createVocabulary,
  getAllVocabularies,
  getVocabulary,
  updateVocabulary,
  deleteVocabulary,
}
