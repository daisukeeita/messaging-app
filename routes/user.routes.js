import express from 'express'

import { registerUserInput, loginUserInput } from '../middlewares/user.auth'

import { registerUser, loginUser } from '../controllers/user.controller'

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

export default router
