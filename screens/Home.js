import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, Dimensions, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import COLORS from '../constants/colors';
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import SlideBoxImage from '../components/SlideBoxImages';
import SideIconMenus from '../components/SideIconMenus';
import MenuIcons from '../components/MenuIcons';
import Icon from 'react-native-ico-material-design';



var iconHeight = 26;
var iconWidth = 26;

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  item:{
    backgroundColor:'white'
  }

});

const styles = StyleSheet.create({

  NavContainer:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 1,
  },

  NavBar: {
    flexDirection:'row',
    backgroundColor:'white',
    width:'100%',
    justifyContent: 'space-evenly',
    alignItems:'right',
    textShadowRadius:20
  },

  IconBehave:{
    padding: 15,
  }
});


const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView style={style.item}>
     
        <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}} >
            <TouchableOpacity>
            <Image source={require('../assets/doc.png')} style={{height: wp(8), width: wp(8), marginTop: height*0.05}} />
              </TouchableOpacity>
             <BellIcon size="34" color="black" style={{ marginTop: height*0.05, marginLeft:height*0.32}} />
              <TouchableOpacity>
             <ShoppingCartIcon size="35" color="blue" style={{ marginTop: height*0.05}} />
            </TouchableOpacity>
       </View>

         <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
            <MapPinIcon size="25" color="green" />
            <Text className="font-semibold text-base">
              4th Cross, Banasankari, Bangalore 571613
            </Text>
            </View>
        
{/* search bar */}

 <View className="mx-5 shadow" style={{marginTop: height*0.01}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Medicines & General products...' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: COLORS.secondary}}>
              <MagnifyingGlassIcon size="40" strokeWidth={2} color="grey" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <SlideBoxImage />
        </View>

        {/* <View>
          <SideIconMenus />
        </View> */}

      {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>


       {/* side view */}
{/* 
          <View>
          <MenuIcons />
          </View>  */}

        

        {/* destinations */}
        {/* <View>
          <Destinations />
        </View> */}

        </ScrollView>


        <View style={styles.container}>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
          <Icon name="menu-button" height={iconHeight} width={iconWidth} color='black' />
          <Text>Menu</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Pharmacy")} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
          <Icon name="user-account-box-1" height={iconHeight} width={iconWidth} color='black' />
          <Text>Pharmacy</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Doctor")} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
          <Icon name="rounded-add-button-1" height={iconHeight} width={iconWidth} color='black' />
          <Text>Doctor</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Diagnostics")} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
          <Icon name="add-to-queue-button" height={iconHeight} width={iconWidth} color='black' />
          <Text>Diagnostics</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Signup")} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
          <Icon name="round-account-button-with-user-inside" height={iconHeight} width={iconWidth} color='black' />
          <Text>Account</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </>
  )
}

export default Home


