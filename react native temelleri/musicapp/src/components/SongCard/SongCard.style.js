import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container:{
       padding:10,
       flexDirection:"row"
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    inner_container:{
      
         flex:1,
         padding:15,
         justifyContent:"center"
    },
    title:{
        fontWeight:"bold",
        color:"black",
        fontSize:21
    },
    info_container:{
        flexDirection:"row",
        flex:1,
        alignItems:"center"
    },
    year:{
        marginLeft:5,
          color:"gray",
        fontWeight:"bold"
    },
    sold_out:{
     
        borderWidth:1,
        borderColor:"red",
        padding:10,
        borderRadius:5,
     
    },
    sold_out_title:{
        color:"red"
    },
    content_container:{
        flexDirection:"row",

      
    }
  
});


export default styles;
