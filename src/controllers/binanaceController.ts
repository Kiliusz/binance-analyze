import { NextFunction, Request, Response } from 'express'
import { analyzeHistoricalChanges } from '../services/binanace/binanace'

export const getHistoricalData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // todo implement getting user data from body or params instaed of hardcoded
    const data = await analyzeHistoricalChanges('BTCUSDT', '1h', new Date('2024-12-22'), new Date('2024-12-23'), 24)
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log('Binanace Controller Error', error)
    next(error)
  }
}
