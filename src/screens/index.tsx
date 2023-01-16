
import React,{Component,useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from  "react-native-vector-icons/Feather"
const Index=()=>
{
  const [toggle,settoggle] =useState(false);
console.log(toggle)

    return (
     <>
      <View style={styles.flex}>
    <View style={styles.container}>
    <View  style={styles.txtsecond} >

    <AntDesign name="bells" size={20} color="#900"  style={styles.vectors}  />
    <Text  style={styles.txt}>Receive Notifications</Text>
    
     <View  style={styles.txtthird} >
    <ToggleSwitch
  isOn={toggle}
  onColor='#89B900'
  offColor="grey"
  disabled={false}
  labelStyle={{ color: "black", alignItems: 'flex-end' }}
  size="small"
  onToggle={isOn => settoggle(isOn)}
  style={styles.toggle}
   />
   </View>

    </View>
    <View  style={styles.txtsecond} >
    <AntDesign name="questioncircleo" size={20} color="#900" style={styles.vectors}  />
    <Text  style={styles.txt}>FAQs</Text>
    </View>

    <View  style={styles.txtsecond} >
    <Feather name="alert-circle" size={20} color="#900"  style={styles.vectors} />
    <Text  style={styles.txt}>About us</Text>
    </View>
    <View  style={styles.txtsecond} >
    <Feather name="share-2" size={20} color="#900"  style={styles.vectors} />
    <Text  style={styles.txt}>Referral</Text>
    </View>

    <View  style={styles.txtsecond} >
    <AntDesign name="delete" size={20} color="#900" style={styles.vectors}  />
    <Text  style={styles.txt}>Delete Account</Text>
    </View>
    </View>
    </View>
     </>
    )
  }
export default Index;


const styles = StyleSheet.create({
  flex:{
    flex:1,
    backgroundColor:'white',
   },
    container:{
        backgroundColor: '#EEF2F5',
        borderRadius: 33,
        padding:25,
        marginTop:90,
      marginLeft:26,
      marginRight:26,
      },
      txtsecond:{
        backgroundColor: '#EEF2F5',
        padding:15,
        flexDirection:'row',
      },
      txtthird:{
      alignSelf:'flex-end',
      },
      txt:{
      fontSize:16,
      },
      vectors:{
       marginRight:20,
       paddingLeft:0,
      },
      toggle:{
        paddingLeft:16,
        
       },
})