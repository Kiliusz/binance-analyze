import dotenv from 'dotenv'

dotenv.config()

interface Config {
  port: number
  binanceURL: string
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  binanceURL: process.env.BINANCE_URL || 'https://api.binance.com',
}


export default config