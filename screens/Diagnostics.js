import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, Dimensions, TextInput, StyleSheet, Pressable } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BellIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import COLORS from '../constants/colors';
import DiagnosticsCategories from '../components/DiagnosticsCategories';


const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  item:{
    backgroundColor:'white'
  }

});


const Diagnostics = ({ navigation }) => {
    return (
        <ScrollView style={style.item}>
     
        <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}} >
            <TouchableOpacity>
            <Image source={require('../assets/DiaLogo1.png')} style={{height: wp(15), width: wp(15), marginTop: height*0.05}} />
              </TouchableOpacity>

              <Text style={{fontWeight: 'bold', marginTop: height*0.05, color:'red', fontSize: 30,textAlign:'right',height: wp(10)}}>
              Diagnostics
     </Text>              
       </View>

         <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
         <Image source={require('../assets/Diaa.jpg')} style={{height: wp(45), width: wp(100)}} />
            </View>
        
{/* search bar */}


 <View className="mx-5 shadow" style={{marginTop: height*0.01}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Diagnostics...' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: COLORS.secondary}}>
              <MagnifyingGlassIcon size="40" strokeWidth={2} color="grey" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
            <DiagnosticsCategories />
        </View>

        </ScrollView>

    );
}
export default Diagnostics
