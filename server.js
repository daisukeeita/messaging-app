import express from 'express'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectToMongoDB from './database/mongoDB.js'

configDotenv()

const port = process.env.SERVER_PORT || 5000
const host = process.env.SERVER_HOST || 'localhost'

const app = express()

app.use(
	cors({
		origin: 'http://localhost:5173'
	})
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.listen(port, () => {
	connectToMongoDB()
	console.info(`Server is running at http://${host}:${port}`)
})
