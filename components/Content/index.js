import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Beer from '../../models/Beer'

export default class Content extends Component {
  state = {
    beers: [],
  }

  async componentWillMount() {
    const beers = await Beer.all()

    this.setState({ beers })
  }

  render() {
    return (
      <View>
        {this.state.beers.map(beer => (
          <Text key={beer.key}>{JSON.stringify(beer.name)}</Text>
        ))}
      </View>
    )
  }
}
