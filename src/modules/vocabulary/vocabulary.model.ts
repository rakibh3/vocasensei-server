import { model, Schema } from 'mongoose'
import { TVocabulary } from './vocabulary.interface'

const vocabularySchema = new Schema<TVocabulary>(
  {
    word: {
      type: String,
      required: true,
    },
    pronunciation: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    whenToSay: {
      type: String,
      required: true,
    },
    lessonNo: {
      type: Number,
      required: true,
      ref: 'Lesson',
    },
    adminEmail: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const Vocabulary = model<TVocabulary>('Vocabulary', vocabularySchema)
