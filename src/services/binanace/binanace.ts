import { fetchHistoricalData } from '../../api/binanaceApi'

export const analyzeHistoricalChanges = async () => {
  try {
    const rawData = await fetchHistoricalData(
      'BTCUSDT',
      '1h',
      new Date('2024-12-12'),
      new Date('2024-12-13'),
      30
    )
    //todo implement analyzing logic
    return rawData
  } catch (error) {
    console.log('Error while fetching data', error)
  }
}
