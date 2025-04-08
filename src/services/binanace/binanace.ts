import { fetchHistoricalData } from '../../api/binanaceApi'
import { HistoricalDataIinterval, KlineData, RawKlineData } from '../../types/binanaceTypes'



const mapRawDataToObject = (klineArray: Array<RawKlineData>): KlineData[] =>
  klineArray.map((kline) => ({
    openTime: new Date(kline[0]),
    openPrice: parseFloat(kline[1]),
    highPrice: parseFloat(kline[2]),
    lowPrice: parseFloat(kline[3]),
    closePrice: parseFloat(kline[4]),
    volume: parseFloat(kline[5]),
    closeTime: new Date(kline[6]),
    quoteAssetVolume: parseFloat(kline[7]),
    numberOfTrades: kline[8],
    takerBuyBaseAssetVolume: parseFloat(kline[9]),
    takerBuyQuoteAssetVolume: parseFloat(kline[10]),
  }))

// todo Implement taking args
export const analyzeHistoricalChanges = async (
  symbol: string,
  interval: HistoricalDataIinterval,
  startTime: Date,
  endTime: Date,
  limit = 100
) => {
  try {
    const rawData = await fetchHistoricalData(
      symbol,
      interval,
      startTime,
      endTime,
      limit
    )
    const formattedData = mapRawDataToObject(rawData)


    //todo implement analyzing logic
    return formattedData
  } catch (error) {
    console.log('Error while fetching data', error)
  }
}
