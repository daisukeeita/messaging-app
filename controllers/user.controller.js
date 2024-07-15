import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'

import User from '../models/user.model.js'

configDotenv()

const registerUser = async (req, res) => {
	try {
		const { fullName, username, password, gender, profilePic } = req.body

		const newUser = new User({
			fullName,
			username,
			password,
			gender,
			profilePic
		})

		if (!newUser) {
			throw new Error('User was not created successfully!')
		} else {
			await newUser.save()

			res.status(201).json({
				message: 'User was created successfully'
			})
		}
	} catch (error) {
		return res.status(500).json({
			message: 'Error in user registration or Internal Server Error',
			details: error.message
		})
	}
}

const loginUser = async (req, res) => {
	try {
		const user = res.locals.existingUser
		const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY)

		if (!token) {
			throw new Error(`User ID or token key does not match!`)
		} else {
			res.cookie('token', token, {
				httpOnly: true,
				sameSite: 'strict'
			})

			res.status(200).json({
				id: user._id,
				username: user.username,
				fullName: user.fullName,
				profilePic: user.profilePic
			})
		}
	} catch (error) {
		return res.status(500).json({
			message: `Error in logging in user or Internal Server Error`,
			details: error.message
		})
	}
}

export { registerUser, loginUser }
