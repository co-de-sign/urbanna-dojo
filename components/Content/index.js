import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

import BeerBox from '../BeerBox'
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
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.beers.map(beer => (
          <BeerBox key={beer.key} data={beer} />
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 32,
  }
})
