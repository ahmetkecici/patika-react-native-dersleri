import React, { useState } from 'react'
import {View,Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

const SaveTodo=({onChange,saveTodo,todoValue,disableBtn})=>{

 
    return (
        <View style={styles.container}>
          
          <TextInput style={styles.todo_text} value={todoValue} placeholder="Yapılacklar" onChangeText={onChange}/>
          <TouchableOpacity style={[styles.btn,disableBtn&&styles.btn_disabled]} disabled={disableBtn} onPress={saveTodo}>
              <Text style={styles.btn_text}>
                  Save todo
              </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
 container:{
   backgroundColor:"#7f8fa6",
  
   margin:15,
   marginBottom:20,
   borderRadius:10
 },
 btn_text:{
       textAlign:"center" ,
     color:"white"
 },
  btn:{
    backgroundColor:"green",
    borderRadius:10  ,
    margin:15,
    padding:15
 },
 todo_text:{
     borderBottomWidth:1,
     margin:5,
     marginHorizontal:15,
     color:"white"
    
 }
,
btn_disabled:{
  backgroundColor:"gray"
}

 
})
export default SaveTodo