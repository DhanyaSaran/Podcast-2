import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen1'
import WelcomeScreen from '../screens/SplashScreen2'
import OTscreen3 from '../screens/SplashScreen3'
import PhoneNumber from '../screens/PhoneNumber'
import OTPScreen from '../screens/OTP'
import DetailsScreen from '../screens/DetailsScreen'
import BottomTabNavigator from './TabNavigation'

//import {connect} from 'react-redux';

const Stack = createStackNavigator();

const Navigators = ({ token }) => {
  console.log({ token })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          <>

            {/* <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="OTscreen3" component={OTscreen3} /> 
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />

          </>
        ) : (''
          // <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const mapStateToProps = state => {
//   return {
//     token: state.generalState.token,
//   };
// };

//export default connect(mapStateToProps)(Navigators);


export default Navigators