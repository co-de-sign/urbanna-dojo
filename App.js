import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
