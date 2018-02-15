import Beer from '.'

describe('Beer', () => {
  describe('#all', () => {
    const beerSample = {
      name: 'fake',
      alcohol: 1,
    }

    beforeAll(() => {
      global.fetch = require('jest-fetch-mock')

      fetch.mockResponse(JSON.stringify(beerSample))
    })

    it('returns all beers', async () => {
      const allBeers = await Beer.all()

      expect(allBeers.length).toBe(10)
    })

    it('returns the beer instance', async () => {
      const allBeers = await Beer.all()

      expect(allBeers[0]).toEqual(beerSample)
    })
  })
})
