import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'

configDotenv()

const connectToMongoDB = async () => {
	const DB_URI = process.env.DB_URI

	try {
		const connect = await mongoose.connect(DB_URI)

		if (!connect) {
			throw new Error(`Cannot connect to MongoDB`)
		} else {
			console.info({ message: 'Connected to MongoDB' })
			return connect
		}
	} catch (error) {
		console.error(error.message)
	}
}

export default connectToMongoDB
