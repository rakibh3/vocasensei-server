import { TUser } from './user.interface'
import { User } from './user.model'

const createUserIntoDatabase = async (payload: TUser) => {
  const result = await User.create(payload)
  const responseData = await User.findById(result._id, { password: 0 })
  return responseData
}

export const UserServices = {
  createUserIntoDatabase,
}
