import React from 'react'
import {View,FlatList,Text,StyleSheet} from 'react-native';
import Header from './components/Header'
import products from '../products.json';
import ProductCard from './components/ProductCard'
const App=()=>{
  const renderProducts=({item})=> (<ProductCard product={item}/>)
  const renderHeader=()=>(<Header />)
  return(
    <View style={styles.container}>
       <FlatList 
       ListHeaderComponent={renderHeader} 
       data={products}
       renderItem={({item})=><ProductCard product={item} />}
        numColumns={2}
       />
    </View>
  );
}
const styles=StyleSheet.create({
 container:{

 }
})

export default App;