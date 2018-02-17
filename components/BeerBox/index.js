import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class BeerBox extends Component {
  render() {
    const { data } = this.props

    return (
      <View style={styles.box}>
        <Text>{data.name}</Text>
        <Text>{data.alcohol}% alcool</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    marginTop: 32,
    padding: 24,
    height: 224,
    width: 256,
    elevation: 1,
    backgroundColor: '#fff',
  }
})
