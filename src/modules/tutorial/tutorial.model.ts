// export type TTutorial = {
//     title: string
//     description: string
//     videoUrl: string
//   }

import { model, Schema } from 'mongoose'
import { TTutorial } from './tutorial.interface'

const tutorialSchema = new Schema<TTutorial>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const Tutorial = model<TTutorial>('Tutorial', tutorialSchema)
