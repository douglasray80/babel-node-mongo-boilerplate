import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	name: String,
	birthday: String,
	createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('User', UserSchema)
