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
				status: 201,
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

const getAllUser = async (req, res) => {
	try {
		const loggedUserId = req.params.id

		const allUsers = await User.find(
			{ _id: { $ne: loggedUserId } },
			{
				_id: 1,
				fullName: 1,
				username: 1,
				profilePic: 1
			}
		)

		if (allUsers.length < 1) throw new Error('There are no users available')
		else res.status(200).json(allUsers)
	} catch (error) {
		return res.status(500).json({
			message: `Error in getting all users or Internal Server Error`,
			details: error.message
		})
	}
}

export { registerUser, loginUser, getAllUser }
