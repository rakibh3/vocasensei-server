import { model, Schema } from 'mongoose'
import { TLesson } from './lesson.interface'

const lessonSchema = new Schema<TLesson>(
  {
    name: {
      type: String,
      required: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const Lesson = model<TLesson>('Lesson', lessonSchema)
