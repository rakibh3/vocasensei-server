import AppError from '@/error/AppError'
import { TTutorial } from './tutorial.interface'
import { Tutorial } from './tutorial.model'
import httpStatus from 'http-status'

// Create a new tutorial in the database
const createTutorialIntoDatabase = async (payload: TTutorial) => {
  const tutorial = await Tutorial.create(payload)
  return tutorial
}

// Get all tutorials from the database
const getAllTutorialsFromDatabase = async () => {
  const tutorials = await Tutorial.find()
  return tutorials
}

// Get a single tutorial from the database
const getTutorialFromDatabase = async (id: string) => {
  const tutorial = await Tutorial.findById({ _id: id })
  if (!tutorial) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tutorial not found')
  }
  return tutorial
}

// Update an existing tutorial in the database
const updateTutorialIntoDatabase = async (id: string, payload: TTutorial) => {
  const tutorial = await Tutorial.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  })

  return tutorial
}

// Delete an existing tutorial from the database
const deleteTutorialFromDatabase = async (id: string) => {
  const tutorial = await Tutorial.findByIdAndDelete({ _id: id })
  return tutorial
}

export const TutorialServices = {
  createTutorialIntoDatabase,
  getAllTutorialsFromDatabase,
  getTutorialFromDatabase,
  updateTutorialIntoDatabase,
  deleteTutorialFromDatabase,
}
