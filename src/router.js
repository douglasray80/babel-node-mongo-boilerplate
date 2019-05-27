import express from 'express'
const router = express.Router()

import Todo from './models'
import todoController from './controllers'

// Get all Todo
router.get('/todo', todoController.GetTodo)

// Create new Todo
router.post('/todo', todoController.PostTodo)

// Delete a todo based on :id
router.delete('/todo/:id', todoController.DeleteTodo)

// Update a todo based on :id
router.put('/todo/:id', todoController.UpdateTodo)

export default router
