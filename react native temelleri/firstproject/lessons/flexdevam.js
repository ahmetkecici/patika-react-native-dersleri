import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box4}/>

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  container:{ //eğer iç tarafta flex kullanılıyosa bunada flex verilmeli

    flex:1,
    flexDirection:"column",//row,reverse
    backgroundColor:"yellow",
    justifyContent:"center"//dikey birinci eksende column ise columnda eksen felx-end,flex-start,space-between,center,space-around,space-evenly
    //align-items ikinci  align

  },
  box1:{
    width:75,
    height:75,
    backgroundColor:"red"
  },
  box2:{
    width:75,
    height:75,
    backgroundColor:"green"
  },
  box3:{
    width:75,
    height:75,
    backgroundColor:"blue"
  },
  box4:{
    width:75,
    height:75,
    backgroundColor:"gray"
  }
})


export default App;
//yoga layout
//layout props
