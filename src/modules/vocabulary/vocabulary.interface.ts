import { Types } from 'mongoose'

export type TVocabulary = {
  word: string
  pronunciation: string
  meaning: string
  whenToSay: string
  lessonNo: number
  adminEmail: Types.ObjectId
}
