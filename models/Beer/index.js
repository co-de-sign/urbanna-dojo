import { AsyncStorage } from 'react-native'

export default class Beer {
  static KEYS = [
    'ninteennintynine',
    'badenbadenstout',
    'bambergrauchbier',
    'dadobelgianale',
    'demoiselle',
    'eisenbahndunkel',
    'eisenbahnkoelsch',
    'eisenbahnpaleale',
    'xingublackbeer',
    'brahma',
  ]

  static prefixKey(any) {
    return `@UrbannaBeer:${any}`
  }

  static async all() {
    const beers = await AsyncStorage.multiGet(Beer.KEYS.map(Beer.prefixKey))

    // if 'cached', return cache
    if (beers.filter(x => !!x).length > 0) {
      return Promise.resolve(beers.map(beer => JSON.parse(beer[1])))
    }

    const fetchedBeers = await Promise.all(Beer.KEYS.map(name =>
      fetch(`http://prost.herokuapp.com/api/v1/beer/${name}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(result => result.json())
      .then(({ title, key, abv, tags = [] }) => ({
        key,
        type: tags,
        name: title,
        alcohol: abv,
      }))
    ))

    AsyncStorage.multiSet(fetchedBeers.map(beer => [
      Beer.prefixKey(beer.key),
      JSON.stringify(beer)
    ]))

    return Promise.resolve(fetchedBeers)
  }
}
