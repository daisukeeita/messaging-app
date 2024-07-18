import bcrypt from 'bcrypt'

import User from '../models/user.model.js'

const registerUserInput = {
	checkMissingFields: async (req, res, next) => {
		try {
			const { fullName, username, password, confirmPassword, gender } = req.body

			if (!fullName || !username || !password || !confirmPassword || !gender) {
				throw new Error('Please fill all of the required fields!')
			} else {
				next()
			}
		} catch (error) {
			return res.status(400).json({
				message: error.message
			})
		}
	},

	checkPasswordMatch: async (req, res, next) => {
		try {
			const { password, confirmPassword } = req.body

			if (password.length < 6)
				throw new Error(`Password should be at least 6 characters!`)

			if (password !== confirmPassword) {
				throw new Error(`Passwords does not match!`)
			} else {
				const hashPassword = await bcrypt.hash(password, 10)

				req.body.password = hashPassword
				next()
			}
		} catch (error) {
			return res.status(400).json({
				message: error.message
			})
		}
	},

	checkDuplicateUser: async (req, res, next) => {
		try {
			const duplicateUser = await User.findOne({ username: req.body.username })

			if (duplicateUser)
				throw new Error(`Username already exists, please use another one!`)
			else next()
		} catch (error) {
			res.status(400).json({
				message: error.message
			})
		}
	},

	setProfileImage: async (req, res, next) => {
		try {
			const { gender } = req.body

			const maleProfilePic = `https://api.dicebear.com/8.x/adventurer/svg?seed=Buddy`
			const femaleProfilePic = `https://api.dicebear.com/8.x/adventurer/svg?seed=Jasmine`

			const genderProfilePic =
				gender === 'male' ? maleProfilePic : femaleProfilePic

			req.body.profilePic = genderProfilePic

			if (!genderProfilePic) throw new Error(`No Profile Picture was generated`)
			else next()
		} catch (error) {
			return res.status(500).json({
				message:
					'Error on getting the profile picture API or Interval Server Error',
				details: error.message
			})
		}
	}
}

const loginUserInput = {
	checkMissingFields: async (req, res, next) => {
		try {
			const { username, password } = req.body

			if (!username) throw new Error('Username is required!')
			if (!password) throw new Error('Password is required!')
			else next()
		} catch (error) {
			return res.status(400).json({ message: error.message })
		}
	},

	checkExistingUser: async (req, res, next) => {
		try {
			const { username } = req.body
			const existingUser = await User.findOne(
				{ username },
				{
					_id: 1,
					fullName: 1,
					username: 1,
					password: 1,
					profilePic: 1
				}
			)

			if (!existingUser) {
				throw new Error(`Account does not exist, please register instead!`)
			} else {
				res.locals.existingUser = existingUser
				next()
			}
		} catch (error) {
			return res.status(400).json({
				message: error.message
			})
		}
	},

	checkPasswordMatch: async (req, res, next) => {
		try {
			const { password } = req.body
			const hashPassword = res.locals.existingUser.password

			const matchPassword = await bcrypt.compare(password, hashPassword)

			if (!matchPassword) {
				throw new Error(`Password is incorrect, please try again!`)
			} else {
				next()
			}
		} catch (error) {
			return res.status(400).json({
				message: error.message
			})
		}
	}
}

export { registerUserInput, loginUserInput }
