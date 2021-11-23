import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';


const OTscreen3 = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('PhoneNumber');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('PhoneNumber')} style={styles.button}>

        <Text style={styles.titleText}>Get</Text>
        <Text style={[styles.titleText, { fontSize: 30, fontWeight: 'bold' }]}>Daily Updates</Text>
        <Text style={[styles.titleText, { marginTop: 20 }]}>Know all about my events and {'\n'}get notified about it </Text>


        <View style={styles.view2}>
          <Image source={{ uri: 'https://toppng.com/uploads/preview/school-books-stack-115502530125lf0mr3ly5.png' }} style={[styles.image]}></Image>
          <Image source={{ uri: 'https://image.shutterstock.com/z/stock-vector-microphone-icon-sign-and-symbol-microphone-color-icon-for-website-design-and-mobile-app-1524729095.jpg' }} style={[styles.image]}></Image>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100
  },
  image: {
    height: (120),
    width: (120),
    marginLeft: 20,

  },
  titleText: {
    color: 'black',
    fontSize: 24,
    marginLeft: 20,
    fontFamily: 'Regular'

  },
  button: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  },
  view2: {
    marginTop: 30, flexDirection: 'row', justifyContent: 'space-evenly'
  }
});

export default OTscreen3;