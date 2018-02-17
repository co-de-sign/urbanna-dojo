import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import BeerAPI from '../../models/Beer'
import Beer from '../Beer'

export default class Content extends Component {
  state = {
    beerList: []
  }

  async componentWillMount() {
    const beers = await BeerAPI.all()
    this.setState({
      beerList: beers }
    )
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        { this.state.beerList.map(beer => <Beer key={beer.name} beer={beer}/>) }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  content: {
    color: 'gray'
  },
})
