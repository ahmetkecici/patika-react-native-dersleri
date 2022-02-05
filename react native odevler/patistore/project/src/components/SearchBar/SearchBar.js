import React from "react";
import  {View,TextInput}from 'react-native'
import styles from './SearchBar.style'

const SearchBar =()=>{
    return(
        <View style={styles.container}>
             <TextInput  style={styles.text_input} placeholder="Ara"/>
        </View>
    )
}

export default SearchBar