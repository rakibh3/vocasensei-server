import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'

import config from '@/config'
import AppError from '@/error/AppError'
import { unauthorizedErrorResponse } from '@/error/unauthorizeError'
import { catchAsync } from '@/utils/catchAsync'
import { TUserRole } from '@/modules/user/user.interface'
import { User } from '@/modules/user/user.model'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    // Check if the token is provided
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'No token provided !')
    }

    //  Check if the token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload

    const { email, role } = decoded

    // checking if the user is exist
    const user = await User.findOne({
      email,
    })

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      res.status(httpStatus.UNAUTHORIZED).json(unauthorizedErrorResponse)
      return
    }

    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
