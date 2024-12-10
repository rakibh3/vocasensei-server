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

export const VocabularyRoute = router
