import { TUser } from './user.interface'
import { User } from './user.model'

// Create a new user in the database
const createUserIntoDatabase = async (payload: TUser) => {
  const result = await User.create(payload)
  const responseData = await User.findById(result._id, { password: 0 })
  return responseData
}

// Get all users from the database
const getAllUsersFromDatabase = async () => {
  const result = await User.find({}, { password: 0 })
  return result
}

export const UserServices = {
  createUserIntoDatabase,
  getAllUsersFromDatabase,
}
