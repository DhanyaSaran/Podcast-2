import React from 'react'
import {View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Mainhome from '../screens/Mainhome'
import Events from '../screens/Events'
import Podcast from '../screens/Podcast'
import Article from '../screens/Article'

import Author from '../screens/Author'
import Books from '../screens/Books'

import { enableScreens } from 'react-native-screens'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

enableScreens()
const Stack = createStackNavigator()

const Home = ({ token }) => {
    const [fontLoaded] = useFonts({
        Regular: require('../assets/font/NotoSans-Regular.ttf'),
        Bold: require('../assets/font/NotoSans-Bold.ttf'),
        Bolditalic: require('../assets/font/NotoSans-BoldItalic.ttf'),
        Italic: require('../assets/font/NotoSans-Italic.ttf'),


    })

    return fontLoaded ? (
  

        <Stack.Navigator screenOptions={{ headerShown: false }}>
           
            <Stack.Screen name="Mainhome" component={Mainhome} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Podcast" component={Podcast} />
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Author" component={Author}/>
            <Stack.Screen name='Books' component={Books}/>
            
        </Stack.Navigator>
     

    ) : <AppLoading />
}

export default Home