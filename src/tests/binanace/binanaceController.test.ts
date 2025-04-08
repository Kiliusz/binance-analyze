import app from '../../app'
import request from 'supertest'
import nock from 'nock'
import config from '../../config/config'

// Write proper path parameters
const binanceMockerRes = nock(config.binanceURL).get('/api/v3/klines').reply(200, {
    // write proper object
    reponseData: 'someDummyData'
})

describe('Binance Controller', () => {
    test('should return analyzed data', async () => {
        const res = await request(app).get('/binance')
        expect(res.body).toBe('someDummyData')

     })
 })