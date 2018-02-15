import MockAsyncStorage from '../../helpers/MockAsyncStorage'

const mockStorage = new MockAsyncStorage()
jest.setMock('AsyncStorage', mockStorage)

import Beer from '.'

describe('Beer', () => {
  describe('#all', () => {
    const beerSample = {
      name: 'fake',
      alcohol: 1,
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

      expect(allBeers[0]).toEqual(beerSample)
    })

    it('caches the beers after first call', async () => {
      let allBeers = await Beer.all()

      expect(fetch).toHaveBeenCalledTimes(10)

      allBeers = await Beer.all()

      expect(fetch).toHaveBeenCalledTimes(10)
    })
  })
})
