import { TVocabulary } from './vocabulary.interface'
import { Vocabulary } from './vocabulary.model'

// Create a new vocabulary in the database
const createVocabularyIntoDatabase = async (
  id: string,
  payload: TVocabulary,
) => {
  const vocabulary = await Vocabulary.create({ ...payload, adminEmail: id })

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

// Update a single vocabulary in the database
const updateVocabularyInDatabase = async (id: string, payload: TVocabulary) => {
  const vocabulary = await Vocabulary.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  })
  return vocabulary
}

// Delete a single vocabulary from the database
const deleteVocabularyFromDatabase = async (id: string) => {
  const result = await Vocabulary.findByIdAndDelete({ _id: id })
  return result
}

export const VocabularyServices = {
  createVocabularyIntoDatabase,
  getAllVocabulariesFromDatabase,
  getVocabularyByLessonNoFromDatabase,
  updateVocabularyInDatabase,
  deleteVocabularyFromDatabase,
}
