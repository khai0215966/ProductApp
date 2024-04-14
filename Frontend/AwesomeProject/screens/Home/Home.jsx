import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons, Fontisto} from '@expo/vector-icons'
import styles from './home.styles'
import { Welcome, CarouselHome, Heading, ProductRow } from '../../components'

const Home = () => {
  return (
    <SafeAreaView>
        <View style={styles.appBarWapper}>
          <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24}/>
            <Text style={styles.location}>Ha Noi</Text>
            <View style={{alignItems:'flex-end'}}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>1</Text>
              </View>
              <TouchableOpacity>
                <Fontisto name='shopping-bag' size={24}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <Welcome></Welcome>
          <CarouselHome></CarouselHome>
          <Heading></Heading>
          <ProductRow></ProductRow>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home
