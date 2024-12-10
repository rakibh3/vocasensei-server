import { TLesson } from './lesson.interface'
import { Lesson } from './lesson.model'

// Create a new lesson in the database
const createLessonIntoDatabase = async (payload: TLesson) => {
  const lesson = await Lesson.create(payload)
  return lesson
}

// Update an existing lesson in the database
const updateLessonIntoDatabase = async (
  lessonId: string,
  payload: Partial<TLesson>,
) => {
  const lesson = await Lesson.findByIdAndUpdate(lessonId, payload, {
    new: true,
    runValidators: true,
  })
  return lesson
}

export const LessonServices = {
  createLessonIntoDatabase,
  updateLessonIntoDatabase,
}
