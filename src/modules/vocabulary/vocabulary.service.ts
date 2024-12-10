import { TVocabulary } from './vocabulary.interface'
import { Vocabulary } from './vocabulary.model'

// Create a new vocabulary in the database
const createVocabularyIntoDatabase = async (payload: TVocabulary) => {
  const vocabulary = await Vocabulary.create(payload)
  return vocabulary
}

// Get all vocabularies from the database
const getAllVocabulariesFromDatabase = async () => {
  const vocabularies = await Vocabulary.find()
  return vocabularies
}

export const VocabularyServices = {
  createVocabularyIntoDatabase,
  getAllVocabulariesFromDatabase,
}
