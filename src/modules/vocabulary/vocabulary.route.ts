import { validateRequest } from '@/middlewares/validateRequest'
import express from 'express'
import { vocabularyCreateValidationSchema } from './vocabulary.validation'
import { VocabularyControllers } from './vocabulary.controller'

const router = express.Router()

// Route to create a new vocabulary
router.post(
  '/vocabulary',
  validateRequest(vocabularyCreateValidationSchema),
  VocabularyControllers.createVocabulary,
)

// Route to get all vocabularies
router.get('/vocabulary', VocabularyControllers.getAllVocabularies)

// Route to get a single vocabulary by lesson number
router.get('/vocabulary/:lessonNo', VocabularyControllers.getVocabulary)

export const VocabularyRoute = router
