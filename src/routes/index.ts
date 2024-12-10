import { Router } from 'express'
import { AuthRoute } from '@/modules/Auth/auth.route'
import { UserRoute } from '@/modules/user/user.route'

const router = Router()

// Importing the user route
router.use(UserRoute)
router.use(AuthRoute)

export default router
