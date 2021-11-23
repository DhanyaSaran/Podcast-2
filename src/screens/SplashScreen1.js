import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';


const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='white'
        translucent
      />
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.button}>
        <Text style={styles.titleText}> A Telugu Christian Podcast</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    color: 'black',
    justifyContent: 'center',
    marginTop: 100,
    fontSize: 20,
    fontFamily: 'Regular'
  },
  button: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  }

});

export default SplashScreen;