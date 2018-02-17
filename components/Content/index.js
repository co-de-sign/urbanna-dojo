import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

import BeerBox from '../BeerBox'
import Filter from '../Filter'

import Beer from '../../models/Beer'

export default class Content extends Component {
  state = {
    beers: [],
    types: [],
  }

  async componentWillMount() {
    const beers = await Beer.all()
    const types = beers
      .reduce((acc, beer) => [...acc, ...beer.type], [])
      .map(type => ({ name: type, selected: true }))

    this.setState({
      beers,
      types,
    })
  }

  toggleType = (toggled) => {
    const { types } = this.state

    this.setState({
      types: types.map(type => {
        if (type.name === toggled.name) {
          return {
            ...type,
            selected: !type.selected,
          }
        }

        return type
      })
    })
  }

  isSelected = (beer) => {
    const { types } =  this.state
    const selectedTypes = types
      .filter(type => type.selected)
      .map(type => type.name)

    if (beer.type.length === 0) return true

    return beer.type
      .reduce((acc, type) => acc || selectedTypes.includes(type), false)
  }

  render() {
    const {
      types,
      beers,
    } = this.state

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Filter
          types={types}
          toggleType={this.toggleType}
        />
        {
          beers
            .filter(this.isSelected)
            .map(beer => (
              <BeerBox key={beer.key} data={beer} />
            ))
        }
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
