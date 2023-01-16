
import React,{Component,useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import Index from '.';

const Referral=({navigation}:any)=>
{

    return (
     <>
     <View style={styles.flex}>
    <View style={styles.container}>

        <Text  style={styles.txtfirst}>Earn free points by sharing below referral code</Text>
        <View style={styles.txtsecond}>
        <Text >Simply share your referral code to earn rewards awarded on first usage</Text>
    </View>
    <View style={styles.view2}>
<Text style={{color:"#9E1616",fontSize:20,alignSelf:'center',paddingTop:8}} >ZA192837</Text> 
<TouchableOpacity  style={{backgroundColor:'black',borderRadius:12, padding:4,}} onPress={() => navigation.navigate("About")
      }>
  <Text style={{color:"#FFFFFF",fontSize:20,alignSelf:'center',paddingTop:3,backgroundColor:'black'}} >Share Code</Text> 
</TouchableOpacity>
  
    </View>
    </View>
    </View>
     </>
    )
  }
export default Referral;


const styles = StyleSheet.create({
  flex:{
   flex:1,
   backgroundColor:'white',
  },
  
  container:{
        borderRadius: 33,
        marginTop:120,
      marginLeft:29,
      marginRight:28,
      alignSelf:'center',
      },
      txtfirst:{
       fontSize:18,
       fontFamily: 'Poppins',
       //fontWeight: 'bold',
       color:'#4D4D4D ',
      },
      txtsecond:{
        fontSize:12,
        paddingTop:12,
        paddingBottom:20,
        fontFamily: 'Poppins',
        color:'#4D4D4D',

      },
      txt:{
      fontSize:16,
      },
      view2:{
        borderRadius:13,
   backgroundColor:'#EEF2F5',
   padding:2,
  
      },
      view3:{
        borderRadius: 12,
   backgroundColor:'#000000',
   padding:7,
      },
 
})