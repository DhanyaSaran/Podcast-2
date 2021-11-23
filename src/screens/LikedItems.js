import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import  Header  from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default LikedItems =({navigation})=> {
  
        return (
            <View style={{  flex: 1 }}>
                <Header navigation={navigation}/>
            <View style={{flexDirection:'row',marginTop:20}}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="mic-outline" size={20} style={styles.buttontext}/>
                    <Text> Podcast </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="today-outline" size={20} style={styles.buttontext}/>
                    <Text> Events </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="reader-outline" size={20} style={styles.buttontext}/>
                    <Text> Articles </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    
}




const styles=StyleSheet.create({
    button:{
        flexDirection:'row',
        backgroundColor:'lightgrey',
        marginLeft:10,
        marginRight:15,
        borderRadius:15,
        width:'27%',
        height:40,
        alignItems:'center'
    },
    buttontext:{color:'grey',marginLeft:5}
})