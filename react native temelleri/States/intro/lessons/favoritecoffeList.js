import { View, Text, FlatList, Switch } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const data=[
    {id:1,name:"Han",isFavorite:true},
    {id:2,name:"Casual",isFavorite:false},
    {id:3,name:"çay",isFavorite:true},
    {id:4,name:"dasdsa",isFavorite:true},
    {id:5,name:"fff",isFavorite:false}
  ];
  function onFavoritesChange(isFavoriteSelected){
    setShowFavorites(isFavoriteSelected)
    if (isFavoriteSelected) {
       setCaffeList(caffeList.filter(x=>x.isFavorite==true))
    }else{
      setCaffeList(data)
    }
  } 


  const renderCafe=({item})=><Text>{item.name}</Text>
   const [caffeList,setCaffeList]=useState(data)
   const [showFavorites,setShowFavorites]=useState(false)
  return (
    <View>
      <Text>Show Favorites</Text>
      <Switch value={showFavorites} onValueChange={onFavoritesChange}/>
      <FlatList 
       data={caffeList}
       renderItem={renderCafe}
      />
    </View>
  );
};

export default App;
