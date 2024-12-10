import { TLesson } from './lesson.interface'
import { Lesson } from './lesson.model'

const createLessonIntoDatabase = async (payload: TLesson) => {
  const lesson = await Lesson.create(payload)
  return lesson
}

export const LessonServices = { createLessonIntoDatabase }
