import { StyleSheet, Text, FlatList,View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flatlistcn from './Flatlistcn'



const Notifications = () => {

    const names=[
        {
            id:1,
            img:require('../assets/steer.png'),
            name:"Scan the bill for your visit at Waitrose Dubai Mall.",
        }, {
            id:2,
            img:require('../assets/bell.png'),
            name:"To ensure proper app stability, ensure you have the latest update.",
        }, {
            id:3,
            img:require('../assets/steer.png'),
            name:"There are 5 pending bill scans. Bills must be scanned 30 days before ",
        }, 
    ]
     
  return (
    <SafeAreaView style={styles.safe}>

<View style={styles.container}>
        <Text style={styles.title}>Recent</Text>
      <Flatlistcn name={names}/>
      </View>

        {/* second FlatList */}
      <View style={styles.container}>
        <Text style={styles.title}>Earlier</Text>
        <Flatlistcn name={names}/>
      </View>
    </SafeAreaView>
  )
}

export default Notifications
  
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
  
})