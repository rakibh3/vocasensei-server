import { TVocabulary } from './vocabulary.interface'
import { Vocabulary } from './vocabulary.model'

const createVocabularyIntoDatabase = async (payload: TVocabulary) => {
  const vocabulary = await Vocabulary.create(payload)
  return vocabulary
}

export const VocabularyServices = {
  createVocabularyIntoDatabase,
}
