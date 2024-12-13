import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import httpStatus from 'http-status'
import { TutorialServices } from './tutorial.service'

// Create a new tutorial
const createTutorial = catchAsync(async (req, res) => {
  const { ...payload } = req.body
  const result = await TutorialServices.createTutorialIntoDatabase(payload)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Tutorial created successfully',
    data: result,
  })
})

// Get all tutorials
const getAllTutorials = catchAsync(async (req, res) => {
  const result = await TutorialServices.getAllTutorialsFromDatabase()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Tutorials retrieved successfully',
    data: result,
  })
})

// Get a single tutorial
const getTutorial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TutorialServices.getTutorialFromDatabase(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Tutorial retrieved successfully',
    data: result,
  })
})

// Update an existing tutorial
const updateTutorial = catchAsync(async (req, res) => {
  const { id } = req.params
  const { ...payload } = req.body
  const result = await TutorialServices.updateTutorialIntoDatabase(id, payload)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Tutorial updated successfully',
    data: result,
  })
})

// Delete an existing tutorial
const deleteTutorial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TutorialServices.deleteTutorialFromDatabase(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Tutorial deleted successfully',
    data: result,
  })
})

export const TutorialControllers = {
  createTutorial,
  getAllTutorials,
  getTutorial,
  updateTutorial,
  deleteTutorial,
}
