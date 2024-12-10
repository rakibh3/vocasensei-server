import { TLesson } from './lesson.interface'
import { Lesson } from './lesson.model'

// Create a new lesson in the database
const createLessonIntoDatabase = async (payload: TLesson) => {
  const lesson = await Lesson.create(payload)
  return lesson
}

// Get all lessons from the database
const getAllLessonsFromDatabase = async () => {
  const lessons = await Lesson.find()
  return lessons
}

// Get a single lesson from the database
const getLessonFromDatabase = async (lessonNumber: string) => {
  const lesson = await Lesson.findOne({ lessonNumber })
  return lesson
}

// Update an existing lesson in the database
const updateLessonIntoDatabase = async (
  lessonId: string,
  payload: Partial<TLesson>,
) => {
  const lesson = await Lesson.findByIdAndUpdate({ _id: lessonId }, payload, {
    new: true,
    runValidators: true,
  })
  return lesson
}

// Delete an existing lesson from the database
const deleteLessonFromDatabase = async (lessonId: string) => {
  const result = await Lesson.findByIdAndDelete({ _id: lessonId })
  return result
}

export const LessonServices = {
  createLessonIntoDatabase,
  getAllLessonsFromDatabase,
  getLessonFromDatabase,
  updateLessonIntoDatabase,
  deleteLessonFromDatabase,
}
