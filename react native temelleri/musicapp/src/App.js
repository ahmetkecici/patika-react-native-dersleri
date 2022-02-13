import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'
import music_data from '../music_data.json';
import SearchBar from './components/SearchBar';
import SongCard from './components/SongCard/SongCard';


const App = () => {
    const renderSongs = ({ item }) => <SongCard song={item} />
    const renderSeparator = () => <View style={styles.seperator}></View>
    const [list, setList] = useState(music_data)
    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
          const searchedText = text.toLowerCase();
          const currentTitle = song.title.toLowerCase();
          return currentTitle.indexOf(searchedText) > -1;
        });
        setList(filteredList);
      };
    return (

        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <FlatList
                keyExtractor={item => item.id}
                data={list}
                renderItem={renderSongs}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    seperator: {
        borderWidth: 1,
        borderColor: "#e0e0e0"
    }
})
export default App