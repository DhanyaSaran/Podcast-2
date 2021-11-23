import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';




const DetailsScreen = ({navigation}) => {
    const [all_details,setDetails]=useState({})
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [location,setLocation]=useState('')
    const [gender,setGender]=useState('')
    const [age,setAge]=useState('')
   



const updateDetails=()=>{
setDetails({
'Name:':name,
'E-mail': email,
'Location':location,
'Gender':gender,
'Age-group':age


})

navigation.navigate('BottomTabNavigator')

}

return(
    <View style={styles.container}>
      <Text styles={[styles.text,{textAlign:'center'}]}>App Title</Text>
        <Text style={styles.text}>Details</Text>

    <View style={styles.inputview}>
    <Ionicons name="person-outline" size={30} style={{color:'grey'}}/>
    <TextInput placeholder='Full Name' style={{width:330}} onChangeText={(text)=>{setName(text)}}></TextInput>
    </View>


    <View style={styles.inputview}>
    <Ionicons name="mail-outline" size={30} style={{color:'grey'}} />
    <TextInput placeholder='Email' style={{width:330}} onChangeText={(text)=>{setEmail(text)}}></TextInput>
    </View>


    <View style={styles.inputview}>
      <TouchableOpacity >
    <Ionicons name="location-outline" size={30}style={{color:'grey'}} />
    </TouchableOpacity>
    <TextInput placeholder='Location' style={{width:330}} onChangeText={(text)=>{setLocation(text)}}></TextInput>
    </View>

    <View style={{flexDirection:'row',marginLeft:18}}>
      <View style={[styles.inputview,{width:100}]}>
      <Ionicons name="male-female-outline" size={30} style={{color:'grey'}}  /><Text style={{color:'grey'}}>Gender</Text>
      </View>
    
    <TouchableOpacity onPress={()=>setGender('Male')}  style={[styles.inputview,{width:105,marginLeft:20,justifyContent:'center',backgroundColor: gender=='Male'?'lightgrey':'white'}]}><Text style={{color:'grey'}}>Male</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setGender('Female')}  style={[styles.inputview,{width:105,marginLeft:20,justifyContent:'center',backgroundColor: gender=='Female'?'lightgrey':'white'}]}><Text style={{color:'grey'}}>Female</Text></TouchableOpacity>
    </View>


<View style={{flexDirection:'row',marginLeft:18}} >
<View style={[styles.inputview,{width:80}]}>
      <Ionicons name="hourglass-outline" size={30}  style={{color:'grey'}} /><Text style={{color:'grey'}}>Age</Text>
      </View>
      <TouchableOpacity onPress={()=>setAge('16-25')}  style={[styles.inputview,{width:70,marginLeft:20,justifyContent:'center',backgroundColor: age=='16-25'?'lightgrey':'white'}]}><Text style={{color:'grey'}}>16-25</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setAge('26-40')}  style={[styles.inputview,{width:70,marginLeft:20,justifyContent:'center',backgroundColor: age=='26-40'?'lightgrey':'white'}]}><Text style={{color:'grey'}}>26-40</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setAge('40+')}  style={[styles.inputview,{width:70,marginLeft:20,justifyContent:'center',backgroundColor: age=='40+'?'lightgrey':'white'}]}><Text style={{color:'grey'}}>40+</Text></TouchableOpacity>
   
</View>


<TouchableOpacity style={[styles.inputview,{backgroundColor:'black',justifyContent:'center'}]} onPress={()=>updateDetails()}>
    <Text style={{color:'white',fontSize:18}}>
        Save Details
    </Text>
</TouchableOpacity>





</View>
)
}




const styles=StyleSheet.create({
    inputview:{
        flexDirection: 'row',
        borderWidth:2,
        borderColor:'lightgrey', 
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        height:45,
        borderRadius:10,
        alignItems:'center',
        fontFamily:'Regular',
        color:'lightgrey'

    },
    container:{flex:1,marginTop:30,backgroundColor:'white'},
    text:{fontSize:30,fontFamily:'Bold',}

})





export default DetailsScreen









 
// <Dropdown 
// data={data}
// placeholder='Age'
// value={selectedAge}
// onChange={item=>{
//     setSelectedAge(item.value);
//     console.log('selected ',item)
// }}
// renderItem={item => _renderItem(item)}

// /> 




// items={[
    // {label: '0-10', value: '0-10'},
    // {label: '11-20', value: '11-20'},
    // {label: '21-30', value: '21-30'},
    // {label: '31-40', value: '31-40'},
    // {label: '41-50', value: '41-50'},
    // {label: '51-60', value: '51-60'},
    // {label: '61-70', value: '61-70'},
    // {label: '71-80', value: '71-80'},
    // {label: '81-90', value: '81-90'},
    // {label: '91-100', value: '91-100'},
    // {label: 'Others', value: 'Others'},
//   ]}




{/* <DropDownPicker
items={[
  { label: "Image 1", value: "image_1" },
  { label: "Image 2", value: "image_2" },
  { label: "Image 3", value: "image_3" },
  { label: "Image 4", value: "image_4" },
  { label: "Image 5", value: "image_5" }
]}
dropDownContainerStyle={{ backgroundColor: 'white',zIndex: 1000, elevation: 1000 }}
defaultNull
containerStyle={{
  height: 40,
 
}}
onOpen={() => {
 setdropdownHeight(170)
}}
onClose={() => {
  setdropdownHeight(40)
}}
style={{ backgroundColor: "transparent" }}
itemStyle={{
  justifyContent: "flex-start"
}}
dropDownStyle={{
  backgroundColor:  "#eee" 
}}
labelStyle={{
 color:'blue'
}}
arrowStyle={{
  color:'purple'
}    
}
onChangeItem={item =>
 setSelectedAge(item.value)
}
/> */}





// Working code

// <View style={{height:dropdownHeight,marginTop:30}} >

// <DropDownPicker
// open={open}
// value={value}
// items={items}
// setOpen={setOpen}
// setValue={setValue}
// setItems={setItems}
// onOpen={() => {
// setdropdownHeight(280)
// }}
// onClose={() => {
// setdropdownHeight(50)
// }}
// // onChangeText={item=>{setItems(item)}}


// dropDownContainerStyle={{ backgroundColor: 'white',zIndex: 1000, elevation: 1000 }}
// />

// </View>