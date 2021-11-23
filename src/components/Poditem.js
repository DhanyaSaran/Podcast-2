import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let heartcolor='white'
const Poditem = ({item,color,textColor}) => {
  let [like,setLike]=useState(false)
  const change=()=>
  {
    setLike(!like)
    heartcolor=like?'red':'white'
  }
  return (
    <View>
     
            <TouchableOpacity style={[styles.recents,{backgroundColor:color}]}>
                <Text style={[styles.texts,{color:textColor}]}> {item} </Text>

                {

{color}=='white'?
<TouchableOpacity style={styles.circle} onPress={change}> 
                <View> 
                    <Ionicons  name="heart" size={25} color={heartcolor} />
                </View>
                </TouchableOpacity>
                :<TouchableOpacity></TouchableOpacity>
                }
                
            </TouchableOpacity>
           
            </View>
  );
};

const styles = StyleSheet.create({

  recents:{
    marginTop:5,
    backgroundColor:'#FFF',
    borderRadius:60,
    width:75,
    height:75,
    marginLeft:20,
    borderColor:'black',
    borderWidth:2,
    justifyContent:'center'
  },
  texts:{
    fontFamily:'Bold',
    fontSize:18,
    textAlign:'center',
  //justifyContent:'space-evenly'
  },
  icon:{
    
  },
  circle:{
    backgroundColor:'black',
    borderRadius:30,
    width:35,
    height:35,
    justifyContent:'center',
    marginLeft:50,
    alignItems:'center'
  }
});

export default Poditem;