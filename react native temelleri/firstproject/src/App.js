import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Card from './components/Card/Card';


function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Ahmet Keçici</Text>
          <Text style={styles.card_text}>Hallederiz Dayıoğlu</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_text}>I Liked So Much!</Text>
        </TouchableOpacity>
      </View> */}

      <Card title="Ahmet Keçici" text="Selamlar canolar" button_text="I Liked So Much!!!" />

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  container: { //eğer iç tarafta flex kullanılıyosa bunada flex verilmeli

    flex: 1,
    flexDirection: "column",//row,reverse
    backgroundColor: "yellow",
    //justifyContent: "center"//dikey birinci eksende column ise columnda eksen felx-end,flex-start,space-between,center,space-around,space-evenly
    //align-items ikinci  align

  },


})


export default App;

