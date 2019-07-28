import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import BeerAPI from '../../models/Beer'
import Beer from '../Beer'

export default function Content() {
  const [beers, setBeers] = React.useState([])

  React.useEffect(() => {
    BeerAPI.all().then(beers => setBeers(beers.filter(Boolean)))
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {beers.map(beer => (
        <Beer key={beer.name} beer={beer} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  content: {
    color: 'gray',
  },
})
