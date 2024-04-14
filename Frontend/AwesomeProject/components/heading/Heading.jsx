import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { COLOR } from '../../constants'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Heading = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Heading</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("NewRivals")}>
            <Entypo 
                name="grid" 
                size={24} 
                color={COLOR.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading