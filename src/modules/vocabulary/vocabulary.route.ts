import { validateRequest } from '@/middlewares/validateRequest'
import express from 'express'
import { vocabularyCreateValidationSchema } from './vocabulary.validation'
import { VocabularyControllers } from './vocabulary.controller'
import auth from '@/middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

// Route to create a new vocabulary
router.post(
  '/vocabulary/create',
  auth(USER_ROLE.admin),
  validateRequest(vocabularyCreateValidationSchema),
  VocabularyControllers.createVocabulary,
)

// Route to get all vocabularies
router.get('/vocabularies', VocabularyControllers.getAllVocabularies)

// Route to get a single vocabulary by lesson number
router.get('/vocabulary/:lessonNo', VocabularyControllers.getVocabulary)

// Route to update a single vocabulary by id
router.patch('/vocabulary/edit/:id', VocabularyControllers.updateVocabulary)

// Route to delete a single vocabulary by id
router.delete('/vocabulary/delete/:id', VocabularyControllers.deleteVocabulary)

export const VocabularyRoute = router
