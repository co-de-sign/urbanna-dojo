import MockAsyncStorage from '../../helpers/MockAsyncStorage'

const mockStorage = new MockAsyncStorage()
jest.setMock('AsyncStorage', mockStorage)

import Beer from '.'

describe('Beer', () => {
  describe('#all', () => {
    const beerSample = {
      key: Beer.KEYS[0],
      title: 'fake',
      abv: 1,
      type: ['type'],
    }

    beforeAll(() => {
      global.fetch = require('jest-fetch-mock')
    })

    beforeEach(() => {
      fetch.mockResponse(JSON.stringify(beerSample))
    })

    afterEach(() => {
      fetch.resetMocks()
      mockStorage.clear()
    })

    it('returns all beers', async () => {
      const allBeers = await Beer.all()

      expect(allBeers.length).toBe(10)
    })

    it('returns the beer instance', async () => {
      const allBeers = await Beer.all()

      expect(allBeers[0]).toEqual({
        key: beerSample.key,
        name: beerSample.title,
        alcohol: beerSample.abv,
        type: [],
      })
    })

    it('caches the beers after first call', async () => {
      let allBeers = await Beer.all()

      expect(fetch).toHaveBeenCalledTimes(10)

      allBeers = await Beer.all()

      expect(fetch).toHaveBeenCalledTimes(10)
    })
  })
})
