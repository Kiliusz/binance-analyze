import express from 'express'
import binanceRoutes from './routes/binanceRoutes'


const app = express()
app.use(express.json())

app.get('/health', (req, res) => {
  res.send('ok')
})
// todo routes

app.use('/binance', binanceRoutes)

export default app
