import express from 'express'
import { TutorialControllers } from './tutorial.controller'

const router = express.Router()

// Route to create a new tutorial
router.post('/tutorial/create', TutorialControllers.createTutorial)

// Route to get all tutorials
router.get('/tutorials', TutorialControllers.getAllTutorials)

// Route to get a single tutorial
router.get('/tutorial/:id', TutorialControllers.getTutorial)

// Route to update an existing tutorial
router.patch('/tutorial/edit/:id', TutorialControllers.updateTutorial)

// Route to delete an existing tutorial
router.delete('/tutorial/delete/:id', TutorialControllers.deleteTutorial)

export const TutorialRoute = router
