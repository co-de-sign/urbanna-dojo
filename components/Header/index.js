import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { Constants } from 'expo'

import colors from '../../helpers/colors'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={styles.banner}>
          Urbanna
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: colors.blue,
  },
  banner: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  }
})
