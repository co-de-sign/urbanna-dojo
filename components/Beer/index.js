import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// formato de uma Beer:
// beer.name => nome da cerveja
// beer.alcohol => porcentagem de alcool da cerveja
// beer.type => array de strings que contem os tipos da cerveja

export default class Beer extends Component {
  render() {
    return (
      <View style={styles.beer}>
        <Text style={styles.name}>{this.props.beer.name}</Text>
        <Text>{this.props.beer.alcohol}%</Text>
        {this.props.beer.type.map(type => (
          <Text key={type}>{type}</Text>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  beer: {
    width: 256,
    height: 244,
    backgroundColor: '#fff',
    marginTop: 32,
    padding: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})
