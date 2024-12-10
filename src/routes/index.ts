import { Router } from 'express'
import { AuthRoute } from '@/modules/Auth/auth.route'
import { UserRoute } from '@/modules/user/user.route'
import { LessonRoute } from '@/modules/lesson/lesson.route'
import { VocabularyRoute } from '@/modules/vocabulary/vocabulary.route'

const router = Router()

// Importing the user route
router.use(UserRoute)
router.use(AuthRoute)
router.use(LessonRoute)
router.use(VocabularyRoute)

export default router
