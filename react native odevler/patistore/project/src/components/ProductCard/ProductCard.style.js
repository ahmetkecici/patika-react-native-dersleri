import { Dimensions, StyleSheet } from "react-native";

const styles=StyleSheet.create({
   container:{
       margin:10,
    backgroundColor:"#ECEFF1",
    padding:10,
    flex:1

   },
   inner_container:{
   
   },
   product_img:{
    
       height:Dimensions.get("window").height/4,
       resizeMode:"stretch"
   },
   product_title:{
       color:"black",
       fontWeight:"bold",
       fontSize:16
   },
   product_price:{
        textAlign:"right",
        fontSize:17,
        color:"black",

     
   },
   in_stock:{
       fontWeight:"bold",
       color:"red",
       textAlign:"right"
   }
});

export default styles