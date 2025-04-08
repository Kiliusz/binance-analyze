import Router from "express"
import { getHistoricalData } from '../controllers/binanaceController'

const router = Router()

router.get('/', getHistoricalData)

export default router