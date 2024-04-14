import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './searchTitle.style'
import { useNavigation } from '@react-navigation/native'

const SearchTitle = ({item}) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity 
        style={styles.container}
        onPress={()=>navigation.navigate("Details",{item})}>
        <View style={styles.image}>
            <Image
                source={{uri:item.imageUrl}}
                style={styles.productImage}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>
                {item.title}
            </Text>
            <Text style={styles.productSupplier}>
                {item.supplier}
            </Text>
            <Text style={styles.productSupplier}>
                {item.price}
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle