import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './TodoItem.style';
const TodoItem = ({todo,setActive}) => {
  return (
    <View style={[styles.container,!todo.isActive&&styles.done]}>
        
        
      <TouchableOpacity onPress={()=>setActive(todo.id)}>
      <Text style={!todo.isActive?styles.underlined_text:styles.text}>{todo.todo}</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default TodoItem;
