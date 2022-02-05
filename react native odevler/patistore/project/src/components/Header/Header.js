import React  from "react";
import {View,Text, StyleSheet} from 'react-native';
import SearchBar from "../SearchBar/SearchBar";


const Header=()=>{
    return (
        <View >
           
            <Text style={styles.title}>
                DayıoğluStore
            </Text>
            <SearchBar />
        </View>
    )
}

const styles=StyleSheet.create({
  title:{
      color:"#800080",
      fontWeight:"bold",
      fontSize:30,
      margin:15
  }
})

export default Header 