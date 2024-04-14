import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './productRow.style'
import { COLOR, SIZE } from '../../../constants'
import ProductCardView from '../productCard/ProductCardView'
import useFetch from '../../../hook/useFetch'

const ProductRow = () => {
    const {data, isLoading, error, refetch} = useFetch()
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZE.xxLarge} color={COLOR.primary} />
      ): error ? (
        <Text>{error}</Text>
      ):(
        <FlatList
          data={data}
          keyExtractor={item=>item._id}
          renderItem={({item}) => <ProductCardView item={item}/>}
          horizontal
          contentContainerStyle={{columnGap: SIZE.medium}}
        />
      )}
    </View>
  )
}

export default ProductRow