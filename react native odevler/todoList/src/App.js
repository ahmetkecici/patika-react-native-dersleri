import React, { useState } from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native';
import Header from './components/Header/Header'
import SaveTodo from './components/SaveTodo/SaveTodo';
import TodoItem from './components/TodoItem';


 
const App=()=>{
 
  const [data,setData]=useState([])
  const [disableBtn,setDisableBtn]=useState(true)
  const [todo,setTodo]=useState("")
  const  handleChange=(text)=>{

      setTodo(text)
      if (text === "") {
        setDisableBtn(true)
      }else{
        setDisableBtn(false)
      }
    
      
    
  }
 
  function setActive(id){
     let list=data
     list=list.map(x=>{
      if (x.id==id) {
       x.isActive=!x.isActive
      }
      return x
    })
        setData(list)
  }
  function AddTodo(){

     let list =data 
     let id;
     if (list.length<=0) {
      id=0
    
     }else{
     
       id=list[list.length-1].id
     }
     let addedTodo={id:id+1,todo:todo,isActive:true};
     list.push(addedTodo)
     setData(list)
     setTodo("")
     setDisableBtn(true)

  }
  
  const renderTodos=({item})=><TodoItem todo={item} setActive={setActive}/>
  return (

    <View style={styles.container}>
      <Header count={data.length}/>
       <FlatList 
       data={data}
       renderItem={renderTodos}
       />
       <SaveTodo disableBtn={disableBtn} todoValue={todo} saveTodo={AddTodo} onChange={handleChange}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ecf0f1"
  }
})
export default App