import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../../helpers/colors'
import card from '../../helpers/card'

export default class Filter extends Component {
  static defaultProps = {
    types: [],
  }

  toggle = (type) => {
    this.props.toggleType(type)
  }

  render() {
    const {
      types
    } = this.props

    return (
      <View style={styles.filter}>
        {types.map(type => (
          <Text
            key={type.name}
            onPress={() => this.toggle(type)}
            style={styles.option}
          >
            {type.selected ? '☑' : '◻'}
            {type.name}
          </Text>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filter: {
    ...card,
    marginTop: 32,
    backgroundColor: colors.blue,
  },
  option: {
    color: '#fff',
    fontSize: 20,
  }
})
