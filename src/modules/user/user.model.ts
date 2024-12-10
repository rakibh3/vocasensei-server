/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt'
import { model, Schema } from 'mongoose'
import { TUser, UserModel } from './user.interface'
import config from '@/config'

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

// Convert the password to a hash before saving it to the database
userSchema.pre('save', async function (next) {
  const user = this
  const saltRounds = Number(config.bcrypt_salt_rounds)
  user.password = await bcrypt.hash(user.password, saltRounds)
  next()
})

userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

// Check if the user exists
userSchema.statics.isUserExists = async function (email: string) {
  return await User.findOne({ email })
}

// Check if password is matched with the hash stored in the database
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}

export const User = model<TUser, UserModel>('User', userSchema)
