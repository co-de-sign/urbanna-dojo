import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import card from '../../helpers/card'

export default class BeerBox extends Component {
  render() {
    const { data } = this.props

    return (
      <View style={styles.box}>
        <Text style={styles.title}>
          {data.name}
        </Text>
        <Text>
          {data.type.reduce((acc, type) => `${acc} ${type}`, '')}
        </Text>
        <Text>{data.alcohol}% alcool</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    ...card,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})
