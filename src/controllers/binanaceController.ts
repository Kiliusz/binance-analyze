import { NextFunction, Request, Response } from 'express'
import { analyzeHistoricalChanges } from '../services/binanace/binanace'

export const getHistoricalData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const {} = req.body
    const data = await analyzeHistoricalChanges()
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log('Binanace Controller Error', error)
  }
}
