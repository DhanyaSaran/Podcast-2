import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OTscreen3');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='white'
        translucent
      />
      <TouchableOpacity onPress={() => navigation.navigate('OTscreen3')} style={styles.button}>


        <View style={{ marginTop: 100, marginLeft: 20 }}>
          <Text style={styles.titleText}>Welcome to </Text>
          <Text style={[styles.titleText, { fontSize: 35, fontWeight: 'bold' }]}>Jeevitham {'\n'} Podcast</Text>
        </View>


        <Image source={{ uri: 'https://image.shutterstock.com/z/stock-vector-microphone-icon-sign-and-symbol-microphone-color-icon-for-website-design-and-mobile-app-1524729095.jpg' }} style={styles.image}></Image>

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.titleText}>A first of its kind Telugu {'\n'}Christian Podcast</Text>
          <Text style={[styles.titleText, { color: 'grey', fontSize: 12, marginTop: 20 }]}>HOST</Text>
          <Text style={[styles.titleText, { fontWeight: 'bold' }]}>Suresh Vanguri</Text>
          <Text style={styles.titleText}>Bible Teacher,Author</Text>
          <Text style={styles.titleText}>Vijaywada, Andhra Pradesh</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: (180),
    width: (150),
    alignSelf: 'flex-end'
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Regular'
  },
  button: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  }

});

export default WelcomeScreen;