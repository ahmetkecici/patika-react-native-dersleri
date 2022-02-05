import {Dimensions, StyleSheet} from 'react-native'


const styles=StyleSheet.create({
 container:{
     backgroundColor:"white",
     margin:10,
     borderRadius:10,
               
 },
 inner_container:{
     padding:5
 },
 image:{
     
     height:Dimensions.get("window").height/4,
     borderTopLeftRadius:10,
     borderTopRightRadius:10
 },
 title:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"black"
 },
 description:{
     marginTop:5,
     textAlign:"center",
     color:"black"
 },
 author:{
     
  textAlign:"right",
  fontStyle:"italic",
 }
}) ;

export default styles;
