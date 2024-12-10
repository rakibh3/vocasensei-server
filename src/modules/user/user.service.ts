import { TUser } from './user.interface'
import { User } from './user.model'

// Create a new user in the database
const createUserIntoDatabase = async (payload: TUser) => {
  const result = await User.create(payload)
  const responseData = await User.findById({ _id: result._id }, { password: 0 })
  return responseData
}

// Get all users from the database
const getAllUsersFromDatabase = async () => {
  const result = await User.find({}, { password: 0 })
  return result
}

// Update user role in the database
const updateUserRoleInDatabase = async (id: string, role: string) => {
  const result = await User.findByIdAndUpdate(
    { _id: id },
    { role },
    { new: true, runValidators: true },
  )
  return result
}

export const UserServices = {
  createUserIntoDatabase,
  getAllUsersFromDatabase,
  updateUserRoleInDatabase,
}
