import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Flatlistcn = (props:any) => {
  return (
    <FlatList
      data={props.name}
      renderItem={({item})=>{
       return( <View style={styles.list}>
       <View  style={{flexDirection:'row',flex:0.15}}><Image   style={styles.img} source={item.img}/></View>
       <View style={{flexDirection:'row',flex:0.85}}><Text style={{flexDirection:'row',alignItems:'center',flex:1}}>{item.name}</Text></View>
       </View>)
      
    }}
      />
      
      
  )
}

export default Flatlistcn

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        marginRight:20,
        },
        safe:{
         backgroundColor:'white',
         flex:1,
          },
        title:{
          fontFamily: 'Poppins',
          fontSize:16,
          fontWeight: 'bold',
          
          alignSelf:'flex-start',
        },
        list:{
          flexDirection:'row',
          alignItems:'center',
          flex:1,backgroundColor:'#EEF2F5',
          marginTop:10,
          paddingVertical:10,
          paddingHorizontal:10,
          borderRadius:8,
        },
        txt:{
          fontSize:12,
          lineHeight:18,
          fontWeight:'300',
          paddingLeft:10,
          justifyContent: 'center'
        },
        img:{
  height:30,
  width:30,
  backgroundColor:'#CFBEAA',
  borderRadius:25,
  paddingLeft:20,
  alignSelf:'center',
  
        },
})