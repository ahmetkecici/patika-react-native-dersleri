import React, { useState } from 'react';
import {View,Button,Text } from 'react-native'


const App=()=>{
  const [counter,setCounter]=useState(0)
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

       <View >
       <Button   title='+' onPress={incraseCounter}/>
<Button  title='-'onPress={decraseCounter} />
       </View>
    </View>
  )
}
export default App