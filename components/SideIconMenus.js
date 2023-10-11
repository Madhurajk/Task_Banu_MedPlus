import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GifIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-ico-material-design';

 export default function SideIconMenus () {
 
    return(

    <View style={styles.navContainer}>
    {/* <View style={styles.nav}> */}
      {/* <Pressable android_ripple={{borderless:true, radius:50}}> */}
        {/* <Icon name="menu-button" height={iconHeight} width={iconWidth}/> */}

      {/* </Pressable> */}
      {/* <GifIcon /> */}
    {/* </View> */}

    <Icon name="add-plus-button" height="40" width="40" />
    <StatusBar style="auto" />
  </View>
    );
}

const styles = StyleSheet.create({
    navContainer:{
     position:'absolute',
     alignItems:'center',
     bottom:20,
     backgroundColor:'blue'
    },
 
    navBar:{
     flexDirection:'row',
     width:'90%',
     justifyContent:'space-evenly',
     borderRadius:40,
     backgroundColor:'blue'
    },
    IconBehave:{
     padding:14
    }
 });

