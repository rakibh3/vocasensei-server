import { TVocabulary } from './vocabulary.interface'
import { Vocabulary } from './vocabulary.model'

// Create a new vocabulary in the database
const createVocabularyIntoDatabase = async (payload: TVocabulary) => {
  const vocabulary = await Vocabulary.create(payload)
  return vocabulary
}

// Get all vocabularies from the database
const getAllVocabulariesFromDatabase = async () => {
  const vocabularies = await Vocabulary.find().populate('adminEmail', 'email')
  return vocabularies
}

// Get a single vocabulary by lesson number from the database
const getVocabularyByLessonNoFromDatabase = async (lessonNo: string) => {
  const lessonNumber = parseInt(lessonNo)
  const vocabulary = await Vocabulary.find({ lessonNo: lessonNumber }).populate(
    'adminEmail',
    'email',
  )
  return vocabulary
}

export const VocabularyServices = {
  createVocabularyIntoDatabase,
  getAllVocabulariesFromDatabase,
  getVocabularyByLessonNoFromDatabase,
}
