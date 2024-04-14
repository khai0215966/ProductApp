import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { Ionicons,AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import styles from './details.style'
import { COLOR, SIZE } from '../../constants'

const Details = ({navigation}) => {
  const route = useRoute()
  const {item} = route.params
  // console.log(item)
  const [count, setCount] = useState(1);
  const maxCount = 5; // Giá trị tối đa
  const minCount = 0; // Giá trị tối thiểu

const increment = (value) => {
  const newValue = count + value;
  if (newValue <= maxCount && newValue >= minCount) {
    setCount(newValue);
  } else if (newValue > maxCount) {
    setCount(maxCount);
  } else {
    setCount(minCount);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Ionicons name='heart' size={30} color={COLOR.primary}/>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri:item.imageUrl}}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}đ</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index)=>(
              <AntDesign 
                key={index}
                name='star'
                size={24}
                color="gold"
              />
            ))}
            <Text style={styles.ratingNumber}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={()=>increment(-1)}>
              <AntDesign 
                name="minuscircleo" 
                size={24} 
                color="black" 
              />
            </TouchableOpacity>
            <Text style={styles.ratingNumber}>{count}</Text>
            <TouchableOpacity onPress={()=>increment(1)}>
              <AntDesign 
                name="pluscircleo" 
                size={24} 
                color="black" 
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            Nội thất sang trọng
          </Text>
          <Text style={styles.descText}>
            {item.description}
          </Text>
        </View>
        <View style={{marginBottom:SIZE.small}}>
          <View style={styles.location}>
            <View style={{flexDirection:'row'}}>
              <Ionicons name='location-outline' size={20}/>
              <Text>   {item.product_location}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
              <Text>   Free delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addCart}>
              <Feather name="shopping-bag" size={24} color={COLOR.lightWhite} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Details