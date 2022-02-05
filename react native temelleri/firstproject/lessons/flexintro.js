import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_container} >
        <Text style={styles.container}>Selam</Text>
      </View>
      <View style={styles.bottom_container} >
        <Text style={styles.container}>Selam</Text>
      </View>
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  container:{ //eğer iç tarafta flex kullanılıyosa bunada flex verilmeli

    flex:1,
    flexDirection:"row"
  },
  upper_container: {
    backgroundColor: "red",
    flex:1,
  },
  bottom_container  : {
    flex:1,
    backgroundColor: "blue"
  }
})


export default App;
//yoga layout
//layout props
