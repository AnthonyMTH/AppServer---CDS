import express, { json } from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js';
import postsRoutes from './routes/posts.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', postsRoutes)

app.use(express.json()); 
app.use('/api',authRoutes); 

export default app