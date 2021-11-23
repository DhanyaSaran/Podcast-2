import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryCode from '../constants/CountryCode';
import FlagItem from '../components/FlagItem'
//import {StaticImageService} from '../services/StaticImageService';
import Display from '../Display';

const getDropdownStyle = y => ({ ...styles.countryDropdown, top: y + 60 });



const PhoneNumber = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(CountryCode.find(country => country.name === 'India'),);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [inputsContainerY, setInputsContainerY] = useState(0);


  const closeDropdown = (pageX, pageY) => {
    if (isDropdownOpen) {
      if (
        pageX < dropdownLayout?.x ||
        pageX > dropdownLayout?.x + dropdownLayout?.width ||
        pageY < dropdownLayout?.y ||
        pageY > dropdownLayout?.y + dropdownLayout?.height
      ) {
        setIsDropdownOpen(false);
      }
    }
  };
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={({ nativeEvent: { pageX, pageY } }) =>
        closeDropdown(pageX, pageY)
      }>
      <StatusBar
        barStyle="dark-content"
        backgroundColor='white'
        translucent
      />


      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>App title</Text>
      </View>
      
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Get started by {'\n'}creating your account
      </Text>

      <View
        style={styles.inputsContainer}
        onLayout={({
          nativeEvent: {
            layout: { y },
          },
        }) => setInputsContainerY(y)}>


        <View style={styles.nestedview}>
          <View>
            <Text style={{ marginLeft: 20 }}>Country/Region</Text>
            <TouchableOpacity style={styles.countryListContainer}
              onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Text style={styles.countryCodeText}>
                {selectedCountry.dial_code}  {selectedCountry.name}
              </Text>

              <MaterialIcons name="keyboard-arrow-down" size={18} />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor='lightgrey'
            selectionColor='lightgrey'
            keyboardType="number-pad"
            onFocus={() => setIsDropdownOpen(false)}
            style={styles.inputText}
            onChangeText={text =>
              setPhoneNumber(selectedCountry?.dial_code + text)
            }
          />
        </View>

      </View>


      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('OTPScreen', { phoneNumber })}>
        <Text style={styles.signinButtonText}>Login</Text>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View
          style={getDropdownStyle(inputsContainerY)}
          onLayout={({
            nativeEvent: {
              layout: { x, y, height, width },
            },
          }) => setDropdownLayout({ x, y, height, width })}>
            
          <FlatList
            data={CountryCode}
            keyExtractor={item => item.code}
            renderItem={({ item }) => (
              <FlagItem
                {...item}
                onPress={country => {
                  setSelectedCountry(country);
                  setIsDropdownOpen(false);
                }}
              />
            )}
          />
        </View>
      )}
      <TouchableOpacity>
        <Text style={styles.textlast}>Privacy And Agreements</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30
  },


  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Regular',
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },


  title: {
    fontSize: 30,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontFamily: 'Bold',
  },


  content: {
    fontSize: 20,
    fontFamily: 'Regular',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    fontFamily: 'Regular',
  },
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 50,
    width: '75%'
  },
  nestedview:{
    borderWidth: 2, borderRadius: 10, borderColor: 'lightgrey',
     width:Dimensions.get('window').width-50
  },

  countryListContainer: {
    //backgroundColor: 'pink',
    width: '75%',
    marginLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20
  },

  // flatIcon: {
  //   height: 20,
  //   width: 20,
  // },
  countryCodeText: {
    fontSize: 14,
    color: 'black',
  },


  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    width:Dimensions.get('window').width-50,
    borderWidth: 0.5,
    borderRadius: 10,
    borderTopColor: 'lightgrey',
    borderLeftColor:'white',
    borderBottomColor:'white',
    borderRightColor:'white',
    height: 60,
    marginTop: 20
  },

  countryDropdown: {
    backgroundColor: 'white',
    position: 'absolute',
    width: Display.setWidth(80),
    height: Display.setHeight(50),
    marginLeft: 20,
    borderRadius: 10,
    zIndex: 3,
  },

  signinButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: 'white',
    fontFamily: 'Regular',
  },
  textlast:{
     textAlign: 'center', marginTop: 20 
  }
});

export default PhoneNumber;