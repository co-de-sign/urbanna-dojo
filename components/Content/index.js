import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default class Content extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.content}>Aqui vai o nosso programa :)</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 32,
  },
  content: {
    color: 'gray'
  }
})
