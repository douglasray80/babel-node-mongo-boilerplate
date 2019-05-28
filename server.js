import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI)
import app from './src/app'

app.listen(process.env.PORT || 4000)
