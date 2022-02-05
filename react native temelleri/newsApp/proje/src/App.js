import React from 'react';
import {View,Text,FlatList,StyleSheet,ScrollView,Image, Dimensions} from 'react-native';
import news_data from '../news_data.json'
import NewsCard from './components/NewsCard';
import news_banner_data from '../news_banner_data.json'

const App=()=> {
  const renderNews=({item})=>{
   return (<NewsCard news={item} />)
  }
  const renderSlider=()=>{
    return(<ScrollView horizontal={true} showsHorizontalScrollIndicator={false }>
      {
        news_banner_data.map(banner=>
         (
         <Image style={styles.banner_image} source={{uri:banner.imageUrl}}/>
         ))
      }
      </ScrollView>)
  }
  return(
    <View style={styles.container}>
 

 <FlatList 
 ListHeaderComponent={renderSlider}
      data={news_data}
     // renderItem={({item})=><NewsCard news={item} />
     renderItem={renderNews}
      keyExtractor={(item)=>item.u_id.toString()}
     />
     
    </View> 
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1"
  },
  banner_image:{
     height:Dimensions.get("window").height/4,
     width:Dimensions.get("window").width/2
  }
})

export default App