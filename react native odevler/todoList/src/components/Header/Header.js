import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

const Header=({count})=>{
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Yapılacaklar</Text>
          <Text style={styles.counter}>{count}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
 container:{
     flexDirection:"row",
     justifyContent:"space-around",
     marginTop:10
 },
 header:{
     fontSize:25,
     color:"#2f3640",

 },
 counter:{
     fontSize:25,
     color:"#2f3640"
 }
})
export default Header