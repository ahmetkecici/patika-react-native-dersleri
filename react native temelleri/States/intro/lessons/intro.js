import React, { useState } from 'react'
import {View,Text, Button} from 'react-native';


const App=()=>{
  const [counter,setCounter]=useState(0);
  function incraseCounter(){
    setCounter(counter+1)
  }
  function decraseCounter(){
    setCounter(counter-1)
  }
  return(
    <View>
      <Text>
        {counter}
      </Text>
      <Button title='+' onPress={incraseCounter}/>
      <Button title='-' onPress={decraseCounter}/>
    </View>
  );
}
//state bir değişken tutmak için kullandığımız yerdir
//normal değişkenlerde render edilmez
//component lifesycle
//react hooks
//react state
// dispatch

export default App;