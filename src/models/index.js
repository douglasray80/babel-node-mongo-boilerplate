import mongoose from 'mongoose'

// example schema and model
const todoSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	}
})

export const Todo = mongoose.model('Todo', todoSchema)
