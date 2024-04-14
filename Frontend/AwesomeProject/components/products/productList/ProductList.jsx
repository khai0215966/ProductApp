import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import styles from './productList.style'
import useFetch from '../../../hook/useFetch'
import { COLOR, SIZE } from '../../../constants'
import ProductCardView from '../productCard/ProductCardView'

const ProductList = () => {
    const { data, isLoading, error} = useFetch()
    
    if(isLoading) {
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size={SIZE.xxLarge}
                    color={COLOR.primary}
                />
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => (<ProductCardView item={item}/>)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  )
}

export default ProductList