/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import config from '@/config'
import { generateToken } from '@/helper/generateToken'
import AppError from '@/error/AppError'
import { User } from '../user/user.model'
import { TLoginUser } from './auth.interface'

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExists(payload.email)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  const isPasswordCorrect = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  )

  if (!isPasswordCorrect) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password is incorrect!')
  }

  // Create a token that will be sent to the client
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  }

  const accessToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  )

  const userWithoutPassword = {
    email: user?.email,
    role: user?.role,
  }

  return {
    user: userWithoutPassword,
    accessToken,
  }
}

export const AuthServices = {
  loginUser,
}
