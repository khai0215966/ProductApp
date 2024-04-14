import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLOR } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Details",{item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image  
            source={{uri:item.imageUrl}}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
          <Text style={styles.price} numberOfLines={1}>{item.price}đ</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name='add-circle' size={35} color={COLOR.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView