import httpStatus from 'http-status'
import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { UserServices } from './user.service'

// Create a new user
const createUser = catchAsync(async (req, res) => {
  const { ...payload } = req.body

  const result = await UserServices.createUserIntoDatabase(payload)

  let message
  if (result?.role === 'user') {
    message = 'User registered successfully'
  } else if (result?.role === 'admin') {
    message = 'Admin registered successfully'
  }

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message,
    data: result,
  })
})

// Get all users
const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDatabase()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users fetched successfully',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getAllUsers,
}
