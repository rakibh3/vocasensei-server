import httpStatus from 'http-status'
import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { VocabularyServices } from './vocabulary.service'

const createVocabulary = catchAsync(async (req, res) => {
  const { ...payload } = req.body

  const result = await VocabularyServices.createVocabularyIntoDatabase(payload)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Vocabulary created successfully',
    data: result,
  })
})

export const VocabularyControllers = {
  createVocabulary,
  // getAllVocabularies,
  // getVocabulary,
  // updateVocabulary,
  // deleteVocabulary,
}
