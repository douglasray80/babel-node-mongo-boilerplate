import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import mongoose from 'mongoose'
import morgan from 'morgan'

import router from './router'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())

export default async () => {
	await mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
		.then(() => console.log('Connected to database...'))
		.catch(err =>
			console.log('There was an error connecting to database: ' + err)
		)

	app.use(router)

	app.use((req, res) => {
		res
			.status(404)
			.type('text')
			.send('Not Found')
	})

	app.listen(process.env.PORT || 3000, () => {
		console.log('Listening on port ' + process.env.PORT)
	})
}
