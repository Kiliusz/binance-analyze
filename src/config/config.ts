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

// TODO validate if some values are missing (currently each env has fallback so its not necessary)

export default config