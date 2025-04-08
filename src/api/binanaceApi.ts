import axios from 'axios'
import config from '../config/config'
import { HistoricalDataIinterval } from '../types/binanaceTypes'

export const fetchHistoricalData = async (
  symbol: string,
  interval: HistoricalDataIinterval,
  startTime: Date,
  endTime: Date,
  limit = 100
) => {
  try {
    const res = await axios.get(`${config.binanceURL}/api/v3/klines`, {
      params: {
        symbol: symbol.toUpperCase(),
        interval,
        startTime: new Date(startTime).valueOf(),
        endTime: new Date(endTime).valueOf(),
        limit,
      },
    })
    return res.data
  } catch (error) {
    console.error('Error while fetching data', error )
    throw error
  }
}
