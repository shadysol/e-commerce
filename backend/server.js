import express from 'express'
import products from './Data/products.js'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import {notFoundError, customeError} from './Middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import morgan from 'morgan'


const app = express()

app.use(express.json())
dotenv.config()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

connectDB()

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFoundError)

app.use(customeError)


  const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`))