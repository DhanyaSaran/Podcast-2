import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";



export default  MyHeader =({navigation})=> {
    
        return (
            <View style={{flexDirection:'row',marginTop:15}} >
  
            <TouchableOpacity  onPress={() => navigation.navigate('Mainhome')}>
            <Ionicons
          name="chevron-back-outline" 
          size={30}/>
          </TouchableOpacity>

          <Text style={styles.logotext}> Logo </Text>
          <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('Author')}>
         
          </TouchableOpacity>
         
          </View>
        )
   
}



const styles = StyleSheet.create({
    
  image:{
    borderRadius:60,
    borderWidth:2,
    width:40,
    height:40,
    marginLeft:'35%'
  },
  logotext:{
    marginLeft:'35%'
  }
  
  });
  