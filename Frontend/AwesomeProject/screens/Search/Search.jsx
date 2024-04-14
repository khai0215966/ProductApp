import { View, Text, TouchableOpacity, TextInput, FlatList, Image, } from 'react-native'
import React,{useState} from 'react'
import styles from './search.style'
import { COLOR, SIZE } from '../../constants'
import {Feather, Ionicons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { SearchTitle } from '../../components'

const Search = () => {
    const [searchKey,setSearchKey] = useState('')
    const [searchResult,setSearchResult] = useState([])
    // console.log(searchResult)
    const handleSearch = async() => {
        try {
            const response = await axios.get(`http://192.168.1.3:3000/api/products/search/${searchKey}`)
            // console.log(response.data)
            setSearchResult(response.data)
        } catch (error) {
            console.log(123)
            console.log(error)
        }
    }
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
            <Ionicons name='camera-outline' size={SIZE.xLarge} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={searchKey}
                    onChangeText={(text) => setSearchKey(text)}
                    placeholder='Tìm kiếm sản phẩm'
                >
                </TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} onPress={()=>handleSearch()}>
                    <Ionicons name='search' size={SIZE.xLarge} color={COLOR.offwhite}/>
                </TouchableOpacity>
            </View>
        </View>
        {searchResult.length === 0 ? (
            <View style={{flex:1}}>
                <Image
                    source={require('../../assets/images/Pose23.png')}
                    style={styles.searchImage}
                />
            </View>
        ):(
            <FlatList
                data={searchResult}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <SearchTitle item={item}/>
                )}
                style={{marginHorizontal:12}}
            />
        )}
    </SafeAreaView>
  )
}

export default Search