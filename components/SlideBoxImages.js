import React from 'react'
import { View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'


export default function SlideBoxImage() {

    const images = [
        require('../assets/offer.png'),
        require('../assets/offer1.png'),
        require('../assets/offer3.jpg'),
        require('../assets/offer4.png'),    
    ];
    return (
        <View>
            <SliderBox images = {images} dotColor="red" inactiveDotColor="white" 
            dotStyle={{height:10, width:10, borderRadius:30}}
            imageLoadingColor="black"
            autoplay={true}
            autoplayInterval={1000}
            circleLoop={true}
            />

        </View>

    );
    }