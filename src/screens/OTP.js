import React, {useRef, useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Display from '../Display';

const OTPScreen =  ({navigation}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  let [counter,setCounter]=useState(25)


  const incrementCounter=()=>{
    counter=counter-1
    setCounter(counter)
  }
 
 
if(counter>0)
  setInterval(incrementCounter,1800)


  return (
    
    <View style={styles.container}>
      

      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.navigate('PhoneNumber')}
        />
        <Text style={styles.headerTitle}>Title</Text>
      </View>


      <Text style={styles.title}>Verify Number</Text>
      <Text style={{alignSelf:'center',fontSize:28,fontWeight:'bold'}}>{counter<=0?'':`00:${counter}`}</Text>
      
      <Text style={styles.content}>
       Type the verification code we've sent you        
      </Text>


      <View style={styles.otpContainer}>
       
       {/* // First input box */}
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>


            {/* // second input box */}
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>

        {/* //3rd */}
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>

        {/* //fourth */}
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus(); 
            }}
          />
        </View>
      </View>

      <TouchableOpacity >
        <Text style={{alignSelf:'center'}}>Send Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate('DetailsScreen')}>
        <Text style={styles.signinButtonText}>Verify</Text>
      </TouchableOpacity>


    </View>
  );
 
    
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:15,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily:'Regular',
    marginLeft:'38%',
    alignSelf:'center'
  },
  title: {
    fontSize: 28,
    fontFamily:'Bold',
    lineHeight: 20 * 1.4,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
    textAlign:'center'
  },
  content: {
    fontSize: 20,
    fontFamily:'Regular',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign:'center'
  },
 
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
   backgroundColor:'#F0F0F0',
   borderRadius:15
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor:'black',
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: 'white',
    fontFamily:'Regular',
  },
});

export default OTPScreen;