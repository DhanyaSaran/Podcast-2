import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EventItem = ({type}) => {
console.log(type)
    if(type)
    {
return(
   <View>
       <TouchableOpacity style={styles.container2}>
                <View style={styles.leftview2}>
                <Text>21 Nov Tue</Text>
                    <Text>17:00</Text>
                    <View style={{marginTop:20}}>

                    <Text>Event Type</Text>
                    <Text>Event Title</Text>

                    </View>
                </View>

                <View style={styles.rightview}>
                    
                    {/* <View style={styles.subrightView1}>
                       
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={30} />
                        </TouchableOpacity>
                    </View> */}
                    
                    
                    <View style={styles.subrightView2}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons name="location-outline" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons name="logo-youtube" color='red' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.circle,{backgroundColor:'black'}]}>
                            <Ionicons name="calendar-outline" color="white" size={25} />
                        </TouchableOpacity>
                    </View>
                
                </View>
                <Text style={styles.texts}> </Text>
            </TouchableOpacity>

        </View>

)
    }
else{
    return (
       
        <View>

            <TouchableOpacity style={styles.container}>
                <View style={styles.leftview}>
                    <Text>date {'\n'}{'\n'}Month {'\n'}{'\n'}{'\n'}{'\n'}Day</Text>
                </View>

                <View style={styles.rightview}>
                    
                    <View style={styles.subrightView1}>
                        <Text>Event Type</Text>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                    
                    <Text>Event Title</Text>
                    <Text>Time</Text>
                    
                    <View style={styles.subrightView2}>
                        <TouchableOpacity>
                            <Ionicons name="location-outline" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="calendar-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                
                </View>
                <Text style={styles.texts}> </Text>
            </TouchableOpacity>

        </View>

    );
}
};

const styles = StyleSheet.create({

    container: {
        marginTop: 5,
        width: 270,
        height: 140,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
        flexDirection: 'column'

    },
    container2: {
        marginTop: 5,
        width: '90%',
        height: 140,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
        flexDirection: 'column'

    },
   
    texts: {
        fontFamily: 'Regular'
    },
    leftview: {
        flexDirection: 'column',  width: '20%', height: '100%',marginLeft:5
    },
    leftview2: {
        flexDirection: 'column',  
        width: '30%',
        marginLeft:5,
        backgroundColor:'#f0f3f7',
        height:'40%',
        borderRadius:10,
        marginTop:20,
        alignItems:'center',
        
    },
    rightview: {
        flexDirection: 'column', 
        position: 'absolute', marginLeft: 55, width: '78%', height: '100%'
    },
    subrightView1:{
        flexDirection:'row',justifyContent:'space-between'
    },
    subrightView2:{
        flexDirection:'row',justifyContent:'flex-end',marginTop:15
    },
    circle:{
        borderRadius:60,
        width:45,
        height:45,
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
       justifyContent:'center',marginRight:5
    }
});

export default EventItem;