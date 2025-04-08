export type HistoricalDataIinterval = '1d' | '4h' | '1h' | '15m'
export type RawKlineData = [
  number,
  string,
  string,
  string,
  string,
  string,
  number,
  string,
  number,
  string,
  string,
  string,
]

export interface KlineData {
  openTime: Date
  openPrice: number
  highPrice: number
  lowPrice: number
  closePrice: number
  volume: number
  closeTime: Date
  quoteAssetVolume: number
  numberOfTrades: number
  takerBuyBaseAssetVolume: number
  takerBuyQuoteAssetVolume: number
}