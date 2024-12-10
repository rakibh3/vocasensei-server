import { UserRoute } from '@/modules/user/user.route'
import { Router } from 'express'

const router = Router()

// Importing the user route
router.use(UserRoute)

export default router
