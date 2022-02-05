import React from 'react'
import { View, Text,Button } from 'react-native'


function sayHello(){

}
const  sayHello2=(label)=>{

}

function App() {
  return (
    <View >
      <Text>
        Selam
      </Text>
      <Button 
      onPress={sayHello}  //parantezleri açma parantez fonksiyonu çalıştırır

      title='Selam' />
      <Button 
      onPress={()=>sayHello2("sadad")}  //parantezleri açma parantez fonksiyonu çalıştırır

      title='Selam' />
    </View>
  )
}







export default App;
//jsx
//view text

//syntatic sugar
//props
//component
