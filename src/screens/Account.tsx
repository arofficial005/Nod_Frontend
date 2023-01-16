import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontisto from  "react-native-vector-icons/Fontisto"
import { Header } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { ScrollView } from 'react-native-gesture-handler';
const Account = () => {
  return (
    //header
    <View style={{flex:1,backgroundColor:"white"}}>
    <View  style={{backgroundColor:"white",flexDirection:'row',paddingTop:13,}}>
     <View>
    <Text style={{color:'#1E1E1E',fontFamily:'Poppins',paddingLeft:24,fontWeight:'bold',fontSize:25,lineHeight:37.5}}>Account</Text>
    </View>
    <View>
   <Fontisto name="bell-alt" size={20} color="#900"  style={styles.vectors} />
    </View> 
   </View>

{/* first view card */}
<ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.imgshadow}>
    <Image source={require('../assets/stylish-boy.png')} style={{height:121,width:121,alignSelf:'center',backgroundColor:'#EEF2F5',borderRadius:70}}/>
    </View>
    <Text style={{alignSelf:'center',color:'#9E1616',fontFamily:'Poppins', fontWeight:'bold',fontSize:25,lineHeight:37.5,paddingBottom:25}}>John Lee</Text>
    <View  style={styles.txtsecond} >
    <Fontisto name="email" size={20} color="#900"  />
    <Text  style={{fontSize:14,lineHeight:21,paddingLeft:10,paddingBottom:10}}>johnlee8@gmail.com</Text>
    </View>
    <View  style={styles.txtsecond} >
    <Ionicons name="call-outline" size={20} color="#900"   />
    <Text  style={{fontSize:14,lineHeight:21,paddingLeft:10}}>+971 58266427</Text>
    
    <Text  style={{color:'#9E1616',fontSize:12,lineHeight:18,paddingLeft:25,alignSelf:"center",fontFamily:'Poppins',fontWeight:'300'}}>Change password</Text>
    </View>
    
    </View>
    
     {/* For Lists */}
    <View style={styles.list}>
       <View  style={{flexDirection:'row',flex:0.15}}><Ionicons name="ios-notifications-outline" size={20} color="#900"   /></View>
       <View style={{flexDirection:'row',flex:0.85}}><Text style={{flexDirection:'row',alignItems:'center',flex:1,fontSize:16,lineHeight:24,fontFamily:'Poppins',color:'#090909'}}>Notifications</Text></View>
       </View>
       <View style={styles.list}>
       <View  style={{flexDirection:'row',flex:0.15}}><Ionicons name="scan" size={20} color="#900"   /></View>
       <View style={{flexDirection:'row',flex:0.85}}><Text style={{flexDirection:'row',alignItems:'center',flex:1,fontSize:16,lineHeight:24,fontFamily:'Poppins',color:'#090909'}}>Pending Scans</Text></View>
       <View  style={{flexDirection:'row',flex:0.15,alignSelf:'flex-end'}}><MaterialIcons name="expand-more" size={20} color="#900"   /></View>
       </View>
       <View style={styles.list}>
       <View  style={{flexDirection:'row',flex:0.15}}><AntDesign name="setting" size={20} color="#900"   /></View>
       <View style={{flexDirection:'row',flex:0.85}}><Text style={{flexDirection:'row',alignItems:'center',flex:1,fontSize:16,lineHeight:24,fontFamily:'Poppins',color:'#090909'}}>Settings</Text></View>
       </View>
       <View style={styles.list}>
       <View  style={{flexDirection:'row',flex:0.15}}><MaterialIcons name="logout" size={20} color="#900"   /></View>
       <View style={{flexDirection:'row',flex:0.85}}><Text style={{flexDirection:'row',alignItems:'center',flex:1,fontSize:16,lineHeight:24,fontFamily:'Poppins',color:'#090909'}}>Logout</Text></View>
       </View>
       </ScrollView>
       </View>
       


   
   
    
 
  
   
  )
}

export default Account

const styles = StyleSheet.create({
    vectors:{
      alignSelf:'flex-end',
      paddingLeft:200,
      paddingTop:13,
       },
       txtsecond:{
        flexDirection:'row',
      },
       container:{
        backgroundColor: '#EEF2F5',
        borderRadius: 22,
       padding:25,
       marginTop:80,
       alignSelf:'center',
       marginBottom:15,
      },
      imgshadow:{  
        marginTop:-80,
        alignSelf:'center',
        borderRadius:62,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
      },
      list:{
        flexDirection:'row',
        alignItems:'center',
       backgroundColor:'#EEF2F5',
        padding:20,
        marginBottom:15,
        borderRadius:25,
        marginLeft:27,
        marginRight:27,
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