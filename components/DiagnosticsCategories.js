import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { diagnosticsData } from '../constants/constants';

export default function DiagnosticsCategories() {
  return (
    <>
    <Text style={{fontSize: wp(4)}}>Diagnostics by Categories</Text>
    <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
              {
                diagnosticsData.map((cat)=>{
                return (
                    <View style={styles.item}>
                    <TouchableOpacity className="flex items-center space-y-2">
                        <Image source={cat.image} className="rounded-3xl" style={{width: wp(80), height: wp(35)}} />
                        <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>Name : {cat.title}</Text>
                        <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>Price $ :{cat.price}</Text>
                        <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>Description : {cat.shortDescription}</Text>
                        <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.weather}</Text>

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
        fontSize:35,
        margin:10,
        padding:15,
        fontWeight:20,
                
    }
})
