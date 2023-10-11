import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { categoriesData } from '../constants/constants';

export default function Categories() {
  return (
    <>
    <Text style={{fontSize: wp(4)}}>Shop by Categories</Text>
    <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
              {
            categoriesData.map((cat,index)=>{
                return (
                    <View style={styles.item}>
                    <TouchableOpacity key={index} className="flex items-center space-y-2">
                        <Image source={cat.image} className="rounded-3xl" style={{width: wp(20), height: wp(19)}} />
                        <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.title}</Text>
                    </TouchableOpacity>
                    </View>
                )
            })
        }
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    item:{
        fontSize:30,
        margin:10,
        padding:15,
        fontWeight:20,
        height:100,
        width:100,
        
    }
})
