import React from 'react';
import Navigators from './src/navigation/StackNavigation';
//import Store from './src/Store';
//import {Provider} from 'react-redux';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
export default () => {
const [fontLoaded]=useFonts({
  Regular:require('./src/assets/font/NotoSans-Regular.ttf'),
  Bold:require('./src/assets/font/NotoSans-Bold.ttf'),
  Bolditalic:require('./src/assets/font/NotoSans-BoldItalic.ttf'),
  Italic:require('./src/assets/font/NotoSans-Italic.ttf'),


})
return fontLoaded?(
  //<Provider store={Store}>
    <Navigators />
  //</Provider>
):<AppLoading/>
}
