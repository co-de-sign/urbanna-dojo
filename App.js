import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header'
import Content from './components/Content'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
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
