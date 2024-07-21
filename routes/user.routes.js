import express from 'express'

import { registerUserInput, loginUserInput } from '../middlewares/user.auth.js'

import {
	registerUser,
	loginUser,
	getAllUser
} from '../controllers/user.controller.js'

const router = express.Router()

router.post(
	'/register',
	registerUserInput.checkMissingFields,
	registerUserInput.checkPasswordMatch,
	registerUserInput.checkDuplicateUser,
	registerUserInput.setProfileImage,
	registerUser
)

router.post(
	'/login',
	loginUserInput.checkMissingFields,
	loginUserInput.checkExistingUser,
	loginUserInput.checkPasswordMatch,
	loginUser
)

router.get('/allUsers/:id', getAllUser)

export default router
