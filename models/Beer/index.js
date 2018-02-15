export default class Beer {
  static names = [
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

  static all() {
    return Promise.all(Beer.names.map(name =>
      fetch(`http://prost.herokuapp.com/api/v1/beer/${name}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(result => result.json())
    ))
  }
}
