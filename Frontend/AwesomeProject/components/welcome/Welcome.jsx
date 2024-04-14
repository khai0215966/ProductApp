import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcom.style'
import { COLOR, SIZE } from '../../constants'
import {Feather, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const welcome = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeText(COLOR.black,SIZE.xSmall)}>
                {" "}
                Tìm nhiều
                </Text>
            <Text style={styles.welcomeText(COLOR.primary,0)}>
                {" "}
                Nội thất sang trọng
                </Text>
        </View>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=""
                    onFocus={()=>navigation.navigate("Search")}
                    placeholder='Tìm kiếm sản phẩm'
                >
                </TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name='camera-outline' size={SIZE.xLarge} color={COLOR.offwhite}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default welcome