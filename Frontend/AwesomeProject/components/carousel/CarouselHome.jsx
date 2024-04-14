import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { COLOR } from '../../constants';

const CarouselHome = () => {
    const slide = [
        "https://kika.vn/wp-content/uploads/2022/08/sofa-da-1.jpg",
        "https://noithatlacgia.vn/wp-content/uploads/2022/07/alma-sofa-2.jpg",
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/Chat-lieu-lam-ghe-sofa-ban-da-biet-het-1.jpg"
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
        images={slide} 
        dotColor={COLOR.primary}
        inactiveDotcolor={COLOR.secondary}
        autoplay={true}
        circleloop={true}
        ImageComponentStyle={{borderRadius:15, width:"92%",marginTop:15}}
        />
    </View>
  )
}

export default CarouselHome

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center', 
    }
})
