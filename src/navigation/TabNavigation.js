import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import LikedItems from "../screens/LikedItems";
import Notifications from '../screens/Notifications'
import AuthorScreen from '../screens/Author'


const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={ styles.bottomTabStyleLight  }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } 
            else if (route.name === "LikedItems") {
              iconName = focused ? "heart" : "heart-outline";
            }
            else if (route.name === "Notifications") {
                iconName = focused ? "notifications" : "notifications-outline";
              }
              else if (route.name === "AuthorScreen") {
                iconName = focused ? "person" : "person-outline";
              }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"black"}
        inactiveColor={"gray"}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="LikedItems"
          component={LikedItems}
          options={{ unmountOnBlur: true }}
        />
         <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{ unmountOnBlur: true }}
        />
         <Tab.Screen
          name="AuthorScreen"
          component={AuthorScreen}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});