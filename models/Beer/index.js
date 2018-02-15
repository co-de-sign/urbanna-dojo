import { AsyncStorage } from 'react-native'

export default class Beer {
  static NAMES = [
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

  static KEY = '@UrbannaBeer:beers'

  static async all() {
    const beers = await AsyncStorage.getItem(Beer.KEY)

    // if 'cached', return cache
    if (beers) {
      return Promise.resolve(beers)
    }

    const fetchedBeers = await Promise.all(Beer.NAMES.map(name =>
      fetch(`http://prost.herokuapp.com/api/v1/beer/${name}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(result => result.json())
    ))

    AsyncStorage.setItem(Beer.KEY, fetchedBeers)

    return fetchedBeers
  }
}
